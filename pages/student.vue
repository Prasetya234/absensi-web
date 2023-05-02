<template>
  <div style="min-height: 100vh; height: 100%">
    <layout-navbar-student v-if="nav" />
    <!-- <div class="flex md:block pt-10"> -->
      <div class="w-full h-screen overflow-y-auto">
        <nuxt-child @no-nav="hideNav" @no-footer="hideFooter" />
      </div>
      <!-- </div> -->
    <layout-footer v-if="footer" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { removeAllStorage } from '~/utils/auth';
export default {
  name: 'Student',
  data: () => ({
    nav: true,
    footer: true
  }),
  computed: {
    ...mapGetters('auth', ['getUsername', 'getUserId']),
    route() {
      return this.$route.path;
    },
    userId() {
      return this.$route.params.id;
    }
  },
  watch: {
    $route() {
      this.nav = true;
    }
  },
  methods: {
    hideNav() {
      this.nav = false;
    },
    hideFooter() {
      this.footer = false;
    },
    activeMenu(path, route) {
      return path === route
        ? 'text-[#CC6633] fill-[#CC6633] bg-[#F7931E]'
        : 'text-[#828282] fill-[#828282]';
    },
    logout() {
      this.$toast.show(`Good bye ${this.getUsername}`, {
        position: 'top-center',
        type: 'error',
        duration: 5000,
        theme: 'bubble',
        singleton: true
      });
      removeAllStorage();
      this.$router.push('/login');
      setTimeout(() => {
        window.location.reload();
      }, 500);
    },
    profile() {
      const userId = btoa(this.getUserId);
      this.$router.push('/student/profile/' + userId);
    }
  }
};
</script>
