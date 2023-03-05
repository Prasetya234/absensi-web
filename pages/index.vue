<template>
  <div></div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
    name: "IndexPage",
    computed: {
      ...mapGetters('auth', ['getRole'])
    },
    mounted() {
      if (this.getRole === 'STUDENT') {
        this.$router.push('/student')
      } else if (this.getRole === 'INSTRUCTOR') {
        this.$router.push('/admin')
      } else if (this.getRole === 'ADMIN') {
        this.$router.push('/admin')
      } else {
        this.$router.push('/login')
      }
    }

}
</script>
