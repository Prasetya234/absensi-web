<template>
  <div class="bg-[#F5F5F5]">
    <ilustration-loading v-if="isLoading" />
    <Nuxt />
  </div>
</template>
<script>
import publicPath from '~/utils/publicPath';

import { isAuthenticated } from '~/utils/auth';
import { mapActions } from 'vuex';

export default {
  name: 'LayoutDefault',
  computed: {
    isLoading() {
      return this.$store.getters['loading/getLoading'];
    }
  },
  watch: {
    $route(to, from) {
      this.initializeMiddleware(to);
    }
  },
  mounted() {
    this.initializeMiddleware(this.$route);
    this.requestPermision();
    this.messagingTitle();
    if (isAuthenticated()) {
      this.connect();
    }
  },
  methods: {
    ...mapActions('chat', ['connect']),
     messagingTitle() {
      const defaultTitle = document.title;
      window.onblur = () => {
        document.title = 'Hey, Please come back!';
      };
      window.onfocus = () => {
        document.title = defaultTitle;
      };
    },
    initializeMiddleware(router) {
      if (
        !isAuthenticated() &&
        publicPath.find((route) => route.path === router.path)
          ?.isAuthenticate !== false
      )
        this.$router.push('/login');
    },
    requestPermision() {
        if (Notification.permission !== "granted") Notification.requestPermission();
    }
  }
};
</script>
