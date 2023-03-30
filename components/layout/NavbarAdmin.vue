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
          <ProfileAdmin/>
          <span class="text-white">Profile</span>
        </div>
        <span class="text-white mx-4">|</span>
        <span class="text-red-500 cursor-pointer" @click="logout">LogOut</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ProfileAdmin from '../icons/profileadmin.vue';
import { removeAllStorage } from '~/utils/auth';
export default {
    name: "NavbarAdmin",
    computed: {
        ...mapGetters("auth", ["getUsername"])
    },
    methods: {
        logout() {
            this.$toast.show(`Good bye ${this.getUsername}`, {
                position: "top-center",
                type: "error",
                duration: 5000,
                theme: "bubble",
                singleton: true
            });
            removeAllStorage();
            this.$router.push("/login");
        }
    },
    components: { ProfileAdmin }
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
