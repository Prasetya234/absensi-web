<template>
  <div class="flex justify-center items-center py-16">
    <div class="bg-white rounded-md w-11/12 mt-14 p-8 md:w-4/5">
      <div class="flex justify-between items-start mb-6">
        <div class="flex items-center gap-4">
          <span @click="changeCalender('prev')">
            <icons-arrowcevron class="cursor-pointer" direction="left" />
          </span>
          <span @click="changeCalender('next')">
            <icons-arrowcevron class="cursor-pointer" />
          </span>
          <p
            class="text-[#CC6633] text-[30px] leading-[41px] font-extrabold uppercase nunito ml-4"
          >
            {{ moment(date).format('MMMM YYYY')}}
          </p>
        </div>
        <div class="w-64">
            <p class="text-sm">Lompati Bulan</p>
            <input type="month" class="block border-2 rounded-sm mt-2 p-1 w-56" :value="`${date.getFullYear()}-${('0' + (date.getMonth() +1)).slice(-2)}`" @change="selectCalender">
        </div>
      </div>
      <table class="w-full text-left table">
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Firday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, idx) in days" :key="idx">
            <td
              v-for="(data2, idx2) in data"
              :key="idx2"
              :class="`${
                idx2 === 0 && data2.date._d.getDate() !== 'last month'
                  ? 'text-red-500'
                  : data2.date._d.getDate() === 'last month'
                  ? 'text-gray-400'
                  : ''
              }`"
            >
              {{ data2.date._d.getDate() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'CalenderPage',
  data: () => ({
    days: [],
    offset: 0,
    date: new Date()
  }),
  methods: {
    getDataCalender() {
    this.days = []
      const date = this.date;
      date.setFullYear(
        date.getFullYear(),
        this.offset < 0
          ? date.getMonth() - (this.offset *= -1)
          : date.getMonth() + this.offset
      );
      let dayData = [];
      let monthDate = moment(date).startOf('month');
      dayData = [...Array(monthDate.daysInMonth())].map((_, i) => ({
        date: monthDate.clone().add(i, 'day'),
        workhours: 0,
        overtime: 0
      }));
      const startSpace = dayData[0].date._d.getDay();
      const dataspace = [];
      for (let i = 0; i < startSpace; i++) {
        dataspace.push({
          date: {
            _d: {
              getDate: () => 'last month'
            }
          },
          workhours: 0,
          overtime: 0
        });
      }
      dayData = [...dataspace, ...dayData];
      for (let i = 0; i < dayData.length; i++) {
        if (i % 7 === 0) {
          this.days.push(dayData.slice(i, i + 7));
        }
      }
    },
    selectCalender(e) {
      this.date = new Date(e.target.value);
      this.getDataCalender()  
    },
    changeCalender(type) {
        this.offset = 0;
      if (type === 'prev') this.offset--;
      else this.offset++;
        this.getDataCalender();
    },
    moment(date) {
      return moment(date);
    }
  },
  mounted() {
    this.getDataCalender();
  }
};
</script>

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
}
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  width: 14.28%;
  vertical-align: top;
  height: 140px;
}
</style>
