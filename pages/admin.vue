<template>
  <div>
    <layout-navbar-admin />
    <div class="flex pt-20">
      <div
        class="w-[20%] md:w-1/6 h-[30.6rem] md:h-[36.05rem] bg-[#58595B] pt-2 font-medium alata"
      >
        <span
          :class="`text-white py-4 px-7 cursor-pointer truncate block transition duration-300 hover:bg-[#fde9d0]/50 hover:transition hover:duration-300 ${
            activeMenu === data.to ? 'bg-[#F7931E]' : ''
          }`"
          v-for="(data, idx) in menus"
          :key="idx"
          @click="toPage(data.to)"
          :title="data.name"
        >
          {{ data.name }}
        </span>
      </div>
      <div class="w-full p-7 h-[30.6rem] md:h-[36.05rem] overflow-y-auto">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Admin',
  data: () => ({
    menus: [
      {
        name: 'Dashboard',
        icon: 'md-view-dashboard',
        to: '/admin'
      },
      {
        name: 'Student',
        icon: 'mdi-account-group',
        to: '/admin/student'
      },
      {
        name: 'Student Assignment',
        icon: '',
        to: '/admin/tasks'
      },
      {
        name: 'Absen',
        icon: 'mdi-calendar-check',
        to: '/admin/presence'
      },
      {
        name: 'Report',
        icon: 'mdi-file-document',
        to: '/admin/report'
      },
      {
        name: 'Setting',
        icon: 'mdi-cog',
        to: '/admin/setting'
      },
      {
        name: 'Add User',
        icon: 'mdi-account-group',
        to: '/admin/add-user'
      },
      {
        name: 'Create School',
        icon: 'mdi-account-group',
        to: '/admin/add-school'
      }
    ]
  }),
  computed: {
    ...mapGetters('auth', ['getRole']),
    activeMenu() {
      return this.$route.path;
    }
  },
  methods: {
    toPage(to) {
      this.$router.push(to);
    },
    checkRole() {
      if (this.getRole !== 'INSTRUCTOR') {
        this.$router.push('/');
      }
    }
  },
  mounted() {
    this.checkRole();
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.alata {
  font-family: 'Alata', sans-serif;
}
</style>
