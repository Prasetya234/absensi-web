<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start">
      <h2 class="text-3xl font-bold">Attendance List</h2>
    </div>
    <div class="bg-white rounded-md shadow-md text-center p-3 overflow-x-auto">
      <table class="">
        <thead class="bg-[#e8e8e8] text-sm">
          <tr>
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
          :class="`border bg-gray-100 rounded-full p-2 duration-300 ${
            currentPage === 0 ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-transparent'
          }`"
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
            currentPage === page ? 'bg-[#F7931E] text-white border border-[#F7931E] px-3' : 'bg-gray-100 border'
          }`"
          v-for="(page, idx) in totalPages"
          :key="idx"
          @click="curr(page)"
        >
          {{ page + 1 }}
        </button>
        <button
          :class="`border bg-gray-100 rounded-full p-2 ${
            currentPage === totalPages.length - 1
              ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-transparent'
          }`"
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
  name: 'PagePresence',
  data: () => ({
    presensies: [],
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
    async fetchPresensi(page = 0) {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `presensi?page=${page}&size=${this.perPage}`
          })
        );
        this.presensies = res.data.content;
        const pages = [];
        for (let index = 0; index < res.data.totalPages; index++) {
          pages.push(index);
        }
        this.totalPages = pages;
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
    curr(page) {
      this.currentPage = page;
      this.setPage(page);
      return this.fetchPresensi(page);
    },
    next() {
      const total = this.totalPages.length - 1;
      if (this.currentPage === total) {
        const page = this.currentPage;
        this.setPage(page);
        return this.fetchPresensi(page);
      } else {
        const next = this.currentPage + 1;
        this.setPage(next);
        return this.fetchPresensi(next);
      }
    },
    prev() {
      const page = this.currentPage;
      if (page === 0) {
        this.setPage(page);
        return this.fetchPresensi(page);
      } else {
        const prev = this.currentPage - 1;
        this.setPage(prev);
        return this.fetchPresensi(prev);
      }
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
