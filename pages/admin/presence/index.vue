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
          class="border p-1 rounded-full flex justify-center"
          title="Previous"
          @click="prev"
        >
          <IconsArrowcevron style="transform: rotate('left')" size="20" />
        </button>
        <div class="flex flex-row gap-0.5">
          <button
            class="border rounded py-0.5 px-3 duration-300 hover:bg-[#CC6633] hover:text-white hover:duration-300"
            v-for="(page, idx) in totalPages"
            :key="idx"
            @click="fetchPresensi(page)"
          >
            {{ page + 1 }}
          </button>
        </div>
        <button
          class="border p-1 rounded-full flex justify-center"
          title="Next"
          @click="next"
        >
          <IconsArrowcevron size="20" />
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
    page: 0,
  }),
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async fetchPresensi(page = 0, size = 10) {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `presensi?page=${page}&size=${size}`
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
    next() {
      const next = this.page + 1;
      this.fetchPresensi(next);
    },
    prev() {
      const prev = this.page - 1;
      if (this.fetchPresensi() > 0) {
      this.fetchPresensi(prev);
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
