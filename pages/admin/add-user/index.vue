<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start">
      <h2 class="text-3xl font-bold">Add User</h2>
    </div>
    <div
      class="bg-white p-3 rounded-md shadow-md selection:bg-[#CC6633] selection:text-white"
    >
      <form
        class="bg-white rounded-md p-3 flex flex-col gap-5"
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
          <div class="flex flex-row gap-5">
            <div class="left-side w-full flex flex-col gap-3">
              <div class="flex flex-row justify-between gap-5 w-full">
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
              <div class="flex flex-row justify-between gap-5">
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
                      <icons-eye v-if="!showPassword" />
                      <icons-eyeslash v-if="showPassword" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="gender w-full flex flex-col gap-1">
                <label for="genders" class="text-sm font-semibold"
                  >Gender</label
                >
                <div class="genders flex flex-row justify-between gap-5">
                  <div class="male w-full">
                    <input
                      type="radio"
                      name="gender"
                      value="MALE"
                      id="male"
                      class="peer hidden"
                    />
                    <label
                      for="male"
                      class="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 px-4 py-2 text-sm text-gray-700 font-medium focus:shadow-sm focus:shadow-[#CC6633] peer-checked:border-[#CC6633] peer-checked:text-black"
                    >
                      <p>MALE</p>
                    </label>
                  </div>
                  <div class="female w-full">
                    <input
                      type="radio"
                      name="gender"
                      value="FEMALE"
                      id="female"
                      class="peer hidden"
                    />
                    <label
                      for="female"
                      class="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 px-4 py-2 text-sm text-gray-700 font-medium focus:shadow-sm focus:shadow-[#CC6633] peer-checked:border-[#CC6633] peer-checked:text-black"
                    >
                      <p>FEMALE</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-side w-full flex flex-col gap-3">
              <div class="flex flex-row justify-between gap-5 w-full">
                <div class="no-siswa w-full flex flex-col gap-1">
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
                <div class="batch w-full flex flex-col gap-1">
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
              </div>
              <div class="flex flex-row justify-between gap-5">
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
                    <option value="">None</option>
                    <option
                      v-for="(data, idx) in schools"
                      :key="idx"
                      :value="data.id"
                    >
                      {{ data.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="favorite w-full flex flex-col gap-1">
                <label class="text-sm font-semibold" for="favorites"
                  >Favorite</label
                >
                <div class="favorites flex flex-row justify-between gap-5">
                  <div class="fav w-full">
                    <input
                      type="radio"
                      name="favorite"
                      :value="true"
                      id="fav"
                      class="peer hidden"
                    />
                    <label
                      for="fav"
                      class="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 px-4 py-2 text-sm text-gray-700 font-medium focus:shadow-sm focus:shadow-[#CC6633] peer-checked:border-[#CC6633] peer-checked:text-black"
                    >
                      <p>TRUE</p>
                    </label>
                  </div>
                  <div class="non-fav w-full">
                    <input
                      type="radio"
                      name="favorite"
                      :value="false"
                      id="non-fav"
                      class="peer hidden"
                    />
                    <label
                      for="non-fav"
                      class="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 px-4 py-2 text-sm text-gray-700 font-medium focus:shadow-sm focus:shadow-[#CC6633] peer-checked:border-[#CC6633] peer-checked:text-black"
                    >
                      <p>FALSE</p>
                    </label>
                  </div>
                </div>
              </div>
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
        <div class="flex flex-row justify-end my-5">
          <button
            @click="addUser"
            class="w-[30%] text-white py-2.5 rounded-md uppercase bg-[#CC6633]"
            type="submit"
          >
            Submit
          </button>
        </div>
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
      favorite: false,
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
            url: 'school'
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
