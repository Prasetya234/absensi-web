<template>
  <div :class="`${pattren ? 'bg-[#F5F5F5]' : ''}`">
    <layout-navbar-student v-if="pattren" />
    <Nuxt />
  </div>
</template>
<script>

const privatePath = [
    "/login"
]

export default {
  name: 'LayoutDefault',
  computed: {
    pattren() {
      return privatePath.find((route) => route !== this.$route.path) ;
    }
  }
};
</script>
