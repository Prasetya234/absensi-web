<template>
  <div
    class="relative md:bg-[#F7931E] md:h-96 md:pt-20 md:rounded-b-[100%] nunito"
  >
    <modal v-if="modalActive" :onclose="onToggle">
      <h3 class="mb-4 text-2xl font-bold">Alert</h3>
      <p>Sorry, this feature is not available yet</p>
    </modal>
    <!-- content section start -->
    <div class="absolute top-2 md:top-24 w-full h-full md:my-10">
      <div
        class="relative bg-white shadow-md rounded-lg p-3 md:p-5 mx-3 md:mx-7"
      >
        <div class="flex flex-row">
          <div class="p-1 md:p-3 space-y-0 md:space-y-2 w-[90%]">
            <h5 class="text-base md:text-xl">Username:</h5>
            <h2 class="text-xl md:text-3xl font-semibold">{{ getUsername }}</h2>
          </div>
        </div>
        <hr class="my-1 md:my-3" />
        <div>
          <div
            class="grid grid-cols-1 md:grid-cols-4 w-full justify-between gap-2 p-1 md:p-3 md:gap-0"
          >
            <div
              class="bg-white overflow-hidden relative rounded-md shadow-md py-2.5 w-full h-fit duration-300 hover:shadow-[#F7931E] hover:duration-300 md:w-60 md:py-0"
            >
              <div
                class="absolute -left-5 -top-0.5 md:-left-7 md:-top-1 w-14 h-14 md:w-24 md:h-24 flex justify-center items-center pr-2 pl-4 bg-[#F7931E] rounded-full shadow-lg"
              >
                <icons-in />
              </div>
              <div class="flex flex-col py-0 pl-10 md:py-5 md:pl-24">
                <span class="text-xs md:text-base text-slate-900 font-semibold"
                  >Present</span
                >
                <span class="text-xs md:text-base text-slate-500"
                  >{{ totalPresent }} Day</span
                >
              </div>
            </div>
            <div
              class="bg-white overflow-hidden relative rounded-md shadow-md py-2.5 w-full h-fit duration-300 hover:shadow-[#F7931E] hover:duration-300 md:w-60 md:py-0"
            >
              <div
                class="absolute -left-5 -top-0.5 md:-left-7 md:-top-1 w-14 h-14 md:w-24 md:h-24 flex justify-center items-center pr-2 pl-6 bg-[#F7931E] rounded-full shadow-lg"
              >
                <icons-envelop />
              </div>
              <div class="flex flex-col py-0 pl-10 md:py-5 md:pl-24">
                <span class="text-xs md:text-base text-slate-900 font-semibold"
                  >Permission</span
                >
                <span class="text-xs md:text-base text-slate-500"
                  >{{ totalPermit }} Day</span
                >
              </div>
            </div>
            <div
              class="bg-white overflow-hidden relative rounded-md shadow-md py-2.5 w-full h-fit duration-300 hover:shadow-[#F7931E] hover:duration-300 md:w-60 md:py-0"
            >
              <div
                class="absolute -left-5 -top-0.5 md:-left-7 md:-top-1 w-14 h-14 md:w-24 md:h-24 flex justify-center items-center pr-2 pl-6 bg-[#F7931E] rounded-full shadow-lg"
              >
                <icons-warning />
              </div>
              <div class="flex flex-col py-0 pl-10 md:py-5 md:pl-24">
                <span class="text-xs md:text-base text-slate-900 font-semibold"
                  >Skip Class</span
                >
                <span class="text-xs md:text-base text-slate-500">0 Day</span>
              </div>
            </div>
            <div
              class="bg-white overflow-hidden relative rounded-md shadow-md py-2.5 w-full h-fit duration-300 hover:shadow-[#F7931E] hover:duration-300 md:w-60 md:py-0"
            >
              <div
                class="absolute -left-5 -top-0.5 md:-left-7 md:-top-1 w-14 h-14 md:w-24 md:h-24 flex justify-center items-center pr-2 pl-6 bg-[#F7931E] rounded-full shadow-lg"
              >
                <icons-stopwatch />
              </div>
              <div class="flex flex-col py-0 pl-10 md:py-5 md:pl-24">
                <span class="text-xs md:text-base text-slate-900 font-semibold"
                  >Late</span
                >
                <span class="text-xs md:text-base text-slate-500"
                  >{{ totalPresentLate }}x</span
                >
              </div>
            </div>
          </div>
          <!-- absen & permit button in Mobile view -->
          <div class="flex flex-row justify-center gap-10 md:hidden my-3">
            <button
              @click="togglePermitModal"
              class="cursor-pointer bg-[#F7931E] text-white text-center text-sm inline-flex truncate w-fit px-3.5 py-1.5 rounded-full -ml-4"
            >
              <span>Permit</span>
            </button>
            <div class="relative right-1 w-20 h-6">
              <span
                :class="`${
                  lastAbsent === 'Not' ? 'animate-ping' : ''
                } absolute top-1 left-3 inline-flex h-full w-full rounded-full bg-[#CC6633] opacity-75`"
              ></span>
              <button
                class="relative inline-flex cursor-pointer bg-[#F7931E] text-white text-center text-sm truncate w-fit px-3.5 py-1.5 rounded-full"
                @click="$router.push('/student/absen')"
              >
                <span>Absen Now</span>
              </button>
            </div>
          </div>
        </div>
        <!-- absen & permit button in PC view -->
        <div class="hidden md:block absolute top-40 md:top-2.5 right-0">
          <div class="relative">
            <button
              :class="`absolute top-1 right-0 cursor-pointer bg-[#F7931E] text-white inline-flex truncate px-3 p-2.5 rounded-md md:rounded-l-full duration-300 ${
                lastAbsent === 'Not' &&
                now < formatMoment(operationalClass.entryTime) &&
                isSchoolDay
                  ? 'w-36 gap-3'
                  : 'w-11 gap-5 hover:duration-300 hover:w-36 hover:gap-3'
              }`"
              @click="absenNow"
            >
              <!-- @click="$router.push('/student/absen')" -->
              <span class="flex justify-center items-center mt-0.5"
                ><icons-in
              /></span>
              <span>Absen Now</span>
            </button>
            <button
              @click="togglePermitModal"
              class="absolute top-14 right-0 cursor-pointer bg-[#F7931E] text-white w-11 inline-flex gap-5 truncate px-3.5 p-2.5 rounded-md md:rounded-l-full duration-300 hover:duration-300 hover:w-36 hover:gap-3"
            >
              <span class="flex justify-center items-center mt-0.5">
                <icons-envelop />
              </span>
              <span>Permit</span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="h-full w-full flex justify-center bg-no-repeat bg-contain bg-center mt-10 footer"
        :style="{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: '100% 100%'
        }"
      >
        <div class="text-center space-y-7 w-5/12 py-5">
          <div class="space-y-2">
            <h3
              class="text-xs md:text-2xl break-normal md:break-all font-semibold uppercase"
            >
              <span class="text-[#F7931E]">Absensi</span> Worldwide
            </h3>
            <span class="flex justify-center">
              <icons-bordercustom />
            </span>
          </div>
          <p class="">How many users we have</p>
          <div class="flex flex-row justify-between gap-6 mt-7">
            <div class="text-center flex flex-col justify-center gap-y-5 w-1/4">
              <div class="flex justify-center">
                <span class="rounded-full bg-[#F7931E] p-4">
                  <icons-users />
                </span>
              </div>
              <p class="flex flex-col">
                <span class="text-2xl font-semibold">56</span>
                <span class="">Users</span>
              </p>
            </div>
            <div class="text-center flex flex-col justify-center gap-y-5 w-1/4">
              <div class="flex justify-center">
                <span class="rounded-full bg-[#F7931E] p-4">
                  <icons-togahat />
                </span>
              </div>
              <p class="flex flex-col">
                <span class="text-2xl font-semibold">2</span>
                <span class="">Schools</span>
              </p>
            </div>
            <div class="text-center flex flex-col justify-center gap-y-5 w-1/4">
              <div class="flex justify-center">
                <span class="rounded-full bg-[#F7931E] p-4">
                  <icons-users />
                </span>
              </div>
              <p class="flex flex-col">
                <span class="text-2xl font-semibold">4</span>
                <span class="">Instructor</span>
              </p>
            </div>
            <div class="text-center flex flex-col justify-center gap-y-5 w-1/4">
              <div class="flex justify-center">
                <span class="rounded-full bg-[#F7931E] p-4"
                  ><icons-global
                /></span>
              </div>
              <p class="flex flex-col">
                <span class="text-2xl font-semibold">1</span>
                <span class="">Country</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-fit w-full bg-gray-100 flex justify-center py-7 mt-80 md:mt-0"
      >
        <div class="text-center space-y-7 w-8/12">
          <div class="space-y-2">
            <h3 class="text-2xl font-semibold uppercase">Our Stories</h3>
            <span class="flex justify-center"><icons-bordercustom /> </span>
          </div>
          <div class="flex justify-center gap-7 overflow-x-auto">
            <div
              class="text-center flex flex-col justify-center gap-y-5 w-80 border bg-white rounded-lg space-y-3 p-5"
              v-for="(data, idx) in stories"
              :key="idx"
            >
              <div class="flex justify-center">
                <span class="border rounded-full bg-[#F7931E] p-4">
                  <icons-quotesquare class="fill-[#FFFFFF]" />
                </span>
              </div>
              <p class="text-justify flex flex-col">
                <span>
                  <icons-quote class="float-left -ml-2 mr-1 fill-[#F7931E]" />
                  {{ data.description }}</span
                >
                <span class="text-center mt-4"
                  >- <strong> {{ data.name }} </strong> -</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-full p-3 footer">
        <p class="text-center">
          Copyright &copy; {{ new Date().getFullYear() }},
          <span class="text-[#F7931E] font-extrabold uppercase">Absensi</span>.
          All Right Reserved.
        </p>
      </div>
    </div>
    <!-- content section end -->
    <!-- bubble history Mobile view start -->
    <!-- <div
      :class="`flex flex-row md:hidden bg-[#F7931E] bubble-history rounded-r-[100%] fixed bottom-2 z-10 py-1 duration-300 ${
        isShow ? 'left-0 duration-300' : '-left-[7.5rem] duration-300'
      }`"
    >
      <div class="space-y-2 my-4 ml-3 mr-5">
        <h3 class="text-white text-xs text-center font-semibold">
          Today's Absent:
        </h3>
        <p class="text-white text-sm font-semibold text-center px-3">
          {{ lastAbsent }}
        </p>
      </div>
      <button class="fill-[#FFFFFF] mr-3" @click="toggleShow">
        <span v-if="isShow">
          <icons-arrowcevron direction="left" class="mt-2" />
        </span>
        <span v-else><icons-arrowcevron class="mb-2" /></span>
      </button>
    </div> -->
    <!-- bubble history Mobile view end -->
    <!-- bubble history section in PC view start -->
    <div
      class="bg-[#F7931E] bubble-history rounded-t-[50%] fixed z-10 -bottom-40 -right-20 -rotate-[25deg] mx-7 p-7 h-80 w-80 flex justify-center"
    >
      <div class="rotate-[25deg] text-white space-y-5 my-4 mr-5">
        <h3 class="text-lg text-center font-semibold">Today's Absent:</h3>
        <p
          class="h-full text-xl font-semibold text-center px-3"
          v-if="isSchoolDay"
        >
          {{ lastAbsent }}
        </p>
        <p class="h-full text-xl font-semibold text-center px-3" v-else>
          Holiday
        </p>
      </div>
    </div>
    <!-- bubble history section in PC view end -->
    <!-- modal permission start -->
    <modal v-if="modalPermit" :onclose="togglePermitModal">
      <h3 class="text-xl font-semibold">Permission Letter</h3>
      <form class="mt-5 flex flex-col gap-7">
        <div class="flex flex-col gap-1">
          <label for="reason" class="text-lg font-medium">Reason :</label>
          <input
            type="text"
            id="reason"
            list="reason-choice"
            class="border-2 border-gray-500 bg-white w-full rounded-md py-1.5 px-2 focus:border-[#F7931E] focus:shadow outline-none ring-0"
            v-model="formPermit.reason"
          />
          <datalist id="reason-choice">
            <option
              v-for="(data, index) in reason"
              :key="index"
              :value="data.name"
            >
              {{ data.name }}
            </option>
          </datalist>
        </div>
        <div class="flex flex-col gap-1">
          <label for="note" class="text-lg font-medium">Note :</label>
          <textarea
            name="note"
            id="note"
            rows="5"
            class="border-2 border-gray-500 bg-white w-full rounded-md py-1.5 px-2 focus:border-[#F7931E] focus:shadow outline-none ring-0"
            v-model="formPermit.note"
          ></textarea>
        </div>
        <button
          @click="sendPermissionLetter"
          type="submit"
          class="border border-transparent bg-[#F7931E] rounded-md text-white text-base font-medium py-2 uppercase"
        >
          Send
        </button>
      </form>
    </modal>
    <!-- modal permission end -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';
import bgHome from '~/assets/img/bg-home.jpg';
import Modal from '~/components/Modal.vue';
import { createConfig, responseManager } from '~/service/api-manager';
export default {
  components: { Modal },
  name: 'StudentPage',
  data() {
    return {
      isShow: false,
      isSchoolDay: false,
      weekDays: [],
      today: '',
      operationalClass: {
        entryTime: '',
        admissionDay: 0
      },
      now: '',
      stories: [
        {
          description:
            'We created this website to simplify the process of recording student attendance in schools and non-formal institutions by leaving manual methods that are more time-consuming and labor-intensive. We hope that this website will make the attendance process easier, more automatic, and more efficient.',
          name: 'Prasetya'
        }
      ],
      totalPresentLate: 0,
      totalPresent: 0,
      totalPermit: 0,
      modalActive: false,
      modalPermit: false,
      formPermit: {
        reason: '',
        note: ''
      },
      bgImg: bgHome,
      lastAbsent: '',
      reason: [],
      absenModel: {
        isLate: false
      }
    };
  },
  computed: {
    ...mapGetters('auth', ['getUsername'])
  },
  mounted() {
    this.fetchAbsent();
    this.fetchTotalPresent();
    this.fetchTotalPresentLate();
    this.fetchTotalPermit();
    this.fetchReason();
    this.fetchOperationalClass();
    this.fetchTimeNow();
    this.$emit('no-footer');
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    isLate() {
      if (new Date().getHours() > Number(this.operationalClass.entryTime)) {
        return true;
      }
      return false;
    },
    formatMoment(time) {
      return moment(time, 'HH').add(30, 'minutes').format('HH:mm');
    },
    fetchTimeNow() {
      const time = moment(new Date().getTime()).format('HH:mm');
      this.now = time;
    },
    onToggle() {
      this.modalActive = !this.modalActive;
    },
    togglePermitModal() {
      if (!this.isSchoolDay) {
        this.modalPermit = false;
        this.errorMessage("It's Holiday");
      } else if (
        this.lastAbsent === 'Not' &&
        this.now < this.formatMoment(this.operationalClass.entryTime) &&
        this.isSchoolDay
      ) {
        this.modalPermit = !this.modalPermit;
      } else if (
        this.now > this.formatMoment(this.operationalClass.entryTime)
      ) {
        this.modalPermit = false;
        this.errorMessage('Access Closed');
      } else if (this.lastAbsent === 'Already done') {
        this.modalPermit = false;
        this.errorMessage("You've been absent");
      }
    },
    toggleShow() {
      this.isShow = !this.isShow;
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
    async fetchAbsent() {
      try {
        const { data: resData } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'presensi/check'
          })
        );
        if (!resData.data.absen) {
          this.lastAbsent = 'Not';
        } else {
          this.lastAbsent = 'Already done';
        }
      } catch (error) {
        console.log(error);
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
    async fetchTotalPresent() {
      try {
        const { data: resData } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'presensi/total-present'
          })
        );
        this.totalPresent = resData.data.content.length;
      } catch {}
    },
    async fetchTotalPresentLate() {
      try {
        const { data: resData } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'presensi/total-late'
          })
        );
        this.totalPresentLate = resData.data;
      } catch {}
    },
    async fetchTotalPermit() {
      try {
        const { data: resData } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'presensi/total-permission'
          })
        );
        this.totalPermit = resData.data.content.length;
      } catch {}
    },
    async fetchReason() {
      try {
        const { data: resData } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'reason'
          })
        );
        this.reason = resData.data;
      } catch {}
    },
    async sendPermissionLetter(e) {
      e.preventDefault();
      this.showLoading();
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().postData({
            url: 'presensi/permit',
            data: {
              reason: this.formPermit.reason,
              note: this.formPermit.note
            }
          })
        );
        this.formPermit = res.data;
        this.modalPermit = false;
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
      } finally {
        this.hideLoading();
      }
    },
    async fetchOperationalClass() {
      try {
        const { data: resData } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'operational-class'
          })
        );
        this.operationalClass = resData.data;
        const days = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ];
        const day = days[new Date().getDay()];
        this.today = day;
        const baseDate = new Date(Date.UTC(1, 0, 0));
        for (let i = 0; i < this.operationalClass.admissionDay; i++) {
          this.weekDays.push(
            baseDate.toLocaleDateString('en-us', { weekday: 'long' })
          );
          baseDate.setDate(baseDate.getDate() + 1);
        }

        if (this.weekDays.includes(this.today)) {
          this.isSchoolDay = true;
        } else {
          this.isSchoolDay = false;
        }
        return this.weekDays;
      } catch {}
    },
    async absenNow(e) {
      e.preventDefault();
      this.absenModel.dateSubmit = new Date().toISOString().split('T')[0];
      this.absenModel.isLate = this.isLate();
      this.showLoading();
      if (
        this.isSchoolDay &&
        this.now < this.formatMoment(this.operationalClass.entryTime)
      ) {
        try {
          const { data: res } = await this.$axios(
            // eslint-disable-next-line new-cap
            new createConfig().postData({
              url: 'presensi/absen',
              data: this.absenModel
            })
          );
          this.absenModel = res.data;
          this.$toast.show(`Absence Success`, {
            position: 'top-center',
            type: 'success',
            duration: 5000,
            theme: 'bubble',
            singleton: true
          });
          this.fetchAbsent();
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
        } finally {
          this.hideLoading();
        }
      } else if (this.lastAbsent === 'Already done') {
        this.errorMessage("You've been Absent");
      } else if (
        this.isSchoolDay &&
        this.now > this.formatMoment(this.operationalClass.entryTime)
      ) {
        this.errorMessage('Access Closed');
      } else if (!this.isSchoolDay) {
        this.errorMessage("It's Holiday");
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
.nunito {
  font-family: 'Nunito', sans-serif;
}
.bubble-history {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  /* box-shadow: 0 2px 12px rgb(0, 0, 0 / 0.1); */
}
.footer {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  /* box-shadow: 0 2px 12px rgb(0, 0, 0 / 0.1); */
}
</style>
