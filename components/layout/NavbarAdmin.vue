<template>
  <div class="bg-[#333333] fixed z-20 w-full mb-20 h-20">
    <div class="mx-[5%] flex justify-between items-center h-full">
      <div class="app-name flex items-center">
        <p
          class="text-[#F7931E] text-[30px] leading-[41px] font-extrabold uppercase nunito"
        >
          Absensi X Insctructor
        </p>
      </div>
      <div class="nav-item flex alata">
        <div class="flex gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="#F7931E"
            class=""
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <span class="text-white">Profile</span>
        </div>
        <span class="text-white mx-4">|</span>
        <span class="text-red-500 cursor-pointer" @click="logout">LogOut</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getUsername, removeAllStorage } from '~/utils/auth';
export default {
  name: 'NavbarAdmin',
  methods: {
    logout() {
      this.$toast.show(`Good bye ${getUsername()}`, {
        position: 'top-center',
        type: 'error',
        duration: 5000,
        theme: 'bubble',
        singleton: true
      });
      removeAllStorage();
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.nunito {
  font-family: 'Nunito', sans-serif;
}
.alata {
  font-family: 'Alata', sans-serif;
}
</style>
