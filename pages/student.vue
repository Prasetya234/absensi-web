<template>
  <div style="min-height: 100vh; height: 100%">
    <layout-navbar-student v-if="nav" />
    <side-bar
      v-if="openSideBar"
      :content="sideBarOption"
      @on-close="onCloseSideBar"
    />
    <nuxt-child
      @no-nav="hideNav"
      @no-footer="hideFooter"
      @open-sidebar="onSideBar"
    />
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
    openSideBar: false,
    footer: true,
    sideBarOption: {
      title: '',
      content: '',
      maker: ''
    }
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
    onCloseSideBar() {
      this.openSideBar = false;
    },
    onSideBar(title, data, maker) {
      this.openSideBar = true;
      this.sideBarOption = {
        title,
        content: data,
        maker
      };
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
