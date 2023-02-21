<template>
  <div style="min-height: 100vh; height: 100%">
    <layout-navbar-student v-if="pattren" />
    <nuxt-child />
  </div>
</template>

<script>
import publicPath from '~/utils/publicPath';

export default {
  name: 'Student',
  computed: {
    pattren() {
      const res = publicPath.find((route) => route.path === this.$route.path);
      return res ? res.no_nav !== true : true;
    }
  }
};
</script>
