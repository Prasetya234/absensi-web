<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start">
      <h2 class="text-3xl font-bold">Attendance List</h2>
    </div>
    <div class="bg-white rounded-md text-center p-3 shadow-md overflow-x-auto">
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
            <td><p>{{ data.userId.noSiswa }}</p></td>
            <td><p>{{ data.userId.schoolClass }}</p></td>
            <td><p :class="data.userId.gender === 'FEMALE' ? 'bg-pink-200 rounded-full p-1' : 'bg-blue-200 rounded-full p-1'">{{ data.userId.gender }}</p></td>
            <td><p>{{ data.dateSubmit }}</p></td>
            <td>
              <p>{{ data.isLate === null ? '-' : data.isLate ? 'LATE' : '-' }}</p>
            </td>
            <td>
              <p>{{
                data.permissionAttend === null ||
                data.permissionAttend === false
                  ? '-'
                  : data.permissionAttend
              }}</p>
            </td>
            <td>
              <p>{{
                data.reasonId === null
                  ? '-'
                  : data.reasonId === 1
                  ? 'SICK'
                  : data.reasonId === 2
                  ? 'FAMILY EVENTS'
                  : data.reasonId === 3
                  ? 'OTHERS'
                  : data.reasonId
              }}</p>
            </td>
            <td><p>{{ data.note === null ? '-' : data.note }}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { createConfig, responseManager } from '~/service/api-manager';
export default {
  name: 'PagePresence',
  data: () => ({
    presensies: []
  }),
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async fetchPresensi() {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'presensi'
          })
        );
        this.presensies = res.data;
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
