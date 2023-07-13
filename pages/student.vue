<template>
  <div style="min-height: 100vh; height: 100%">
    <layout-navbar-student v-if="nav" />
    <side-bar v-if="openSideBar" :content="sideBarOption" @on-close="onCloseSideBar" />
    <nuxt-child @no-nav="hideNav" @no-footer="hideFooter" @open-sidebar="onSideBar" />
    <layout-footer v-if="footer"  />
  </div>
</template>

<script>
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
      this.openSideBar = false
    },  
    onSideBar(title, data, maker) {
      this.openSideBar = true;
      this.sideBarOption = {
        title,
        content: data,
        maker
      };
    }
  }
};
</script>
