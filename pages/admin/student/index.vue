<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start">
      <h2 class="font-bold text-3xl">List Students</h2>
    </div>
    <div
      class="bg-white rounded-md shadow-md flex flex-col gap-5 text-center p-3 overflow-x-auto"
    >
      <table class="fl-table text-sm">
        <thead>
          <tr>
            <th>No Student</th>
            <th>Fullname</th>
            <th>Batch</th>
            <th>Gender</th>
            <th>Favorite</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="txt-xs">
          <tr v-for="(data, idx) in students" :key="idx">
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
                  <span
                    >
                    <icons-Plus />
                  </span>
                </button>
                <button
                  class="bg-[#21759B] p-2.5 rounded-lg"
                  title="User Information"
                  @click="toInfo(data.id)"
                >
                  <span
                    >
                    <icons-detail />
                  </span>
                </button>
                <button
                  class="bg-[#DA8C2A] p-2.5 rounded-lg"
                  title="Edit User"
                  @click="toEdit(data.id)"
                >
                  <span
                    >
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
    name: "Student",
    data: () => ({
        students: [],
        totalPages: [],
        currentPage: 0,
        perPage: 10
    }),
    computed: {
        pageTotal() {
            return Math.ceil(this.totalPages.length / this.perPage);
        }
    },
    methods: {
        ...mapActions("loading", ["showLoading", "hideLoading"]),
        async fetchStudent(page = 0) {
            try {
                const { data: res } = await this.$axios(
                // eslint-disable-next-line new-cap
                new createConfig().getData({
                    url: `class-bootcamp/students?page=${page}&size=${this.perPage}`
                }));
                this.students = res.data.content;
                const pages = [];
                for (let index = 0; index < res.data.totalPages; index++) {
                    pages.push(index);
                }
                this.totalPages = pages;
            }
            catch (err) {
                // eslint-disable-next-line new-cap
                const error = new responseManager().manageError(err);
                this.$toast.show(error?.error || error.message, {
                    position: "top-center",
                    type: "error",
                    duration: 5000,
                    theme: "bubble",
                    singleton: true
                });
            }
        },
        async toDetil(detail, userId) {
            const faceReady = await this.detectFaceReady(userId);
            if (faceReady) {
                this.$toast.show("User Face Already Exist", {
                    position: "top-center",
                    type: "error",
                    duration: 5000,
                    theme: "bubble",
                    singleton: true
                });
                return;
            }
            this.$router.push({
                path: "student/detail",
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
                    url: "face-user/" + userId
                }));
                return true;
            }
            catch {
                return false;
            }
            finally {
                this.hideLoading();
            }
        },
        async toInfo(userId) {
            const idUser = btoa(userId);
            await this.$router.push({
                path: "info-student",
                query: {
                    idUser
                }
            });
        },
        async toEdit(userId) {
            const idUser = btoa(userId);
            await this.$router.push({
                path: "edit-student",
                query: {
                    idUser
                }
            });
        },
        setPage(page) {
            if (page < 0 || page > this.pageTotal) {
                return;
            }
            this.currentPage = page;
        },
        curr(page) {
            this.currentPage = page;
            this.setPage(page);
            return this.fetchStudent(page);
        },
        next() {
            const total = this.totalPages.length - 1;
            if (this.currentPage === total) {
                const page = this.currentPage;
                this.setPage(page);
                return this.fetchStudent(page);
            }
            else {
                const next = this.currentPage + 1;
                this.setPage(next);
                return this.fetchStudent(next);
            }
        },
        prev() {
            const page = this.currentPage;
            if (page === 0) {
                this.setPage(page);
                return this.fetchStudent(page);
            }
            else {
                const prev = this.currentPage - 1;
                this.setPage(prev);
                return this.fetchStudent(prev);
            }
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
