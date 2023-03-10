<template>
  <div class="bg-[#F5F5F5]">
    <ilustration-loading v-if="getLoading" />
    <Nuxt />
  </div>
</template>
<script>
import publicPath from '~/utils/publicPath';

import { mapActions, mapGetters } from 'vuex';
import { createConfig } from '~/service/api-manager';
import { getToken } from '~/utils/auth';

export default {
  name: 'LayoutDefault',
  watch: {
    $route(to, from) {
      this.initializeMiddleware(to);
    }
  },
  mounted() {
    this.initializeMiddleware(this.$route);
    this.requestPermision();
    this.messagingTitle()
    if (this.isAuthenticated) {
      this.connect();
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('loading', ['getLoading'])
  },
  methods: {
    ...mapActions('auth', ['setCredential']),
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
    async initializeMiddleware(router) {
      if (getToken()) {
        const { data: resData } = await this.$axios(
          new createConfig().getData({
            url: 'user'
          })
        );
        this.setCredential({ token: getToken(), user: resData.data });
      }
      if (
        !this.isAuthenticated &&
        publicPath.find((route) => route.path === router.path)
          ?.isAuthenticate !== false
      )
        this.$router.push('/login');
    },

    requestPermision() {
      if (Notification.permission !== 'granted')
        Notification.requestPermission();
    }
  }
};
</script>
