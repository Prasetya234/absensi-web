<template>
  <div></div>
</template>

<script>
import { getRole } from '~/utils/auth'

export default {
    name: "IndexPage",
    mounted() {
      if (getRole() === 'STUDENT') {
        this.$router.push('/student')
      } else if (getRole() === 'INSTRUCTOR') {
        this.$router.push('/admin')
      } else if (getRole() === 'ADMIN') {
        this.$router.push('/admin')
      } else {
        this.$router.push('/login')
      }
    }

}
</script>
