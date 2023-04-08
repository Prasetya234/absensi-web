<template>
  <div class="flex justify-center items-center py-16">
    <ilustration-loading-spinner v-if="isLoading" />
    <div class="bg-white rounded-md w-11/12 mt-14 p-8 md:w-4/5">
      <div class="flex justify-between items-start mb-6">
        <div class="flex items-center gap-4">
          <span @click="changeCalender('prev')">
            <icons-arrowcevron class="cursor-pointer fill-[#828282] pt-[9.5px] pl-[8px]" direction="left" :size="38" />
          </span>
          <span @click="changeCalender('next')">
            <icons-arrowcevron class="cursor-pointer fill-[#828282] pt-[9.5px] pl-[8px]" :size="38" />
          </span>
          <p
            class="text-[#CC6633] text-[30px] leading-[41px] font-extrabold uppercase nunito ml-4"
          >
            {{ moment(date).format('MMMM YYYY') }}
          </p>
        </div>
        <div class="w-64">
          <p class="text-sm">Looking month</p>
          <input
            type="month"
            class="block border-2 rounded-sm mt-2 p-1 w-56"
            :value="`${date.getFullYear()}-${(
              '0' +
              (date.getMonth() + 1)
            ).slice(-2)}`"
            @change="selectCalender"
          />
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
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, idx) in days" :key="idx">
            <td
              v-for="(data2, idx2) in data"
              :key="idx2"
              :style="`${data2.isDay ? 'background-color: #D3D3D3' : ''}`"
              :class="`${
                idx2 === 0 &&
                data2.date._d.getDate() !== 'last month' &&
                data2.date._d.getDate() !== 'next month'
                  ? 'text-red-500'
                  : data2.date._d.getDate() === 'last month' ||
                    data2.date._d.getDate() === 'next month'
                  ? 'text-gray-400'
                  : ''
              }`"
            >
              <span>{{ data2.date._d.getDate() }}</span>
              <span
                class="block p-2 bg-[#CC6633] text-white rounded-lg mt-2 cursor-pointer truncate w-32"
                style="max-width: max-content"
                v-if="data2.noteplus"
                >{{ data2.noteplus.name }}</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { createConfig } from '~/service/api-manager';

export default {
  name: 'CalenderPage',
  data: () => ({
    days: [],
    offset: 0,
    isLoading: false,
    date: new Date()
  }),
  methods: {
    getDataCalender() {
      this.days = [];
      const date = this.date;
      date.setFullYear(
        date.getFullYear(),
        this.offset < 0
          ? date.getMonth() - (this.offset *= -1)
          : date.getMonth() + this.offset
      );
      this.fetchDataCalender(date);
      let dayData = [];
      const monthDate = moment(date).startOf('month');
      dayData = [...Array(monthDate.daysInMonth())].map((_, i) => ({
        date: monthDate.clone().add(i, 'day'),
        noteplus: null,
        isDay: false,
      }));
      const startSpace = dayData[0].date._d.getDay();
      const dataspace = [];
      const dateNow = new Date()
      for (let i = 0; i < startSpace; i++) {
        dataspace.push({
          date: {
            _d: {
              getDate: () => 'last month'
            }
          },
          noteplus: null,
          isDay: false,
        });
      }
      dayData = [...dataspace, ...dayData];
      for (let i = 0; i < dayData.length; i++) {
        if (i % 7 === 0) {
          this.days.push(dayData.slice(i, i + 7));
        }
      }
      const lastSpace = this.days[this.days.length - 1].length;
      if (lastSpace >= 7) return;
      for (let i = lastSpace; i < 7; i++) {
        this.days[this.days.length - 1].push({
          date: {
            _d: {
              getDate: () => 'next month'
            }
          },
          noteplus: null,
          isDay: false,
        });
      }
      if (date.getMonth()  === dateNow.getMonth() && date.getFullYear() === dateNow.getFullYear()) {
       this.days.forEach(day => {
          day.forEach(data => {
            if (data.date._d.getDate() === dateNow.getDate()) {
              data.isDay = true
            }
          })
        })
      }
    },
    selectCalender(e) {
      this.offset = 0;
      this.date = new Date(e.target.value);
      this.getDataCalender();
    },
    changeCalender(type) {
      if (type === 'prev') this.offset = -1;
      else this.offset = +1;
      this.getDataCalender();
    },
    moment(date) {
      return moment(date);
    },
    async fetchDataCalender(date = new Date()) {
      this.isLoading = true;
      try {
        const { data: resp } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'calender',
            params: {
              month: date.getMonth() + 1,
              year: date.getFullYear()
            }
          })
        );
        this.days.forEach((item) => {
          item.forEach((items) => {
            resp.data.forEach((e) => {
              if (
                new Date(e.date).getDate() === items.date._d.getDate() &&
                new Date(e.date).getMonth() === items.date._d.getMonth() &&
                new Date(e.date).getFullYear() === items.date._d.getFullYear()
              ) {
                items.noteplus = e;
              }
            });
          });
        });
      } catch {
      } finally {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }
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
