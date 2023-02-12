<template>
  <div class="all-not-found">
    <div class="w-full h-screen flex justify-center items-center">
      <div class="space-y-8 text-center font-error">
        <img
          src="../assets/img/not-found-image.png"
          alt="Not Found Image"
          class="w-1/2 mx-auto"
        />
        <p class="text-[#58595B] font-semibold">
          Page not found or you don't have access to this page
        </p>
        <button
          class="px-3 py-2 bg-[#F7931E] rounded-lg text-white capitalize font-semibold"
          @click="$router.push('/')"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { isAuthenticated } from '~/utils/auth';
export default {
  name: 'ErrorLayout',
  methods: {
    isAuthenticated() {
      if(!isAuthenticated()) this.$router.push('/login');
    }
  },
  mounted() {
    this.isAuthenticated()
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.font-error{
    font-family: 'Montserrat', sans-serif;
}
</style>