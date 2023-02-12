<template>
  <div :class="`${pattren ? 'bg-[#F5F5F5]' : ''}`">
    <layout-navbar-student v-if="pattren" />
    <ilustration-loading v-if="isLoading" />
    <Nuxt />
  </div>
</template>
<script>

import { isAuthenticated } from '~/utils/auth';
import publicPath from '~/utils/publicPath';
import { mapActions } from 'vuex';

export default {
  name: 'LayoutDefault',
  computed: {
    pattren() {
      return publicPath.find((route) => route.path !== this.$route.path);
    },
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
  },
  methods: {
    ...mapActions('chat', ['connect']),
    initializeMiddleware(router) {
      if (!isAuthenticated() && !publicPath.find((route) => route.path === router.path)) {
        this.$router.push('/login');
        return
      }
      this.connect()
    },
  }
};
</script>
