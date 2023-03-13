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
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      fill="#FFFFFF"
                      class="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                      /></svg
                  ></span>
                </button>
                <button
                  class="bg-[#21759B] p-2.5 rounded-lg"
                  title="User Information"
                  @click="toInfo(data.id)"
                >
                  <span
                    ><svg
                      width="17"
                      height="17"
                      viewBox="0 0 16 16"
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.58214 0 0 3.58214 0 8C0 12.4179 3.58214 16 8 16C12.4179 16 16 12.4179 16 8C16 3.58214 12.4179 0 8 0ZM8 14.6429C4.33214 14.6429 1.35714 11.6679 1.35714 8C1.35714 4.33214 4.33214 1.35714 8 1.35714C11.6679 1.35714 14.6429 4.33214 14.6429 8C14.6429 11.6679 11.6679 14.6429 8 14.6429Z"
                        fill="white"
                      />
                      <path
                        d="M7.14258 4.85714C7.14258 5.08447 7.23288 5.30249 7.39363 5.46323C7.55437 5.62398 7.77239 5.71429 7.99972 5.71429C8.22705 5.71429 8.44507 5.62398 8.60581 5.46323C8.76656 5.30249 8.85686 5.08447 8.85686 4.85714C8.85686 4.62981 8.76656 4.4118 8.60581 4.25105C8.44507 4.09031 8.22705 4 7.99972 4C7.77239 4 7.55437 4.09031 7.39363 4.25105C7.23288 4.4118 7.14258 4.62981 7.14258 4.85714ZM8.42829 6.85714H7.57115C7.49258 6.85714 7.42829 6.92143 7.42829 7V11.8571C7.42829 11.9357 7.49258 12 7.57115 12H8.42829C8.50686 12 8.57115 11.9357 8.57115 11.8571V7C8.57115 6.92143 8.50686 6.85714 8.42829 6.85714Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
                <button
                  class="bg-[#DA8C2A] p-2.5 rounded-lg"
                  title="Edit User"
                  @click="toEdit(data.id)"
                >
                  <span
                    ><svg
                      width="17"
                      height="17"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.98332 2.60522L10.3953 4.01655L8.98332 2.60522ZM9.89132 1.36188L6.07332 5.17989C5.87604 5.37688 5.7415 5.62787 5.68665 5.90122L5.33398 7.66655L7.09932 7.31322C7.37265 7.25855 7.62332 7.12455 7.82065 6.92722L11.6387 3.10922C11.7534 2.99449 11.8444 2.85828 11.9065 2.70838C11.9686 2.55847 12.0005 2.39781 12.0005 2.23555C12.0005 2.0733 11.9686 1.91263 11.9065 1.76273C11.8444 1.61282 11.7534 1.47662 11.6387 1.36188C11.5239 1.24715 11.3877 1.15614 11.2378 1.09405C11.0879 1.03196 10.9272 1 10.765 1C10.6027 1 10.4421 1.03196 10.2922 1.09405C10.1423 1.15614 10.006 1.24715 9.89132 1.36188V1.36188Z"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.667 8.99967V10.9997C10.667 11.3533 10.5265 11.6924 10.2765 11.9425C10.0264 12.1925 9.68728 12.333 9.33366 12.333H2.00033C1.6467 12.333 1.30756 12.1925 1.05752 11.9425C0.807468 11.6924 0.666992 11.3533 0.666992 10.9997V3.66634C0.666992 3.31272 0.807468 2.97358 1.05752 2.72353C1.30756 2.47348 1.6467 2.33301 2.00033 2.33301H4.00033"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination flex flex-row justify-center gap-2 text-sm my-3">
        <button
          :class="`border bg-gray-100 rounded-full p-2 ${
            currentPage === 0
              ? 'cursor-not-allowed text-gray-500'
              : 'cursor-pointer hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-transparent'
          }`"
          title="Previous Page"
          @click="prev"
        >
          <span class="flex justify-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              /></svg
          ></span>
        </button>
        <button
          :class="`rounded-full py-1 px-3 duration-300 hover:bg-[#F7931E]/60 hover:text-white hover:border-transparent hover:duration-300 ${
            currentPage === page
              ? 'bg-[#F7931E] text-white border border-[#F7931E] px-3'
              : 'bg-gray-100 border'
          }`"
          v-for="(page, idx) in totalPages"
          :key="idx"
          :title="`Page ${idx + 1}`"
          @click="curr(page)"
        >
          {{ page + 1 }}
        </button>
        <button
          :class="`border bg-gray-100 rounded-full p-2 ${
            currentPage === totalPages.length - 1
              ? 'cursor-not-allowed text-gray-500'
              : 'cursor-pointer hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-transparent'
          }`"
          title="Next Page"
          @click="next"
        >
          <span class="flex justify-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              /></svg
          ></span>
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
    perPage: 10
  }),
  computed: {
    pageTotal() {
      return Math.ceil(this.totalPages.length / this.perPage);
    }
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async fetchStudent(page = 0) {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `class-bootcamp/students?page=${page}&size=${this.perPage}`
          })
        );
        this.students = res.data.content;
        const pages = [];
        for (let index = 0; index < res.data.totalPages; index++) {
          pages.push(index);
        }
        this.totalPages = pages;
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
      } else {
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
      } else {
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
