<template>
    <div
      class="all-presence pt-[90px] pb-[10px] px-80 md:px-0 flex justify-center items-center min-h-screen"
    >
      <div class="bg-white rounded-md p-5">
        <div>
          <p
            class="text-[#CC6633] text-[30px] leading-[41px] font-extrabold uppercase nunito"
          >
            PRESENCE
          </p>
          <div class="flex items-center mt-8 px-5 gap-3">
            <div class="flex items-center gap-3" v-if="groupBy === 'year'">
              <div>
                <p class="text-sm ml-2">Start Date</p>
                <input type="date" class="border-2 py-2 px-4 rounded-lg" />
              </div>
              <div>
                <p class="text-sm ml-2">End Date</p>
                <input type="date" class="border-2 py-2 px-4 rounded-lg" />
              </div>
            </div>
            <div class="flex items-center gap-3" v-if="groupBy === 'month'">
              <div>
                <p class="text-sm ml-2">Month</p>
                <input type="month" class="border-2 py-2 px-4 rounded-lg" />
              </div>
            </div>
            <div>
              <p class="text-sm ml-2">Group By</p>
              <select
                id="groupBy"
                name="groupBy"
                v-model="groupBy"
                class="shadow border w-36 rounded-lg px-2 w-full py-2 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="year">Year</option>
                <option value="month">Month</option>
              </select>
            </div>
          </div>
          <client-only>
            <apexchart
              v-if="groupBy === 'year'"
              class="max-w-screen w-[32rem] lg:w-[60rem]"
              type="bar"
              :options="optionsyear"
              :series="seriesyear"
            >
            </apexchart>
            <apexchart
              v-if="groupBy === 'month'"
              class="w-[60rem]"
              type="bar"
              :options="optionsmonth"
              :series="seriesmonth"
            >
            </apexchart>
          </client-only>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'PageDashboardAdmin',
    components: {
      [process.browser && 'apexchart']: () => import('vue-apexcharts')
    },
    data() {
      return {
        groupBy: 'year',
        //   APEXCHARTS YEAR
        optionsyear: {
          plotOptions: {
            bar: {
              borderRadius: 3
            }
          },
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
            ]
          }
        },
        seriesyear: [
          {
            name: 'Total Hadir',
            data: [55, 67, 85, 12, 56, 32, 54, 54, 23, 75, 23, 23]
          },
          {
            name: 'Total Izin',
            data: [12, 62, 57, 23, 89, 21, 65, 23, 34, 86, 43, 54]
          },
          {
            name: 'Total Tidak Hadir',
            data: [23, 35, 89, 34, 98, 43, 45, 51, 65, 12, 45, 12]
          }
        ],
        //   APEXCHARTS YEAR

        //   APEXCHARTS MONTH
        optionsmonth: {
          plotOptions: {
            bar: {
              borderRadius: 3
            }
          },
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Minggu 1', 'MInggu 2', 'Minggu 3', 'Minggu 4']
          }
        },
        seriesmonth: [
          {
            name: 'Total Hadir',
            data: [55, 67, 85, 12]
          },
          {
            name: 'Total Izin',
            data: [12, 62, 57, 23]
          },
          {
            name: 'Total Tidak Hadir',
            data: [23, 35, 89, 34]
          }
        ]
        //   APEXCHARTS MONTH
      };
    }
  };
  </script>
