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
          Access your {{ role }} information system here
        </p>
        <button
          class="px-3 py-2 bg-[#F7931E] rounded-lg text-white capitalize font-semibold"
          @click="$router.push('/')"
        >
          Open {{ role }} Page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  data() {
    return {
      role: ''
    };
  },
  mounted() {
    if (localStorage.getItem('role') === 'ADMIN') {
      this.role = 'dashboard admin';
    } else if (localStorage.getItem('role') === 'INSTRUCTOR') {
      this.role = 'dashboard intructor';
    } else if (localStorage.getItem('role') === 'STUDENT') {
      this.role = 'dashboard student';
    } else {
      this.role = 'login';
    }
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.font-error{
    font-family: 'Montserrat', sans-serif;
}
</style>