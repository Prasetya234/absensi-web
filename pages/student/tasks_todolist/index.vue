<template>
  <div class="py-28 mx-[5%] grid grid-cols-3 gap-7">
    <div class="tasks-wrap col-span-2 flex flex-col gap-5">
      <div
        class="joint-tasks bg-white border shadow-md rounded-lg flex flex-col gap-4 p-7"
      >
        <h3 class="text-2xl font-semibold">Joint Tasks</h3>
        <table class="table-fixed">
          <thead class="bg-[#e8e8e8] text-sm">
            <tr>
              <th>No</th>
              <th>Note</th>
              <th>Assignment</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-sm text-center"
              v-for="(task, idx) in jointTasks"
              :key="idx"
            >
              <td>{{ joTaskCurrPage * joTaskPerPage + idx + 1 }}</td>
              <td class="break-words text-justify w-96">{{ task.note }}</td>
              <td>{{ momentFormat(task.assignmentDate) }}</td>
              <td>{{ momentFormat(task.dueDate) }}</td>
            </tr>
          </tbody>
        </table>
        <div
          class="joint-tasks-pagination flex flex-row justify-center gap-2 text-sm my-3"
        >
          <button
            :class="`rounded-full w-9 h-9 duration-300 ${
              joTaskCurrPage <= 0
                ? 'cursor-not-allowed border-gray-100 bg-gray-100 fill-gray-500 duration-300'
                : 'cursor-pointer bg-[#CC6633] duration-300 hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-[#F7931E] fill-[#FFFFFF]'
            }`"
            title="Previous Page"
            :disabled="joTaskCurrPage <= 0 ? true : false"
            @click="joTaskPrev"
          >
            <span class="flex justify-center">
              <IconsArrowcevron
                class="pt-[8px] pl-[7px]"
                direction="left"
                :size="34"
            /></span>
          </button>
          <button
            :class="`rounded-full w-9 h-9 duration-300 hover:bg-[#F7931E] hover:text-white hover:border-[#F7931E] hover:duration-300
              ${
                joTaskCurrPage === page
                  ? 'bg-[#CC6633] text-white border border-[#CC6633] px-3'
                  : 'bg-gray-100 border-gray-100'
              } `"
            v-for="(page, index) in joTaskTotPages"
            :key="index"
            :title="`Page ${page + 1}`"
            @click="joTaskCurr(page)"
          >
            {{ page + 1 }}
          </button>

          <button
            :class="`rounded-full w-9 h-9 duration-300 ${
              joTaskCurrPage >= joTaskTotPages.length - 1
                ? 'cursor-not-allowed border-gray-100 bg-gray-100 fill-gray-500 duration-300'
                : 'cursor-pointer bg-[#CC6633] duration-300 hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-[#F7931E] fill-[#FFFFFF]'
            }`"
            title="Next Page"
            :disabled="joTaskCurrPage >= joTaskTotPages.length - 1"
            @click="joTaskNext"
          >
            <span class="flex justify-center">
              <IconsArrowcevron class="pt-[8px] pl-[7px]" :size="34"
            /></span>
          </button>
        </div>
      </div>
      <div
        class="individual-tasks bg-white border shadow-md rounded-lg flex flex-col gap-4 p-7"
      >
        <h3 class="text-2xl font-semibold">Individual Tasks</h3>
        <table class="table">
          <thead class="bg-[#e8e8e8] text-sm">
            <tr>
              <th>No</th>
              <th>Note</th>
              <th>Assignment</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-sm text-center"
              v-for="(task, idx) in individualTasks"
              :key="idx"
            >
              <td>{{ idx + 1 }}</td>
              <td class="break-words text-justify w-96">{{ task.note }}</td>
              <td>{{ momentFormat(task.assignmentDate) }}</td>
              <td>{{ momentFormat(task.dueDate) }}</td>
            </tr>
          </tbody>
        </table>
        <div
          class="individual-tasks-pagination flex flex-row justify-center gap-2 text-sm my-3"
        >
          <button
            :class="`rounded-full w-9 h-9 duration-300 ${
              inTaskCurrPage <= 0
                ? 'cursor-not-allowed border-gray-100 bg-gray-100 fill-gray-500 duration-300'
                : 'cursor-pointer bg-[#CC6633] duration-300 hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-[#F7931E] fill-[#FFFFFF]'
            }`"
            title="Previous Page"
            :disabled="inTaskCurrPage <= 0 ? true : false"
            @click="inTaskPrev"
          >
            <span class="flex justify-center">
              <IconsArrowcevron
                class="pt-[8px] pl-[7px]"
                direction="left"
                :size="34"
            /></span>
          </button>
          <button
            :class="`rounded-full w-9 h-9 duration-300 hover:bg-[#F7931E] hover:text-white hover:border-[#F7931E] hover:duration-300
            ${
              inTaskCurrPage === page
                ? 'bg-[#CC6633] text-white border border-[#CC6633] px-3'
                : 'bg-gray-100 border-gray-100'
            } `"
            v-for="(page, index) in inTaskTotPages"
            :key="index"
            :title="`Page ${page + 1}`"
            @click="inTaskCurr(page)"
          >
            {{ page + 1 }}
          </button>

          <button
            :class="`rounded-full w-9 h-9 duration-300 ${
              inTaskCurrPage >= inTaskTotPages.length - 1
                ? 'cursor-not-allowed border-gray-100 bg-gray-100 fill-gray-500 duration-300'
                : 'cursor-pointer bg-[#CC6633] duration-300 hover:bg-[#F7931E] hover:text-white hover:duration-300 hover:border-[#F7931E] fill-[#FFFFFF]'
            }`"
            title="Next Page"
            :disabled="inTaskCurrPage >= inTaskTotPages.length - 1"
            @click="inTaskPrev"
          >
            <span class="flex justify-center">
              <IconsArrowcevron class="pt-[8px] pl-[7px]" :size="34"
            /></span>
          </button>
        </div>
      </div>
    </div>
    <div class="progress-wrap col-span-1 flex flex-col gap-5">
      <div
        class="progress h-fit bg-white border rounded-lg flex flex-col gap-5 px-7 py-5"
      >
        <h3 class="text-xl text-center font-semibold">
          {{ user.firstName }}'s Progress
        </h3>
        <div class="flex flex-row justify-between">
          <p>
            <span>Total Tasks:</span>
            <span class="font-semibold">{{
              jointTasks.length + individualTasks.length
            }}</span>
          </p>
          <p>
            <span>On Progress:</span>
            <span class="font-semibold">{{ 2 }}</span>
          </p>
        </div>
      </div>
      <div
        class="todolist h-fit bg-white border rounded-lg flex flex-col gap-3 p-7"
      >
        <div class="flex flex-row justify-between">
          <h3 class="text-xl font-semibold">TodoList</h3>
          <button
            :class="`rounded-full px-0.5 h-7 w-7 flex justify-center items-center fill-[#FFFFFF] bg-[#CC6633] transition duration-300 ${
              isAdd
                ? 'rotate-45 transition duration-200'
                : 'rotate-0 transition duration-200'
            }`"
            @click="toggleAddTodo"
          >
            <icons-plus />
          </button>
        </div>
        <ul class="flex flex-col">
          <li v-if="isAdd">
            <form class="flex flex-row gap-3 mb-2" @submit="addTodo">
              <input
                type="text"
                v-model="newTodo.note"
                class="border w-3/4 rounded-md p-1"
              />
              <button
                :class="`rounded-md text-white text-sm uppercase py-1 px-1.5 w-1/4 ${
                  newTodo.note === ''
                    ? 'bg-[#CC6633]/50 cursor-not-allowed'
                    : 'bg-[#CC6633]'
                }`"
                type="submit"
                :disabled="newTodo.note === '' ? true : false"
              >
                add
              </button>
            </form>
          </li>
          <span class="space-y-2 max-h-96 overflow-y-auto" v-if="todoAvailable">
            <li
              v-for="(todo, index) in todolist"
              :key="index"
              class="flex flex-row justify-between items-center gap-x-3 border rounded-lg px-3"
            >
              <div class="w-3/4 my-2">
                <label
                  id="todo-label"
                  for="todo"
                  :class="`text-sm leading-tight text-center ${
                    todo.status ? 'line-through' : ''
                  }`"
                  >{{ todo.note }}</label
                >
              </div>
              <div class="flex flex-row gap-2">
                <button
                  class="w-fit h-fit fill-red-500 flex flex-col justify-center items-center"
                  @click="deleteTodo(todo.id)"
                >
                  <icons-trash :size="17" />
                </button>
                <div class="flex flex-col justify-center items-center">
                  <input
                    id="todo"
                    type="checkbox"
                    :checked="todo.status"
                    class="w-4 h-4 accent-[#CC6633]"
                    @click="putStatus(todo.id, todo.status)"
                  />
                </div>
              </div></li
          ></span>

          <span
            class="text-center capitalize mt-3"
            v-else-if="!todoAvailable && !isAdd"
            >the data is empty</span
          >
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import { createConfig } from '~/service/api-manager';
export default {
  name: 'TasksAndTodolistPage',
  data() {
    return {
      user: {
        id: '',
        firstName: '',
        lastName: ''
      },
      jointTasks: [],
      individualTasks: [],
      todolist: [],
      todoAvailable: false,
      isAdd: false,
      newTodo: {
        note: ''
      },
      status: false,
      idInstructor: '',
      joTaskTotPages: [],
      joTaskCurrPage: 0,
      joTaskPerPage: 5,
      inTaskTotPages: [],
      inTaskCurrPage: 0,
      inTaskPerPage: 5
    };
  },
  mounted() {
    this.fetchIdUser();
    this.fetchTodoList();
    this.checkTodo();
    this.fetchIdInstructor();
  },
  methods: {
    errorMessage(msg) {
      this.$toasted.show(msg, {
        position: 'top-center',
        type: 'error',
        duration: 5000,
        theme: 'bubble',
        singleton: true
      });
    },
    momentFormat(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    async fetchIdUser() {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'user'
          })
        );
        this.user = res.data;
        this.checkTodo();
        this.fetchTodoList();
        this.fetchIndividualTasks(this.inTaskCurrPage, this.inTaskPerPage);
      } catch {}
    },
    async fetchIdInstructor() {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'user/instructor'
          })
        );
        this.idInstructor = res.data.id;
        this.fetchJointTasks(this.joTaskCurrPage, this.joTaskPerPage);
      } catch {}
    },
    async fetchJointTasks(
      page = this.joTaskCurrPage,
      size = this.joTaskPerPage
    ) {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `tasks/user?userId=${this.idInstructor}&page=${page}&size=${size}`
          })
        );
        this.jointTasks = res.data.content;
        const pages = [];
        for (let idx = 0; idx < res.data.totalPages; idx++) {
          pages.push(idx);
        }
        this.joTaskTotPages = pages;
      } catch {}
    },
    async fetchIndividualTasks(
      page = this.inTaskCurrPage,
      size = this.inTaskPerPage
    ) {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `tasks/user?userId=${this.user.id}&page=${page}&size=${size}`
          })
        );
        this.individualTasks = res.data.content;
        const pages = [];
        for (let i = 0; i < res.data.totalPages; i++) {
          pages.push(i);
        }
        this.inTaskTotPages = pages;
      } catch {}
    },
    async fetchTodoList() {
      this.checkTodo();
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `todo-list?userId=${this.user.id}`
          })
        );
        this.todolist = res.data.content;
      } catch {}
    },
    async checkTodo() {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: `todo-list/check?userId=${this.user.id}`
          })
        );
        this.todoAvailable = res.data;
      } catch {}
    },
    async putStatus(id, todoStatus) {
      this.status = !todoStatus;
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().putData({
            url: `todo-list/status/${id}`,
            data: {
              status: this.status
            }
          })
        );
        this.status = res.data.status;
      } catch {
        this.errorMessage('Cannot change status this todo');
      }
    },
    async deleteTodo(id) {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().deleteData({
            url: `todo-list/${id}`
          })
        );
        this.fetchTodoList();
        this.checkTodo();
        return res.data;
      } catch {
        this.errorMessage('Cannot remove this todo');
      }
    },
    toggleAddTodo() {
      this.isAdd = !this.isAdd;
    },
    async addTodo(e) {
      e.preventDefault();
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().postData({
            url: 'todo-list/new',
            data: {
              note: this.newTodo.note
            }
          })
        );
        this.newTodo.note = res.data.note;
        this.newTodo.note = '';
        this.$toast.show(`Success added new todo`, {
          position: 'top-center',
          type: 'success',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
        this.fetchTodoList();
        this.checkTodo();
      } catch {}
    },
    // method pagination joint tasks
    joTaskSetPage(page) {
      if (page < 0 || page > this.joTaskTotPages.length) {
        return;
      }
      this.joTaskCurrPage = page;
    },
    joTaskCurr(page) {
      this.joTaskCurrPage = page;
      this.joTaskSetPage(page);
      this.fetchJointTasks(page);
    },
    joTaskPrev() {
      if (this.joTaskCurrPage <= 0) {
        return;
      }
      const prev = this.joTaskCurrPage - 1;
      this.joTaskSetPage(prev);
      this.fetchJointTasks(prev);
    },
    joTaskNext() {
      const totalpages = this.joTaskTotPages.length - 1;
      if (this.joTaskCurrPage >= totalpages) {
        return;
      }
      const next = this.joTaskCurrPage + 1;
      this.joTaskSetPage(next);
      this.fetchJointTasks(next);
    },
    // method pagination individual tasks
    inTaskSetPage(page) {
      if (page < 0 || page > this.inTaskTotPages) {
        return;
      }
      this.inTaskCurrPage = page;
    },
    inTaskCurr(page) {
      this.inTaskCurrPage = page;
      this.inTaskSetPage(page);
      this.fetchIndividualTasks(page);
    },
    inTaskPrev() {
      if (this.inTaskCurrPage <= 0) {
        return;
      }
      const prev = this.inTaskCurrPage - 1;
      this.inTaskSetPage(prev);
      this.fetchIndividualTasks(prev);
    },
    inTaskNext() {
      const totalpages = this.inTaskTotPages.length - 1;
      if (this.inTaskCurrPage >= totalpages) {
        return;
      }
      const next = this.inTaskCurrPage + 1;
      this.inTaskSetPage(next);
      this.fetchIndividualTasks(next);
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
/* Responsive */

@media (max-width: 767px) {
  table {
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
  table thead,
  table tbody,
  table thead th {
    display: block;
  }
  table thead th:last-child {
    border-bottom: none;
  }
  table thead {
    float: left;
  }
  table tbody {
    width: auto;
    position: relative;
    overflow-x: auto;
  }
  table td,
  table th {
    padding: 20px 0.625em 0.625em 0.625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 13px;
    text-overflow: ellipsis;
  }
  table tbody td {
    width: 100px;
  }
  table thead th {
    text-align: center;
    width: 87px;
    border-bottom: 1px solid #f7f7f9;
  }
  table tbody tr {
    display: table-cell;
  }
  table tbody tr:nth-child(odd) {
    background: none;
  }
  table tr:nth-child(even) {
    background: transparent;
  }
  table tr td:nth-child(odd) {
    background: #f8f8f8;
    border-right: 1px solid #e6e4e4;
  }
  table tr td:nth-child(even) {
    border-right: 1px solid #e6e4e4;
  }
  table tbody td {
    display: block;
    text-align: center;
  }
}
</style>
