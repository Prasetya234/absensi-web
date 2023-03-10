<template>
  <div>
    <div v-if="!isDetail" class="flex justify-center relative">
      <div
        class="absolute top-1 left-1 flex gap-3 items-center cursor-pointer"
        @click="$router.go(-1)"
      >
        <icons-arrow size="18" />
        <span class="font-bold text-2xl">Add Face Detector</span>
      </div>
      <div class="absolute top-1 right-1">
        <span class="font-bold text-xl">Available {{ faceReady }} / 3</span>
      </div>
      <!-- <span class="absolute right-5 top-5 p-3 rounded-xl bg-[#CC6633] text-white font-md" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">00 : 00 : 10</span> -->
      <div
        class="bg-white rounded-md p-3 flex relative justify-center flex-wrap mt-14"
        style="max-width: 800px; width: 100%; max-height: 550px"
      >
        <div class="w-full text-center p-4 text-sm text-gray-400">
          I guarantee this face entirely from that user
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
          <button type="button" class="bubbly-button" @click="onReadyAbsen">
            Scan Face Now
          </button>
        </div>
        <div
          class="w-full text-center p-4 text-md font-bold"
          v-if="readyAbasen"
        >
          <span class="text-red-400" v-if="isProcess">On Processing...</span>
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
    </div>
    <div v-else>
      <h1>Detail Studeent</h1>
    </div>
  </div>
</template>

<script>
import * as faceapi from 'face-api.js';
import { createConfig, responseManager } from '~/service/api-manager';
import { mapActions } from 'vuex';
import { getUserId } from '~/utils/auth';

var interval;
export default {
  name: 'DetailFace',
  data: () => ({
    isNotNotDetected: false,
    readyAbasen: false,
    isProcess: true,
    faceReady: 0,
    dataFace: [],
    detectorScores: [],
    custom: {
      videoHeight: 400,
      videoWidth: 550
    }
  }),
  computed: {
    isDetail() {
      return this.$route.query.detail === 'true';
    },
    userId() {
      return this.$route.query.userId || null;
    }
  },
  watch: {
    dataFace(val) {
      const equalface = this.findDuplicates(val);
      this.detectorScores = [...equalface];
      this.faceReady = this.detectorScores.length;
      if (this.detectorScores.length >= 3) this.stopedInterval();
    }
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
    startVideo() {
      navigator.getUserMedia(
        { video: {} },
        (stream) => (this.$refs.videoref.srcObject = stream),
        (err) => {}
      );
    },
    async stopedInterval() {
      clearInterval(interval);
      console.log('jalan 1');
      this.onAddface();
    },
    async onAddface() {
      this.showLoading();
      try {
        const res = await this.$axios(
          new createConfig().postData({
            url: 'face-user',
            data: {
              avatarUrl: '',
              detectorScores: this.detectorScores,
              user: this.userId
            }
          })
        );
        this.$router.push('/admin/student');
        this.$toast.show('Success add face', {
          position: 'top-center',
          type: 'success',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (e) {
        console.log(e);
        const error = new responseManager().manageError(e);
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
      console.log('jalan');
    },
    getToastError() {
      this.$toast.show('Please allow camera access', {
        position: 'top-center',
        type: 'error',
        duration: 5000,
        theme: 'bubble',
        singleton: true
      });
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
      const display = {
        width: this.custom.videoWidth,
        height: this.custom.videoHeight
      };
      interval = setInterval(async () => {
        this.isProcess = false;
        this.$refs.canvasref.innerHTML = faceapi.createCanvasFromMedia(
          this.$refs.videoref
        );
        faceapi.matchDimensions(this.$refs.canvasref, display);
        const detection = await faceapi
          .detectAllFaces(
            this.$refs.videoref,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceExpressions();
        const resizedDetection = faceapi.resizeResults(detection, display);
        this.$refs.canvasref
          .getContext('2d')
          .clearRect(0, 0, this.custom.videoWidth, this.custom.videoHeight);
        faceapi.draw.drawDetections(this.$refs.canvasref, resizedDetection);
        faceapi.draw.drawFaceLandmarks(this.$refs.canvasref, resizedDetection);
        this.onCheckFace(detection[0]);
        this.otherCondition(detection);
      }, 2000);
    },
    findDuplicates(arr) {
      let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
      // JS by default uses a crappy string compare.
      // (we use slice to clone the array so the
      // original array won't be modified)
      let results = [];
      for (let i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
          results.push(sorted_arr[i]);
        }
      }
      return results || [];
    },
    onCheckFace(el) {
      if (!el) return;
      const score = el.detection._score.toFixed(2);
      this.dataFace.push(score);
    },
    otherCondition(el = []) {
      if (el.length === 0) this.isNotNotDetected = true;
      else if (el.length !== 1) this.isNotNotDetected = true;
      else this.isNotNotDetected = false;
    },
    onReadyAbsen(e) {
      e.target.classList.remove('animate');
      e.target.classList.add('animate');
      setTimeout(() => {
        e.target.classList.remove('animate');
      }, 700);
      this.readyAbasen = true;
      this.loadModuls();
    }
  }
};
</script>

<style scoped>
.bubbly-button {
  font-family: 'Helvetica', 'Arial', sans-serif;
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
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
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
