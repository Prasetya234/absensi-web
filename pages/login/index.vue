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
                        <svg
                          v-if="!showPassword"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                          />
                          <path
                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          v-if="showPassword"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye-slash"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                          />
                          <path
                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                          />
                          <path
                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                          />
                        </svg>
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
import { mapActions, mapGetters } from 'vuex';

import './style.css';
import { createConfig, responseManager } from '@/service/api-manager/index';
import { isAuthenticated, loggined } from '~/utils/auth';

export default {
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
  computed: {
    ...mapGetters('chat', ['getStompClient'])
  },
  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
     ...mapActions('chat', ['connect']),
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async onLogin(e) {
      e.preventDefault();
      this.showLoading();
      try {
        const { data: resData } = await this.$axios(
          new createConfig().postDataLogLogin({
            data: {
              email: this.form.email,
              password: this.form.password,
              type: this.role.toUpperCase()
            }
          })
        );
        loggined(resData)
        if (!this.getStompClient) this.connect();
        this.$router.push('/');
        this.$toast.show(`Welcome ${resData.data.user?.firstName}`, {
          position: 'top-center',
          type: 'success',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      } catch (e) {
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
    if (isAuthenticated()) {
      this.$router.push('/');
    }
  }
};
</script>
