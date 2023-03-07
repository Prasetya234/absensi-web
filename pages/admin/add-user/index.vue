<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start">
      <h2 class="text-3xl font-bold">Add User</h2>
    </div>
    <div
      class="bg-white p-3 rounded-md shadow-md selection:bg-[#CC6633] selection:text-white"
    >
      <form
        class="bg-white rounded-md p-5 flex flex-col gap-5"
        @submit="addUser"
      >
        <div class="flex flex-col gap-3">
          <div class="avatar-url flex flex-col gap-1">
            <label class="text-sm font-semibold" for="avatar-url"
              >Avatar URL</label
            >
            <input
              id="avatar-url"
              type="text"
              v-model="form.avatarUrl"
              class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
              autocomplete="off"
              placeholder="Avatar Url"
            />
          </div>
          <div class="flex flex-row justify-between gap-3 w-full">
            <div class="first-name w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="firstname"
                >First Name</label
              >
              <input
                v-model="form.firstName"
                id="firstname"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                placeholder="Firstname"
              />
            </div>
            <div class="last-name w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="lastname"
                >Last Name</label
              >
              <input
                v-model="form.lastName"
                id="lastname"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                placeholder="Lastname"
              />
            </div>
            <div class="birth-date w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="birthdate"
                >Date of Birth</label
              >
              <input
                v-model="form.birthDate"
                id="birthdate"
                type="date"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="flex flex-row justify-between gap-3">
            <div class="email flex flex-col gap-1 w-full">
              <label class="text-sm font-semibold" for="email">Email</label>
              <input
                v-model="form.email"
                id="email"
                type="email"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                placeholder="Email"
              />
            </div>
            <div class="password flex flex-col gap-1 w-full">
              <label class="text-sm font-semibold" for="password"
                >Password</label
              >
              <div class="relative">
                <input
                  v-model="form.password"
                  id="password"
                  :type="[showPassword ? 'text' : 'password']"
                  class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                  autocomplete="off"
                  placeholder="Password"
                />
                <span
                  class="absolute cursor-pointer top-2.5 right-3 bottom-2.5 fill-gray-400"
                  @click="showPassword = !showPassword"
                >
                  <svg
                    v-if="!showPassword"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="inherit"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                    />
                    <path
                      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                    /></svg
                  ><svg
                    v-if="showPassword"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="inherit"
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
                    /></svg
                ></span>
              </div>
            </div>
          </div>
          <div class="genders flex flex-row justify-start gap-10">
            <div class="male">
              <input
                v-model="form.gender"
                value="MALE"
                id="male"
                type="radio"
                name="gender"
                class="gender accent-[#CC6633]"
                autocomplete="off"
              />
              <label class="text-sm font-semibold" for="male">MALE</label>
            </div>
            <div class="female">
              <input
                v-model="form.gender"
                value="FEMALE"
                id="female"
                type="radio"
                name="gender"
                class="gender accent-[#CC6633]"
                autocomplete="off"
              />
              <label class="text-sm font-semibold" for="female">FEMALE</label>
            </div>
          </div>
          <div class="flex flex-row justify-between gap-3 w-full">
            <div class="no-siswa w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="nosiswa"
                >No Student</label
              >
              <input
                v-model="form.noSiswa"
                id="nosiswa"
                type="number"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
                autocomplete="off"
                placeholder="No Student"
              />
            </div>
            <div class="batch w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="batch">Batch</label>
              <input
                v-model="form.batch"
                id="batch"
                type="number"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
                autocomplete="off"
                placeholder="Batch"
              />
            </div>
            <div class="favorite w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="fav">Favorite</label>
              <select
                v-model="form.favorite"
                id="fav"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                placeholder="Favorite"
              >
                <option :value="false">FALSE</option>
                <option :value="true">TRUE</option>
              </select>
            </div>
          </div>
          <div class="flex flex-row justify-between gap-3">
            <div class="school-class flex flex-col gap-1 w-full">
              <label class="text-sm font-semibold" for="school-class"
                >School Class</label
              >
              <input
                v-model="form.schoolClass"
                id="school-class"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                placeholder="School Class"
              />
            </div>
            <div class="school-id flex flex-col gap-1 w-full">
              <label class="text-sm font-semibold" for="school-id"
                >School ID</label
              >
              <select
                  v-model="form.idSchool"
                  class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                  autocomplete="off"
                  placeholder="School ID"
                >
                  <option
                    v-for="(data, idx) in schools"
                    :key="idx"
                    :value="data.id"
                  >
                    {{ data.name }}
                  </option>
                </select>
              <!-- <input
                v-model="form.idSchool"
                id="schoolId"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
                autocomplete="off"
                placeholder="School ID"
              /> -->
            </div>
          </div>
          <div class="description flex flex-col gap-1">
            <label class="text-sm font-semibold" for="description"
              >Description</label
            >
            <textarea
              id="description"
              rows="1"
              class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
              v-model="form.description"
              autocomplete="off"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <button
          @click="addUser"
          class="w-full text-white p-1.5 rounded-md uppercase bg-[#CC6633]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { createConfig, responseManager } from '~/service/api-manager';

export default {
  name: 'AddUser',
  data: () => ({
    schools: [],
    showPassword: false,
    form: {
      avatarUrl: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      password: '',
      gender: '',
      noSiswa: 0,
      batch: 0,
      favorite: true,
      schoolClass: '',
      idSchool: '',
      description: ''
    }
  }),
  mounted() {
    this.fetchSchools();
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async fetchSchools() {
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'class-bootcamp'
          })
        );
        this.schools = res.data.content;
      } catch (err) {
        // eslint-disable-next-line new-cap
        const error = new responseManager().manageError(err);
        this.$toast.show(error?.error || error.message, {
          position: 'top-center',
          type: 'error',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      }
    },
    async addUser(e) {
      e.preventDefault();
      this.showLoading();
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().postData({
            url: 'register',
            data: {
              avatarUrl: this.form.avatarUrl,
              firstName: this.form.firstName,
              lastName: this.form.lastName,
              birthDate: this.form.birthDate,
              email: this.form.email,
              password: this.form.password,
              gender: this.form.gender,
              noSiswa: this.form.noSiswa,
              batch: this.form.batch,
              favorite: this.form.favorite,
              schoolClass: this.form.schoolClass,
              idSchool: this.form.idSchool,
              description: this.form.description
            }
          })
        );
        this.form = res.data;
        this.$router.go(-1);
        this.$toast.show(`Successfully added ${res.data.firstName}`, {
          position: 'top-center',
          type: 'success',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      } catch (err) {
        // eslint-disable-next-line new-cap
        const error = new responseManager().manageError(err);
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
  }
};
</script>
