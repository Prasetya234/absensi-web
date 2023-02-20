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
      <div class="nav-item">
        <span class="text-white">Profile</span>
        <span class="text-red-500" @click="logout">LogOut</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getUsername, removeAllStorage } from '~/utils/auth';

export default {
  name: 'NavbarAdmin',
  methods:{
     logout() {
      this.$toast.show(`Good bye ${getUsername()}`, {
          position: 'top-center',
          type: 'error',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      removeAllStorage()
      this.$router.push('/login');
    },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');

.nunito {
  font-family: 'Nunito', sans-serif;
}
</style>
