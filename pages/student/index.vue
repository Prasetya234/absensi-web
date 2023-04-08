<template>
  <div class="relative bg-[#F7931E] h-96 pt-20 rounded-b-[100%] nunito">
    <modal v-if="modalActive" :onclose="onToggle">
      <h3 class="mb-4 text-2xl font-bold">Alert</h3>
      <p>Sorry, this feature is not available yet</p>
    </modal>
    <!-- content section start -->
    <div class="absolute top-24 w-full h-full my-10">
      <div class="relative bg-white shadow-md rounded-lg p-5 mx-7">
        <div class="flex flex-row">
          <div class="p-3 space-y-2 w-[90%]">
            <h5 class="text-xl">Username:</h5>
            <h2 class="text-3xl font-semibold">{{ getUsername }}</h2>
          </div>
        </div>
        <hr class="my-3" />
        <div class="flex flex-wrap w-full justify-between p-3">
          <div
            class="overflow-hidden relative rounded-md shadow-md duration-300 hover:shadow-[#F7931E] hover:duration-300 w-72"
          >
            <div
              class="absolute -left-7 -top-1 w-24 h-24 flex justify-center items-center pr-2 pl-4 bg-[#F7931E] rounded-full shadow-lg"
            >
              <icons-in :size="30" />
            </div>
            <div class="flex flex-col py-5 pl-24">
              <span class="text-slate-900 font-semibold">Present</span>
              <span class="text-slate-500">{{ totalPresent }} Day</span>
            </div>
          </div>
          <div
            class="overflow-hidden relative rounded-md shadow-md duration-300 hover:shadow-[#F7931E] hover:duration-300 w-72"
          >
            <div
              class="absolute -left-7 -top-1 w-24 h-24 flex justify-center items-center pr-2 pl-6 bg-[#F7931E] rounded-full shadow-lg"
            >
              <icons-envelop />
            </div>
            <div class="flex flex-col py-5 pl-24">
              <span class="text-slate-900 font-semibold">Permission</span>
              <span class="text-slate-500">{{ totalPermit }} Day</span>
            </div>
          </div>
          <div
            class="overflow-hidden relative rounded-md shadow-md duration-300 hover:shadow-[#F7931E] hover:duration-300 w-72"
          >
            <div
              class="absolute -left-7 -top-1 w-24 h-24 flex justify-center items-center pr-2 pl-6 bg-[#F7931E] rounded-full shadow-lg"
            >
              <icons-sad />
            </div>
            <div class="flex flex-col py-5 pl-24">
              <span class="text-slate-900 font-semibold">Skipping class</span>
              <span class="text-slate-500">0 Day</span>
            </div>
          </div>
          <div
            class="overflow-hidden relative rounded-md shadow-md duration-300 hover:shadow-[#F7931E] hover:duration-300 w-72"
          >
            <div
              class="absolute -left-7 -top-1 w-24 h-24 flex justify-center items-center pr-2 pl-6 bg-[#F7931E] rounded-full shadow-lg"
            >
              <icons-stopwatch />
            </div>
            <div class="flex flex-col py-5 pl-24">
              <span class="text-slate-900 font-semibold">Late</span>
              <span class="text-slate-500">{{ totalPresentLate }}x</span>
            </div>
          </div>
        </div>
        <div class="absolute top-2.5 right-0">
          <div class="relative">
              <button
                :class="`absolute top-1 right-0 cursor-pointer bg-[#F7931E] text-white inline-flex truncate px-3 p-2.5 rounded-l-full duration-300 ${
                  lastAbsent === 'Not'
                    ? 'w-36 gap-3'
                    : 'w-11 gap-5 hover:duration-300 hover:w-36 hover:gap-3'
                }`"
                @click="$router.push('/student/absen')"
              >
                <span class="flex justify-center items-center mt-0.5"
                  ><icons-in
                /></span>
                <span>Absen Now</span>
              </button>
            <button
              @click="togglePermitModal"
              class="absolute top-14 right-0 cursor-pointer bg-[#F7931E] text-white w-11 inline-flex gap-5 truncate px-3.5 p-2.5 rounded-l-full duration-300 hover:duration-300 hover:w-36 hover:gap-3"
            >
              <span class="flex justify-center items-center mt-0.5">
                <icons-envelop :size="22" />
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
            <h3 class="text-2xl font-semibold uppercase">
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
      <div class="h-fit w-full bg-gray-100 flex justify-center py-7">
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
    <!-- bubble history section start -->
    <div
      class="bg-[#F7931E] bubble-history rounded-t-[50%] fixed z-10 -bottom-40 -right-20 -rotate-[25deg] mx-7 p-7 h-80 w-80 flex justify-center"
    >
      <div class="rotate-[25deg] text-white space-y-5 my-4 mr-5">
        <h3 class="text-lg text-center font-semibold">Today's Absent:</h3>
        <p class="h-full text-xl font-semibold text-center px-3">
          {{ lastAbsent }}
        </p>
      </div>
    </div>
    <!-- bubble history section end -->
    <!-- modal permission start -->
    <modal v-if="modalPermit" :onclose="togglePermitModal">
      <h3 class="text-xl font-semibold">Permission Letter</h3>
      <form class="mt-5 flex flex-col gap-7">
        <div class="flex flex-col gap-1">
          <label for="reason" class="text-lg font-medium">Reason :</label>
          <input
            type="text"
            id="reason"
            class="border-2 border-gray-500 bg-white w-full rounded-md py-1.5 px-2 focus:border-[#F7931E] focus:shadow outline-none ring-0"
            v-model="formPermit.reason"
          />
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
import bgHome from '~/assets/img/bg-home.jpg';
import Modal from '~/components/Modal.vue';
import { createConfig, responseManager } from '~/service/api-manager';
export default {
  components: { Modal },
  name: 'StudentPage',
  data() {
    return {
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
      lastAbsent: ''
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
    this.$emit('no-footer');
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    onToggle() {
      this.modalActive = !this.modalActive;
    },
    togglePermitModal() {
      if (this.lastAbsent === 'Not') {
        this.modalPermit = !this.modalPermit;
      } else {
        this.modalPermit = false;
        this.errorMessage("You've been absent");
      }
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
