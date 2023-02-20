<template>
  <div>
    <layout-navbar-admin />
    <div class="flex pt-20" style="min-height: 100vh">
      <div class="w-1/6 bg-[#58595B] pt-2">
        <span :class="`text-white p-4 block cursor-pointer ${activeMenu === data.to?  'bg-[#F7931E]' : ''}`" v-for="(data, idx) in menus" :key="idx" @click="toPage(data.to)">{{data.name}}</span>
      </div>
      <div class="w-full p-5">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import { getRole } from '~/utils/auth'
export default {
    name: 'Admin',
    data: () => ({
        menus: [
            {
                name: 'Dashboard',
                icon: 'mdi-view-dashboard',
                to: '/admin'
            },
            {
                name: 'Student',
                icon: 'mdi-account-group',
                to: '/admin/student'
            },
            {
                name: 'Absen',
                icon: 'mdi-calendar-check',
                to: '/admin/absen'
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
        ]
    }),
    computed: {
        activeMenu() {
            return this.$route.path
        }
    },
    methods: {
        toPage(to) {
            this.$router.push(to)
        },
        checkRole() {
            if (getRole() !== 'INSTRUCTOR') {
                this.$router.push('/')
            }
        }
    },
    mounted() {
        this.checkRole()
    }
}
</script>