<template>
  <div
    class="all-login flex items-center lg:max-h-screen lg:overflow-y-hidden w-full"
  >
    <div class="grid grid-cols-1 lg:grid-cols-5 w-full">
      <div class="col-span-2">
        <img
          v-if="role === 'admin' || role === 'instructor'"
          src="~assets/img/login.jpg"
          alt="Image Login"
          class="h-auto w-full"
        />
        <img
          v-if="role === 'student'"
          src="~assets/img/login-murid.png"
          alt="Image Login"
          class="h-auto w-full"
        />
      </div>
      <div class="text-center space-y-12 my-auto col-span-3 py-0 lg:py-5">
        <h1 class="text-[#EAA825] text-4xl font-light font-judul">
          ABSENSI | LOGIN
        </h1>
        <div class="font-isi px-32 text-left">
          <p class="font-medium">I'am is</p>
          <select
            id="role"
            v-model="role"
            name="role"
            class="shadow border rounded-2xl px-2 w-full py-2 text-[#CC6633] leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div>
          <button
            class="w-[364px] bg-[#CC6633] hover:bg-[#F7931E] text-white py-3 rounded"
            @click="onToggle"
          >
            Login as {{ role }}
          </button>
          <modal v-if="isOpen" :onclose="onToggle">
            <h3 class="mb-4 text-2xl font-bold">Login</h3>
            <form class="px-12 text-left space-y-8" @submit="onLogin">
              <div>
                <fieldset class="w-full space-y-1 text-gray-800">
                  <label for="email-address" class="block text-sm font-medium"
                    >Email Address</label
                  >
                  <div class="flex">
                    <input
                      id="email-address"
                      type="text"
                      name="email-address"
                      v-model="form.email"
                      autocomplete="off"
                      placeholder="Input your email address"
                      class="flex flex-1 px-2 shadow border-2 border-r-0 border-gray-500 bg-white w-full py-2 rounded-l-md text-[#CC6633] leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span
                      class="flex items-center border-2 border-l-0 border-gray-500 bg-white px-3 sm:text-sm rounded-r-md"
                      >@</span
                    >
                  </div>
                </fieldset>
              </div>
              <div>
                <fieldset class="w-full space-y-1 text-gray-800">
                  <label for="password" class="block text-sm font-medium"
                    >Password</label
                  >
                  <div class="flex">
                    <input
                      id="password"
                      autocomplete="off"
                      :type="[showPassword ? 'text' : 'password']"
                      name="password"
                      v-model="form.password"
                      placeholder="Input your password"
                      class="flex flex-1 px-2 shadow border-2 border-r-0 border-gray-500 bg-white w-full py-2 rounded-l-md text-[#CC6633] leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span
                      class="flex items-center cursor-pointer px-3 sm:text-sm rounded-r-md border-2 border-l-0 border-gray-500 bg-white"
                      @click="showPassword = !showPassword"
                    >
                      <span>
                        <Eye v-if="!showPassword" />
                      </span>
                      <span>
                        <Eyeslash v-if="showPassword" />
                      </span>
                    </span>
                  </div>
                </fieldset>
              </div>
              <button
                type="submit"
                class="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#F7931E] hover:bg-[#CC6633]"
              >
                Login
              </button>
            </form>
          </modal>
        </div>
      </div>
    </div>
    <div
      v-if="isOpen"
      class="opacity-50 fixed inset-0 z-40 bg-black"
      @click="onToggle"
    ></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import './style.css';
import { createConfig, responseManager } from '@/service/api-manager/index';
import { getToken } from '~/utils/auth';
import Eyeslash from '~/components/icons/eyeslash.vue';
import Eye from '~/components/icons/eye.vue';

export default {
  components: { Eyeslash, Eye },
  name: 'LoginPage',
  data() {
    return {
      isOpen: false,
      showPassword: false,
      form: {
        email: '',
        password: ''
      },
      role: 'student'
    };
  },
  methods: {
    ...mapActions('chat', ['connect']),
    ...mapActions('auth', ['setCredential']),
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    onToggle() {
      this.isOpen = !this.isOpen;
    },
    async onLogin(e) {
      e.preventDefault();
      this.showLoading();
      try {
        const { data: resData } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().postDataLogLogin({
            data: {
              email: this.form.email,
              password: this.form.password,
              type: this.role.toUpperCase()
            }
          })
        );
        this.setCredential(resData.data);
        this.connect();
        this.$router.push('/');
        this.$toast.show(`Welcome ${resData.data.user?.firstName}`, {
          position: 'top-center',
          type: 'success',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      } catch (e) {
        // eslint-disable-next-line new-cap
        const error = new responseManager().manageError(e);
        this.$toast.show(error?.error || error.message, {
          position: 'top-center',
          type: 'error',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      } finally {
        this.hideLoading();
      }
    }
  },
  mounted() {
    if (getToken()) {
      this.$router.push('/');
    }
  }
};
</script>
