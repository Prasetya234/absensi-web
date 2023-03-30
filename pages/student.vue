<template>
  <div style="min-height: 100vh; height: 100%">
    <layout-navbar-student v-if="nav" />
    <nuxt-child @no-nav="hideNav" @no-footer="hideFooter" />
    <layout-footer v-if="footer"  />
  </div>
</template>

<script>
export default {
  name: 'Student',
  data: () => ({
    nav: true,
    footer: true
  }),
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
    }
  }
};
</script>
