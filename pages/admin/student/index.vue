<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start">
      <h2 class="font-bold text-3xl">List Students</h2>
    </div>
    <div class="bg-white rounded-md p-3 shadow-md">
      <table class="fl-table">
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
        <tbody>
          <tr v-for="(data, idx) in students" :key="idx">
            <td>{{ data.noSiswa }}</td>
            <td>{{ data.firstName + ' ' + data.lastName }}</td>
            <td>{{ data.batch }}</td>
            <td>{{ data.gender }}</td>
            <td>{{ data.favorite }}</td>
            <td>
              <button class="button" @click="toDetil(false, data.id)">Add User Face</button>
            </td>
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
  name: 'Student',
  data: () => ({
    students: []
  }),
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async fetchStudent() {
      try {
        const { data: res } = await this.$axios(
        // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'class-bootcamp/students'
          })
        );
        this.students = res.data;
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
            url: 'face-user/'  + userId
          })
        );
        return true
      } catch {
        return false
      }
      finally {
        this.hideLoading();
      }
    }
  },
  mounted() {
    this.fetchStudent();
  }
};
</script>

<style scoped>
.button {
  background: #F7931E;
  border-radius: 10px;
  padding: 8px 24px;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 16px;
  border: none;
}
.fl-table {
  border-radius: 5px;
  font-size: 14px;
  font-weight: normal;
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
  font-size: 12px;
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
