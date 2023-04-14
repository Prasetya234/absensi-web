<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start">
      <h2 class="font-bold text-3xl">List Students</h2>
    </div>
    <div
      class="bg-white rounded-md shadow-md flex flex-col gap-5 text-center p-3 overflow-x-auto"
    >
      <div class="flex flex-row gap-4 pt-3 pb-0 px-2">
        <div class="flex flex-col gap-1.5">
          <label for="searchByName" class="text-left text-xs text-[#58595B]"
            >Search By Name</label
          >
          <div
            class="border border-[#C2C2C2] rounded-md flex flex-row gap-3 w-full py-2 px-3"
          >
            <input
              type="text"
              id="searchByName"
              placeholder="Type here"
              autocomplete="off"
              class="text-sm placeholder:text-[#333333] w-full focus:outline-none focus:ring-0"
              v-model="keyword"
            />
            <span class="flex items-center">
              <icons-magnifier :size="20" />
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="itemPerPage" class="text-left text-xs text-[#58595B]"
            >Display Items Per Page</label
          >
          <div
            class="border border-[#C2C2C2] rounded-md flex flex-row w-full py-2 px-3"
          >
            <select
              name="item-per-page"
              id="itemPerPage"
              class="text-sm text-[#333333] w-full focus:outline-none focus:ring-0 cursor-pointer"
              v-model="perPage"
            >
              <option :value="10">10</option>
              <option :value="25">25</option>
              <option :value="50">50</option>
              <option :value="75">75</option>
              <option :value="100">100</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="sorByUpdate" class="text-left text-xs text-[#58595B]"
            >Sort By ID Student</label
          >
          <div
            class="border border-[#C2C2C2] rounded-md flex flex-row w-full py-2 px-3"
          >
            <select
              name="sort-by-update"
              id="sortByUpdate"
              class="text-sm text-[#333333] focus:outline-none focus:ring-0 cursor-pointer"
              v-model="direction"
            >
              <option value="">Default</option>
              <option value="desc">Big - Small</option>
              <option value="asc">Small - Big</option>
            </select>
          </div>
        </div>
        <div class="flex items-end">
          <button
            class="bg-[#CC6633] py-2 px-5 rounded-md w-fit h-fit text-white text-bold duration-300 hover:duration-300 hover:bg-[#F7931E]"
            @click="filter(currentPage, perPage, keyword, direction)"
          >
            Filter
          </button>
        </div>
      </div>
      <table class="fl-table">
        <thead class="text-sm">
          <tr>
            <!-- <th>No</th> -->
            <th>ID Student</th>
            <th>Fullname</th>
            <th>Batch</th>
            <th>Gender</th>
            <th>Favorite</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="text-xs">
          <tr
            v-for="(data, idx) in students.slice(
              pageStart,
              pageStart + perPage
            )"
            :key="idx"
          >
            <!-- <td>{{ currentPage * perPage + idx + 1 }}</td> -->
            <td>{{ data.noSiswa }}</td>
            <td>{{ data.firstName + ' ' + data.lastName }}</td>
            <td>{{ data.batch }}</td>
            <td>{{ data.gender }}</td>
            <td>{{ data.favorite }}</td>
            <td class="w-56">
              <div class="flex flex-row justify-center gap-5">
                <button
                  class="bg-[#CC6633] p-2.5 rounded-lg"
                  title="Add Face Data"
                  @click="toDetil(false, data.id)"
                >
                  <span>
                    <icons-Plus />
                  </span>
                </button>
                <button
                  class="bg-[#21759B] p-2.5 rounded-lg"
                  title="User Information"
                  @click="toInfo(data.id)"
                >
                  <span>
                    <icons-detail />
                  </span>
                </button>
                <button
                  class="bg-[#DA8C2A] p-2.5 rounded-lg"
                  title="Edit User"
                  @click="toEdit(data.id)"
                >
                  <span>
                    <icons-edit :size="17" />
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination flex flex-row justify-center gap-2 text-sm my-3">
        <button
          :class="`border border-[#CC6633] bg-[#CC6633] text-white rounded-full w-9 h-9 ${
            currentPage === 0
              ? 'cursor-not-allowed text-gray-500 bg-gray-100 border-0'
              : 'cursor-pointer hover:bg-[#F7931E] hover:duration-300 hover:border-transparent'
          }`"
          title="Previous Page"
          @click="prev"
        >
          <span class="flex justify-center">
            <IconsArrowcevron
              class="pt-[8px] pl-[7px]"
              direction="left"
              :size="34"
          /></span>
        </button>
        <button
          :class="`rounded-full w-9 h-9 duration-300 hover:bg-[#F7931E] hover:text-white hover:border-transparent hover:duration-300 ${
            currentPage === index
              ? 'bg-[#CC6633] text-white border border-[#CC6633] px-3'
              : 'bg-gray-100 border'
          }`"
          v-for="(page, index) in totalPages"
          :key="index"
          :title="`Page ${page + 1}`"
          @click="curr(page)"
        >
          {{ page + 1 }}
        </button>
        <button
          :class="`border border-[#CC6633] bg-[#CC6633] text-white rounded-full w-9 h-9 ${
            currentPage === totalPages.length - 1
              ? 'cursor-not-allowed text-gray-500 bg-gray-100 border-0'
              : 'cursor-pointer hover:bg-[#F7931E] hover:duration-300 hover:border-transparent'
          }`"
          title="Next Page"
          @click="next"
        >
          <span class="flex justify-center">
            <IconsArrowcevron class="pt-[8px] pl-[7px]" :size="34"
          /></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { createConfig, responseManager } from '~/service/api-manager';
export default {
  name: 'Student',
  data: () => ({
    students: [],
    totalPages: [],
    currentPage: 0,
    perPage: 10,
    keyword: '',
    direction: ''
  }),
  computed: {
    pageStart() {
      return this.currentPage * this.perPage;
    },
    pageTotal() {
      return Math.ceil(this.students.length / this.perPage);
    }
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async fetchStudent(keyword = '', sort = '') {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `school/students?keyword=${keyword}`
          })
        );
        this.students = res.data;
        const totalPage = Math.ceil(this.students.length / this.perPage);
        const pages = [];
        for (let index = 0; index < totalPage; index++) {
          pages.push(index);
        }
        this.totalPages = pages;
        const order = sort === 'desc' ? 1 : sort === 'asc' ? -1 : 0;
        this.students.sort((a, b) => {
          a = a.noSiswa;
          b = b.noSiswa;
          const result = a > b ? -1 : a < b ? 1 : 0;
          return result * order;
        });
      } catch (err) {
        // eslint-disable-next-line new-cap
        const error = new responseManager().manageError(err);
        this.$toast.show(error?.error || error.message, {
          position: 'top-center',
          type: 'error',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      }
    },
    async toDetil(detail, userId) {
      const faceReady = await this.detectFaceReady(userId);
      if (faceReady) {
        this.$toast.show('User Face Already Exist', {
          position: 'top-center',
          type: 'error',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
        return;
      }
      this.$router.push({
        path: 'student/detail',
        query: {
          detail,
          userId
        }
      });
    },
    async detectFaceReady(userId) {
      this.showLoading();
      try {
        await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'face-user/' + userId
          })
        );
        return true;
      } catch {
        return false;
      } finally {
        this.hideLoading();
      }
    },
    async toInfo(userId) {
      const idUser = btoa(userId);
      await this.$router.push({
        path: 'info-student',
        query: {
          idUser
        }
      });
    },
    async toEdit(userId) {
      const idUser = btoa(userId);
      await this.$router.push({
        path: 'edit-student',
        query: {
          idUser
        }
      });
    },
    setPage(page, size) {
      if (page < 0 || page > this.pageTotal) {
        return;
      }
      this.currentPage = page;
      this.perPage = size;
    },
    curr(page, size, search, sort) {
      this.currentPage = page;
      this.perPage = size;
      this.keyword = search;
      this.direction = sort;
      this.setPage(page, size);
      return this.fetchStudent(search, sort);
    },
    next() {
      const page = this.currentPage;
      const size = this.perPage;
      const search = this.keyword;
      const sort = this.direction;
      const next = this.currentPage + 1;
      if (page < this.pageTotal - 1) {
        this.setPage(next, size);
        return this.fetchStudent(search, sort);
      } else {
        this.setPage(page, size);
        return this.fetchStudent(search, sort);
      }
    },
    prev() {
      const page = this.currentPage;
      const size = this.perPage;
      const search = this.keyword;
      const sort = this.direction;
      const prev = page - 1;
      if (page > 0) {
        this.setPage(prev, size);
        return this.fetchStudent(search, sort);
      } else {
        this.setPage(page, size);
        return this.fetchStudent(search, sort);
      }
    },
    filter(page, size, search, sort) {
      this.currentPage = page = 0;
      this.perPage = size;
      this.keyword = search;
      this.direction = sort;
      this.setPage(page, size);
      return this.fetchStudent(search, sort);
    }
  },
  mounted() {
    this.fetchStudent();
  }
};
</script>

<style scoped>
.fl-table {
  border-radius: 5px;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
}

.fl-table td,
.fl-table th {
  text-align: center;
  padding: 15px 8px;
}

.fl-table td {
  border: 2px solid #f8f8f8;
}

.fl-table thead th {
  color: #333333;
  background-color: #e8e8e8;
}

/* Responsive */

@media (max-width: 767px) {
  .fl-table {
    display: block;
    width: 100%;
  }
  .table-wrapper:before {
    content: 'Scroll horizontally >';
    display: block;
    text-align: right;
    font-size: 11px;
    color: white;
    padding: 0 0 10px;
  }
  .fl-table thead,
  .fl-table tbody,
  .fl-table thead th {
    display: block;
  }
  .fl-table thead th:last-child {
    border-bottom: none;
  }
  .fl-table thead {
    float: left;
  }
  .fl-table tbody {
    width: auto;
    position: relative;
    overflow-x: auto;
  }
  .fl-table td,
  .fl-table th {
    padding: 20px 0.625em 0.625em 0.625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;
  }
  .fl-table thead th {
    text-align: left;
    border-bottom: 1px solid #f7f7f9;
  }
  .fl-table tbody tr {
    display: table-cell;
  }
  .fl-table tbody tr:nth-child(odd) {
    background: none;
  }
  .fl-table tr:nth-child(even) {
    background: transparent;
  }
  .fl-table tr td:nth-child(odd) {
    background: #f8f8f8;
    border-right: 1px solid #e6e4e4;
  }
  .fl-table tr td:nth-child(even) {
    border-right: 1px solid #e6e4e4;
  }
  .fl-table tbody td {
    display: block;
    text-align: center;
  }
}
</style>
