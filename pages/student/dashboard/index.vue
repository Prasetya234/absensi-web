<template>
  <div class="flex justify-center items-center py-[7.85%]">
    <div class="space-y-5">
      <div class="flex justify-center">
        <span class="h-[225.97px] w-[321.76px]" >
            <icons-welcome />
        </span>
      </div>
      <div class="flex justify-center">
        <div class="text-center w-[80%]">
          <h2
            class="text-[#5A5A5A] text-[26px] font-[400] leading-[38px] mb-[6%] alata"
          >
            Welcome, {{ getUsername }}
          </h2>
          <p
            class="text-[#5A5A5A] text-[16px] font-[400] leading-[24px] mb-[10%] roboto"
          >
            Welcome to Bina Nusantara vocational high school Bootcamp Class
            Attendance Website
          </p>
          <button
            class="border bg-[#CC6633] rounded-md py-[10px] px-[48px]"
            @click="$router.push('/')"
          >
            <p
              class="uppercase text-[#FFFFFF] text-[16px] leading-[24px] alata"
            >
              START ACTIVITY
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import { firstAccess, getFirstAccess } from '~/utils/auth';

export default {
  name: 'DashboardPage',
  computed: {
    ...mapGetters('auth', ['getUsername'])
  },
  mounted() {
    if (!getFirstAccess()) {
      firstAccess();
    } else {
        this.$router.push('/');
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.alata {
  font-family: 'Alata', sans-serif;
}
.roboto {
  font-family: 'Roboto', sans-serif;
}
</style>
