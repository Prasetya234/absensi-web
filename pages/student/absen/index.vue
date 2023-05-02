<template>
  <div
    class="pt-20 flex justify-center relative bg-gray-200 relative"
    style="min-height: 100vh"
  >
    <modal v-if="modalActive" :onclose="closeModalAlert">
      <h3 class="mb-4 text-2xl font-bold">Alert</h3>
      <p class="text-lg">
        Sistem gagal mendeteksi wajah anda saat absen. Laporan ini akan di
        kirmkan ke intruktur kamu dan akan di tindak lanjuti.
      </p>
      <p>Have a great day!</p>
    </modal>
    <div
      class="absolute top-5 left-5 flex gap-3 items-center cursor-pointer"
      @click="$router.go(-1)"
    >
      <icons-arrow
        size="28"
        class="rounded-full p-1.5 transition duration-300 hover:bg-gray-300 hover:transition hover:duration-300"
      />
      <span class="font-bold text-2xl text-center nunito">Daily Absen</span>
    </div>
    <!-- <span class="absolute right-5 top-5 p-3 rounded-xl bg-[#CC6633] text-white font-md" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">00 : 00 : 10</span> -->
    <div
      class="bg-white rounded-md"
      style="max-width: 800px; width: 100%; max-height: 550px"
    >
      <div
        class="p-3 rounded-md border-[6px] border-dashed border-gray-200 w-full h-full"
      >
        <div class="flex justify-center flex-wrap w-full h-[90%]">
          <div class="w-full text-center p-4 text-base text-gray-400 nunito">
            I declare that I am an absent and ready to take responsibility for
            what I do
          </div>
          <div class="relative w-100" v-if="readyAbasen">
            <span
              v-if="isNotNotDetected"
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-400 text-xl font-bold z-20"
              >Face not detected!</span
            >
            <canvas class="absolute z-10" ref="canvasref"></canvas>
            <video
              :class="isNotNotDetected ? 'opacity-50' : ''"
              ref="videoref"
              autoplay
              muted
              :height="custom.videoHeight"
              :width="custom.videoWidth"
              @play="handleVideoOnPlay"
            ></video>
          </div>
          <div class="w-100" v-else>
            <button
              type="button"
              class="bubbly-button nunito"
              @click="onReadyAbsen"
            >
              Click for start scan
            </button>
          </div>
          <div
            class="w-full text-center p-4 text-md font-bold"
            v-if="readyAbasen"
          >
            <span class="text-red-400" v-if="isProcess">Processing...</span>
            <span class="text-green-400" v-if="!isNotNotDetected && !isProcess"
              >In process of scanning. <b>Please wait</b></span
            >
            <span
              class="block text-center text-sm text-gray-500"
              v-if="isNotNotDetected"
              >Position your face to the camera</span
            >
          </div>
        </div>
        <div class="w-2/4 absolute bottom-5 text-xl">
          <div class="nunito font-[500] flex justify-between">
            <p class="text-green-400 font-bold">
              Class Start Time :
              <span class="text-left">
                {{ momentFormat(operationalClass.entryTime) }}</span
              >
            </p>
            <p class="text-red-400 font-bold">
              Class End Time :
              <span>{{ momentFormat(operationalClass.dismissalTime) }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as faceapi from 'face-api.js';
import moment from 'moment';
import { createConfig, responseManager } from '~/service/api-manager';

export default {
  name: 'Absen',
  data: () => ({
    modalActive: false,
    isNotNotDetected: false,
    readyAbasen: false,
    isProcess: true,
    isSchoolDay: false,
    weekDays: [],
    today: '',
    detectorScores: [],
    absenceModel: {
      dateSubmit: '',
      faceNumber: '',
      isLate: false,
      latitude: '',
      longitude: ''
    },
    operationalClass: {
      entryTime: '',
      durationLearn: 0,
      dismissalTime: ''
    },
    custom: {
      videoHeight: 400,
      videoWidth: 550
    },
    absenLimit: '',
    timeNow: ''
  }),
  computed: {
    ...mapGetters('auth', ['getUsername', 'getUserId'])
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    loadModuls() {
      const MODULS_URL = window.location.origin + '/models';
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODULS_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODULS_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODULS_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODULS_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODULS_URL)
      ]).then(this.startVideo());
      setTimeout(() => {
        this.checkingCameraAccess();
      }, 500);
    },
    closeModalAlert() {
      this.modalActive = false;
      this.$router.push('/');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    },
    startVideo() {
      navigator.getUserMedia(
        { video: {} },
        (stream) => (this.$refs.videoref.srcObject = stream),
        (err) => err
      );
    },
    getToastError() {
      this.errorMessage('Please allow camera access');
    },
    async checkingCameraAccess() {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
      } catch {
        this.getToastError();
        this.$router.push('/');
      }
    },
    handleVideoOnPlay() {
      let qty = 0;
      const display = {
        width: this.custom.videoWidth,
        height: this.custom.videoHeight
      };
      setInterval(async () => {
        try {
          this.isProcess = false;
          this.$refs.canvasref.innerHTML = faceapi.createCanvasFromMedia(
            this.$refs.videoref
          );
          faceapi.matchDimensions(this.$refs.canvasref, display);
          const detections = await faceapi
            .detectSingleFace(
              this.$refs.videoref,
              new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceLandmarks()
            .withFaceExpressions();
          const resizedDetections = faceapi.resizeResults(detections, display);
          this.$refs.canvasref
            .getContext('2d')
            .clearRect(0, 0, this.custom.videoWidth, this.custom.videoHeight);
          faceapi.draw.drawDetections(this.$refs.canvasref, resizedDetections);
          faceapi.draw.drawFaceLandmarks(
            this.$refs.canvasref,
            resizedDetections
          );
          const box = resizedDetections?.detection.box;
          if (box) {
            const drawBox = new faceapi.draw.DrawBox(box, {
              label: this.onCheckFace(resizedDetections)
            });
            drawBox.draw(this.$refs.canvasref);
          }
          qty++;
          if (qty >= 54) {
            this.modalActive = true;
          }
          this.otherCondition(true);
        } catch {
          this.otherCondition(false);
        }
      }, 1200);
    },
    onCheckFace(el) {
      const valNumb = this.detectorScores.find(
        (e) => e === el.detection._score.toFixed(2)
      );
      if (valNumb) {
        this.fetchAbsenceNow(valNumb);
        return this.getUsername;
      }
      return 'Unknown';
    },
    otherCondition(el) {
      if (!el) {
        this.isNotNotDetected = true;
      } else {
        this.isNotNotDetected = false;
      }
    },
    onReadyAbsen(e) {
      e.target.classList.remove('animate');
      e.target.classList.add('animate');
      setTimeout(() => {
        e.target.classList.remove('animate');
      }, 700);
      this.readyAbasen = true;
      this.loadModuls();
    },
    isLate() {
      if (new Date().getHours() > Number(this.operationalClass.entryTime)) {
        return true;
      }
      return false;
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (e) => {
            this.absenceModel.latitude = e.coords.latitude;
            this.absenceModel.longitude = e.coords.longitude;
          },
          () => {
            this.$router.push('/');
            this.errorMessage('Location Blocked');
          }
        );
      } else {
        this.$router.push('/');
        this.errorMessage('Geolocation is not supported by this browser');
      }
    },
    async fetchOperationalClass() {
      try {
        const { data } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'operational-class'
          })
        );
        this.operationalClass = data.data;
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
    async fetchFace() {
      try {
        const { data } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'face-user/' + this.getUserId
          })
        );
        this.detectorScores = data.data.detectorScores;
      } catch {}
    },
    async fetchAbsenceNow(faceNumb) {
      this.absenceModel.faceNumber = faceNumb.toString();
      this.absenceModel.dateSubmit = new Date().toISOString().split('T')[0];
      this.absenceModel.isLate = this.isLate();
      this.showLoading();
      try {
        await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().postData({
            url: 'presensi/absen-now',
            data: this.absenceModel
          })
        );
        this.$router.push('/');
        this.$toasted.show('Absence Success', {
          position: 'top-center',
          type: 'success',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch {
        // eslint-disable-next-line new-cap
        const error = new responseManager().manageError(this.errorMessage);
        this.errorMessage(error?.error || error.message);
      } finally {
        this.hideLoading();
      }
    },
    async fetchConditionalAbsence() {
      try {
        const { data: resp } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'presensi/check'
          })
        );
        if (resp.data.absen) {
          this.$router.push('/');
          this.errorMessage("You've been absent");
          return;
        }
        if (!resp.data.face) {
          this.$router.push('/');
          this.errorMessage('Advance data not found');
          return;
        }
        this.getLocation();
      } catch {}
    },
    momentFormat(time) {
      return moment(time, 'HH').format('HH:mm');
    },
    fetchLimitAbsen() {
      const entry = moment(this.operationalClass.entryTime, 'HH')
        .add(30, 'minutes')
        .format('HH:mm');
      this.absenLimit = entry;
    },
    fetchTimeNow() {
      const time = moment(new Date().getTime()).format('HH:mm');
      this.timeNow = time;
    },
    checkAccess() {
      if (!this.isSchoolDay) {
        this.$router.push('/');
        this.errorMessage("It's Holiday");
      }
      if (this.timeNow > this.absenLimit) {
        this.$router.push('/');
        this.errorMessage('Access Closed');
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
    }
  },
  async mounted() {
    this.$emit('no-nav');
    this.showLoading();
    await this.fetchConditionalAbsence();
    await this.fetchOperationalClass();
    await this.fetchFace();
    this.hideLoading();
    this.fetchTimeNow();
    this.fetchLimitAbsen();
    this.checkAccess();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.nunito {
  font-family: 'Nunito', sans-serif;
}
.bubbly-button {
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  -webkit-appearance: none;
  appearance: none;
  background-color: #cc6633;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  /* box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5); */
  box-shadow: 0 2px 25px #cc6633;
}
.bubbly-button:focus {
  outline: 0;
}

.bubbly-button:before,
.bubbly-button:after {
  position: absolute;
  content: '';
  display: block;
  width: 140%;
  height: 100%;
  left: -20%;
  z-index: -1000;
  transition: all ease-in-out 0.5s;
  background-repeat: no-repeat;
}

.bubbly-button:before {
  display: none;
  top: -75%;
  background-image: radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #cc6633 20%, transparent 30%),
    radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #cc6633 15%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
}

.bubbly-button:after {
  display: none;
  bottom: -75%;
  background-image: radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #cc6633 15%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%),
    radial-gradient(circle, #cc6633 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}

.bubbly-button:active {
  transform: scale(0.9);
  background-color: darken(#cc6633, 5%);
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
}

.animate:before {
  display: block;
  animation: topBubbles ease-in-out 2s forwards;
}
.animate:after {
  display: block;
  animation: bottomBubbles ease-in-out 2s forwards;
}

@keyframes topBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

@keyframes bottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>
