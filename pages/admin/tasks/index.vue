<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between">
      <h2 class="font-bold text-2xl md:text-3xl">Student Assignment</h2>
      <button
        class="bg-[#CC6633] rounded-md flex flex-row py-2 pr-2 pl-1 text-white fill-[#FFFFFF]"
        @click="toggle"
      >
        <span><icons-plus /></span>
        <span>New Task</span>
      </button>
    </div>
    <div
      class="bg-white rounded-md shadow-md flex flex-col gap-5 text-center p-3 w-full overflow-x-auto"
    >
      <div class="flex flex-row gap-4 pt-3 pb-0 px-2">
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
          <label for="sorByTaskType" class="text-left text-xs text-[#58595B]"
            >Sort By Task Type</label
          >
          <div
            class="border border-[#C2C2C2] rounded-md flex flex-row w-full py-2 px-3"
          >
            <select
              name="sort-by-task-type"
              id="sortByTaskType"
              class="text-sm text-[#333333] w-full focus:outline-none focus:ring-0 cursor-pointer"
              v-model="taskType"
            >
              <option value="">Default</option>
              <option value="JOINTLY">JOINTLY</option>
              <option value="INDIVIDUAL">INDIVIDUAL</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-1.5" v-if="taskType === 'INDIVIDUAL'">
          <label for="sorByTaskType" class="text-left text-xs text-[#58595B]"
            >Receiver Name</label
          >
          <div
            class="border border-[#C2C2C2] rounded-md flex flex-row w-full py-2 px-3"
          >
            <select
              name="sort-by-task-type"
              id="sortByTaskType"
              class="text-sm text-[#333333] w-full focus:outline-none focus:ring-0 cursor-pointer"
              v-model="idUser"
            >
              <option value="">Default</option>
              <option
                v-for="(student, index) in students"
                :key="index"
                :value="student.id"
              >
                {{ student.firstName }} {{ student.lastName }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <label
            for="sortByAssignmentDate"
            class="text-left text-xs text-[#58595B]"
            >Sort By Assignment Date</label
          >
          <div
            class="border border-[#C2C2C2] rounded-md flex flex-row w-full py-2 px-3"
          >
            <select
              name="sort-by-assignment-date"
              id="sortByAssignmentDate"
              class="text-sm text-[#333333] w-full focus:outline-none focus:ring-0 cursor-pointer"
              v-model="direction"
            >
              <option value="">Default Update</option>
              <option value="desc">New Update</option>
              <option value="asc">Oldest Update</option>
            </select>
          </div>
        </div>
        <div class="flex items-end">
          <button
            class="bg-[#CC6633] py-2 px-5 rounded-md w-full h-fit md:w-fit md:h-fit text-white text-bold duration-300 hover:duration-300 hover:bg-[#F7931E]"
            @click="filter(currentPage, perPage, taskType, idUser, direction)"
          >
            Filter
          </button>
        </div>
      </div>
      <table class="table-fixed">
        <thead class="bg-[#e8e8e8] text-sm">
          <tr>
            <th>No</th>
            <th>Note</th>
            <th>Type</th>
            <th>Receiver</th>
            <th>Assignment Date</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="text-xs">
          <tr v-for="(task, idx) in tasks" :key="idx">
            <td>{{ currentPage * perPage + idx + 1 }}</td>
            <td class="break-words text-justify w-96">{{ task.note }}</td>
            <td>{{ task.taskType }}</td>
            <td>
              <span v-if="task.userId.id != userId"
                >{{ task.userId.firstName }} {{ task.userId.lastName }}</span
              >
              <span v-else>All</span>
            </td>
            <td>{{ momentFormat(task.assignmentDate) }}</td>
            <td>{{ momentFormat(task.dueDate) }}</td>
            <td>
              <div class="flex justify-center gap-3 mx-2">
                <button
                  class="bg-[#DA8C2A] rounded-md p-2 text-white"
                  @click="toggleUpOpen(task.id)"
                >
                  <span>
                    <icons-edit />
                  </span>
                  <!-- @click="updateStatusTask(task.id, task.isClosed)" -->
                  <!-- <span v-if="is_closed">Selesai</span
                  ><span v-else>Progress</span> -->
                </button>
                <button
                  class="bg-[#DC2626] rounded-md p-2 fill-[#FFFFFF]"
                  @click="deleteTask(task.id)"
                >
                  <span><icons-trash :size="26" /></span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination flex flex-row justify-center gap-2 text-sm my-3">
        <button
          :class="`rounded-full w-9 h-9 duration-300 ${
            currentPage <= 0
              ? 'cursor-not-allowed border-gray-100 bg-gray-100 fill-gray-500 duration-300'
              : 'cursor-pointer bg-[#CC6633] duration-300 hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-[#F7931E] fill-[#FFFFFF]'
          }`"
          title="Previous Page"
          :disabled="currentPage <= 0 ? true : false"
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
          :class="`rounded-full w-9 h-9 duration-300 hover:bg-[#F7931E] hover:text-white hover:border-[#F7931E] hover:duration-300 ${
            currentPage === page
              ? 'bg-[#CC6633] text-white border border-[#CC6633] px-3'
              : 'bg-gray-100 border-gray-100'
          }`"
          v-for="(page, index) in totalPages"
          :key="index"
          :title="`Page ${page + 1}`"
          @click="curr(page)"
        >
          {{ page + 1 }}
        </button>
        <button
          :class="`rounded-full w-9 h-9 duration-300 ${
            currentPage >= totalPages.length - 1
              ? 'cursor-not-allowed border-gray-100 bg-gray-100 fill-gray-500 duration-300'
              : 'cursor-pointer bg-[#CC6633] duration-300 hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-[#F7931E] fill-[#FFFFFF]'
          }`"
          title="Next Page"
          :disabled="currentPage >= totalPages.length - 1"
          @click="next"
        >
          <span class="flex justify-center">
            <IconsArrowcevron class="pt-[8px] pl-[7px]" :size="34"
          /></span>
        </button>
      </div>
    </div>
    <!-- modal new task start -->
    <modal class="flex flex-col gap-5" v-if="isNewTask" :onclose="toggle">
      <h3 class="text-xl font-bold text-center capitalize -mt-2 mb-2">
        New Task
      </h3>
      <form action="" class="flex flex-col gap-5" @submit.prevent="addTask">
        <div class="flex flex-row gap-3">
          <div class="task-type flex flex-col gap-1 w-full h-full">
            <label for="task-type" class="text-sm font-medium text-gray-800"
              >Task Type</label
            >
            <select
              name="task-type"
              id="type"
              class="border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] focus:ring-0"
              v-model="newTask.taskType"
            >
              <option value="JOINTLY">JOINTLY</option>
              <option value="INDIVIDUAL">INDIVIDUAL</option>
            </select>
          </div>
          <div
            class="user_id flex flex-col gap-1 w-full h-full"
            v-if="newTask.taskType === 'INDIVIDUAL'"
          >
            <label for="user_id" class="text-sm font-medium text-gray-800"
              >User</label
            >
            <select
              name="user-id"
              id="user_id"
              class="border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] focus:ring-0"
              v-model="newTask.user"
            >
              <option
                v-for="(student, idx) in students"
                :key="idx"
                :value="student.id"
              >
                {{ student.firstName }} {{ student.lastName }}
              </option>
            </select>
          </div>
        </div>
        <div class="due_date flex flex-col gap-1 w-full h-full">
          <label for="due_date" class="text-sm font-medium text-gray-800"
            >Due Date</label
          >
          <input
            type="date"
            id="due_date"
            v-model="newTask.dueDate"
            class="border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] focus:ring-0"
          />
        </div>

        <div class="note flex flex-col gap-1">
          <label for="note" class="text-sm font-medium text-gray-800"
            >Note</label
          >
          <textarea
            name="note"
            id="note"
            rows="3"
            placeholder="Some note"
            v-model="newTask.note"
            class="border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] focus:ring-0"
          ></textarea>
        </div>
        <button
          :class="`border rounded-md p-2 text-white ${
            !newTask.note && !newTask.dueDate && !newTask.user
              ? 'bg-[#CC6633]/50 cursor-not-allowed'
              : 'bg-[#CC6633] cursor-pointer'
          }`"
          :disabled="
            !newTask.note && !newTask.dueDate && !newTask.user ? true : false
          "
          type="submit"
        >
          Submit
        </button>
      </form>
    </modal>
    <!-- modal new task end -->
    <!-- modal update task start -->
    <modal v-if="isUpdate" :onclose="toggleUpClose">
      <h3 class="text-xl font-bold text-center capitalize -mt-2 mb-2">
        Update Task
      </h3>
      <form
        action=""
        class="flex flex-col gap-4"
        @submit.prevent="updateTask(taskID)"
      >
        <div class="flex flex-row gap-3">
          <div class="task-type flex flex-col gap-1 w-full h-full">
            <label for="task-type" class="text-sm font-medium text-gray-800"
              >Task Type</label
            >
            <select
              name="task-type"
              id="type"
              class="border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] focus:ring-0"
              v-model="upTask.taskType"
            >
              <option value="JOINTLY">JOINTLY</option>
              <option value="INDIVIDUAL">INDIVIDUAL</option>
            </select>
          </div>
          <div
            class="user_id flex flex-col gap-1 w-full h-full"
            v-if="upTask.taskType === 'INDIVIDUAL'"
          >
            <label for="user_id" class="text-sm font-medium text-gray-800"
              >User</label
            >
            <select
              name="user-id"
              id="user_id"
              class="border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] focus:ring-0"
              v-model="upTask.userId.id"
            >
              <option value="">Choose User</option>
              <option
                v-for="(student, idx) in students"
                :key="idx"
                :value="student.id"
              >
                {{ student.firstName }} {{ student.lastName }}
              </option>
            </select>
          </div>
        </div>
        <div class="note flex flex-col gap-1">
          <label for="note" class="text-sm font-medium text-gray-800"
            >Note</label
          >
          <textarea
            name="note"
            id="note"
            rows="3"
            placeholder="Some note"
            v-model="upTask.note"
            class="border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] focus:ring-0 focus:outline-none focus:ring-0"
          ></textarea>
        </div>
        <div class="due_date flex flex-col gap-1 w-full h-full">
          <label for="due_date" class="text-sm font-medium text-gray-800"
            >Due Date</label
          >
          <input
            type="date"
            id="due_date"
            v-model="upTask.dueDate"
            class="border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] focus:ring-0 focus:outline-none focus:ring-0"
          />
        </div>
        <button
          :class="`border rounded-md p-2 text-white ${
            !upTask.note && !upTask.dueDate && !upTask.userId.id
              ? 'bg-[#CC6633]/50 cursor-not-allowed'
              : 'bg-[#CC6633] cursor-pointer'
          }`"
          :disabled="
            !upTask.note && !upTask.dueDate && !upTask.userId.id ? true : false
          "
          type="submit"
        >
          Submit
        </button>
      </form>
    </modal>
    <!-- modal update task endF -->
  </div>
</template>
<script>
import moment from 'moment';
import { mapActions } from 'vuex';
import { createConfig } from '~/service/api-manager';
export default {
  name: 'TasksPage',
  data: () => ({
    userId: '',
    tasks: [],
    newTask: {
      note: '',
      dueDate: '',
      taskType: 'JOINTLY',
      user: ''
    },
    upTask: {
      note: '',
      assignmentDate: '',
      dueDate: '',
      taskType: '',
      userId: {
        id: ''
      },
      isClosed: false
    },
    // is_closed: false,
    taskID: 0,
    isNewTask: false,
    isUpdate: false,
    students: [],
    totalPages: [],
    currentPage: 0,
    perPage: 10,
    taskType: '',
    idUser: '',
    direction: ''
  }),
  mounted() {
    this.fetchUserId();
    this.fetchTasks();
    this.fetchStudents();
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async fetchUserId() {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'user'
          })
        );
        this.userId = res.data.id;
      } catch {}
    },
    momentFormat(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    errorMessage(msg) {
      this.$toasted.show(msg, {
        position: 'top-center',
        type: 'error',
        duration: 5000,
        theme: 'bubble',
        singleton: true
      });
    },
    async fetchTasks(
      page = this.currentPage,
      size = this.perPage,
      type = this.taskType,
      userId = this.idUser,
      direction = this.direction
    ) {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `tasks?type=${type}&userId=${userId}&page=${page}&size=${size}`
          })
        );
        this.tasks = res.data.content;
        const pages = [];
        for (let idx = 0; idx < res.data.totalPages; idx++) {
          pages.push(idx);
        }
        this.totalPages = pages;
        const order = direction === 'desc' ? 1 : direction === 'asc' ? -1 : 0;
        this.tasks.sort((a, b) => {
          a = new Date(a.assignmentDate);
          b = new Date(b.assignmentDate);
          const result = a > b ? -1 : a < b ? 1 : 0;
          return result * order;
        });
      } catch {}
    },
    toggle() {
      this.isNewTask = !this.isNewTask;
    },
    toggleUpOpen(id) {
      this.taskID = id;
      this.isUpdate = true;
      this.fetchTaskByID(id)
    },
    toggleUpClose() {
      this.isUpdate = false;
    },
    async addTask(e) {
      e.preventDefault();

      if (this.newTask.taskType === 'JOINTLY') {
        this.newTask.user = null;
      }
      try {
        this.showLoading();
        this.newTask.assignmentDate = new Date().toISOString().split('T')[0];
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().postData({
            url: 'tasks/new',
            data: {
              note: this.newTask.note,
              assignmentDate: this.newTask.assignmentDate,
              dueDate: this.newTask.dueDate,
              taskType: this.newTask.taskType,
              user: this.newTask.user
            }
          })
        );
        this.newTask = res.data;
        this.isNewTask = false;
        this.newTask.note = '';
        this.newTask.dueDate = '';
        this.newTask.taskType = 'JOINTLY';
        this.fetchTasks();
        this.$toasted.show('Success added new task', {
          position: 'top-center',
          type: 'success',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      } catch {
        this.errorMessage('Cannot added new task');
      } finally {
        this.hideLoading();
      }
    },
    async fetchTaskByID() {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `tasks/${this.taskID}`
          })
        );
        this.upTask = res.data;
      } catch {}
    },
    async updateTask(id) {
      if (this.upTask.taskType === 'JOINTLY') {
        this.upTask.userId.id = null;
      }
      try {
        this.showLoading();
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().putData({
            url: `tasks/${id}`,
            data: {
              note: this.upTask.note,
              assignmentDate: this.upTask.assignmentDate,
              dueDate: this.upTask.dueDate,
              taskType: this.upTask.taskType,
              user: this.upTask.userId.id,
              isClosed: this.upTask.isClosed
            }
          })
        );
        this.upTask = res.data;
        this.isUpdate = false;
        this.$toasted.show('Success update task', {
          position: 'top-center',
          type: 'success',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
        this.fetchTasks(this.currentPage, this.perPage);
      } catch {
        this.errorMessage('Cannot update this task');
      } finally {
        this.hideLoading();
      }
    },
    // async updateStatusTask(id, status) {
    //   try {
    //     this.is_closed = !status;
    //     const { data: res } = await this.$axios(
    //       // eslint-disable-next-line new-cap
    //       new createConfig().putData({
    //         url: `tasks/status/${id}`,
    //         data: {
    //           isClosed: this.is_closed
    //         }
    //       })
    //     );
    //     this.is_closed = res.data.isClosed;
    //   } catch {
    //     this.errorMessage('Cannot change status of this tasks');
    //   }
    // },
    async deleteTask(id) {
      try {
        await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().deleteData({
            url: `tasks/${id}`
          })
        );
        this.$toasted.show('Deleted success', {
          position: 'top-center',
          type: 'error',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
        this.fetchTasks();
      } catch {
        this.errorMessage('Cannot remove this task');
      }
    },
    async fetchStudents() {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `school/students?keyword=`
          })
        );
        this.students = res.data;
      } catch {}
    },
    setPage(page) {
      if (page < 0 || page > this.totalPages) {
        return;
      }
      this.currentPage = page;
    },
    curr(page) {
      this.currentPage = page;
      this.setPage(page);
      this.fetchTasks(
        page,
        this.perPage,
        this.taskType,
        this.idUser,
        this.direction
      );
    },
    prev() {
      if (this.currentPage <= 0) {
        return;
      }
      const prev = this.currentPage - 1;
      this.setPage(prev);
      this.fetchTasks(
        prev,
        this.perPage,
        this.taskType,
        this.idUser,
        this.direction
      );
    },
    next() {
      const totalPage = this.totalPages.length - 1;
      if (this.currentPage >= totalPage) {
        return;
      }
      const next = this.currentPage + 1;
      this.setPage(next);
      this.fetchTasks(
        next,
        this.perPage,
        this.taskType,
        this.idUser,
        this.direction
      );
    },
    filter(page, size, type, userId, direction) {
      this.currentPage = page;
      this.setPage(page);
      this.fetchTasks(page, size, type, userId, direction);
    }
  }
};
</script>
<style scoped>
table {
  border-radius: 5px;
  border-collapse: collapse;
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
