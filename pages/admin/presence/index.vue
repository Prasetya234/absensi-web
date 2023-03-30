<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start">
      <h2 class="text-3xl font-bold">Attendance List</h2>
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
              type="search"
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
          <label for="sort" class="text-left text-xs text-[#58595B]"
            >Sort</label
          >
          <div
            class="border border-[#C2C2C2] rounded-md flex flex-row w-full py-2 px-3"
          >
            <select
              name="sort"
              id="sort"
              class="text-sm text-[#333333] focus:outline-none focus:ring-0 cursor-pointer"
              v-model="isLate"
            >
              <option value="" selected>All</option>
              <option :value="1">Late</option>
              <option :value="0">No Late</option>
            </select>
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
              <option :value="3">3</option>
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
            >Sort By Update</label
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
              <option value="">Original Update</option>
              <option value="desc">New Update</option>
              <option value="asc">Oldest Update</option>
            </select>
          </div>
        </div>
        <div class="flex items-end">
          <button
            class="bg-[#CC6633] py-2 px-5 rounded-md w-fit h-fit text-white text-bold duration-300 hover:duration-300 hover:bg-[#F7931E]"
            @click="filter(currentPage, isLate, perPage, keyword, direction)"
          >
            Filter
          </button>
        </div>
      </div>
      <table class="table-fixed">
        <thead class="bg-[#e8e8e8] text-sm">
          <tr>
            <th>Create At</th>
            <th>Full Name</th>
            <th>Serial Number</th>
            <th>School Class</th>
            <th>Gender</th>
            <th>Date Submit</th>
            <th>Late</th>
            <th>Permission Attend</th>
            <th>Reason</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody class="text-xs">
          <tr v-for="(data, idx) in presensies" :key="idx">
            <td>
              <p>{{ data.createAt }}</p>
            </td>
            <td>
              <p>{{ data.userId.firstName + ' ' + data.userId.lastName }}</p>
            </td>
            <td>
              <p>{{ data.userId.noSiswa }}</p>
            </td>
            <td>
              <p>{{ data.userId.schoolClass }}</p>
            </td>
            <td>
              <p
                :class="
                  data.userId.gender === 'FEMALE'
                    ? 'bg-pink-200 rounded-full p-1'
                    : 'bg-blue-200 rounded-full p-1'
                "
              >
                {{ data.userId.gender }}
              </p>
            </td>
            <td>
              <p>{{ data.dateSubmit }}</p>
            </td>
            <td>
              <p>
                {{ data.isLate === null ? '-' : data.isLate ? 'LATE' : '-' }}
              </p>
            </td>
            <td>
              <p>
                {{
                  data.permissionAttend === null ||
                  data.permissionAttend === false
                    ? '-'
                    : data.permissionAttend
                }}
              </p>
            </td>
            <td>
              <p>
                {{ data.reasonId === null ? '-' : data.reasonId.name }}
              </p>
            </td>
            <td>
              <p>{{ data.note === null ? '-' : data.note }}</p>
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
            <IconsArrowcevron class="pt-[8px] pl-[7px]" direction="left" :size="34"
          /></span>
        </button>
        <button
          :class="`rounded-full w-9 h-9 duration-300 hover:bg-[#F7931E] hover:text-white hover:border-transparent hover:duration-300 ${
            currentPage === page
              ? 'bg-[#CC6633] text-white border border-[#CC6633] px-3'
              : 'bg-gray-100 border'
          }`"
          v-for="(page, idx) in totalPages"
          :key="idx"
          :title="`Page ${idx + 1}`"
          @click="curr(page, isLate, perPage, keyword, direction)"
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
          <span class="flex justify-center"
            >
          <IconsArrowcevron class="pt-[8px] pl-[7px]" :size="34" /></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { createConfig, responseManager } from '~/service/api-manager';
export default {
  name: 'PagePresence',
  data: () => ({
    presensies: [],
    totalPages: [],
    currentPage: 0,
    perPage: 10,
    isLate: '',
    keyword: '',
    direction: ''
  }),
  computed: {
    pageTotal() {
      return Math.ceil(this.totalPages.length / this.perPage);
    }
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async fetchPresensi(
      page = 0,
      isLate = '',
      perPage = 10,
      keyword = '',
      sort = ''
    ) {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `presensi?search=${keyword}&isLate=${isLate}&page=${page}&size=${perPage}`
          })
        );
        this.presensies = res.data.content;
        const pages = [];
        for (let index = 0; index < res.data.totalPages; index++) {
          pages.push(index);
        }
        this.totalPages = pages;
        const order = sort === 'desc' ? 1 : sort === 'asc' ? -1 : 0;
        this.presensies.sort((a, b) => {
          a = new Date(a.createAt);
          b = new Date(b.createAt);
          const result = a > b ? -1 : a < b ? 1 : 0;
          return result * order;
        });
      } catch (error) {
        // eslint-disable-next-line new-cap
        const err = new responseManager().manageError(error);
        this.$toast.show(err?.error || err.message, {
          position: 'top-center',
          type: 'error',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      }
    },
    setPage(page) {
      if (page < 0 || page > this.pageTotal) {
        return;
      }
      this.currentPage = page;
    },
    curr(page, late, size, search, sort) {
      this.currentPage = page;
      this.isLate = late;
      this.perPage = size;
      this.keyword = search;
      this.direction = sort;
      this.setPage(page);
      return this.fetchPresensi(page, late, size, search, sort);
    },
    async next() {
      console.log(this.currentPage);
      console.log(this.totalPages.length);
      const total = this.totalPages.length - 1;
      const page = this.currentPage;
      const late = this.isLate;
      const size = this.perPage;
      const search = this.keyword;
      const sort = this.direction;
      if (this.currentPage === total) {
        this.setPage(page);
        return await this.fetchPresensi(page, late, size, search, sort);
      } else {
        const next = this.currentPage + 1;
        this.setPage(next);
        return await this.fetchPresensi(next, late, size, search, sort);
      }
    },
    async prev() {
      const page = this.currentPage;
      const late = this.isLate;
      const size = this.perPage;
      const search = this.keyword;
      const sort = this.direction;
      if (page === 0) {
        this.setPage(page);
        return await this.fetchPresensi(page, late, size, search, sort);
      } else {
        const prev = this.currentPage - 1;
        this.setPage(prev);
        return await this.fetchPresensi(prev, late, size, search, sort);
      }
    },
    async filter(page, late, size, search, sort) {
      this.currentPage = page = 0;
      this.isLate = late;
      this.perPage = size;
      this.keyword = search;
      this.direction = sort;
      console.log(page, late, size, search, sort);
      return await this.fetchPresensi(page, late, size, search, sort);
    }
  },
  mounted() {
    this.fetchPresensi();
  }
};
</script>
<style scoped>
table {
  border-radius: 5px;
  border-collapse: collapse;
  width: 100%;
  background-color: white;
}

table th,
table td {
  padding: 15px 10px;
}

table td {
  border: 1px solid #f8f8f8;
}
</style>
