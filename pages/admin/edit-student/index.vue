<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start gap-3">
      <button
        class="h-fit w-fit p-2.5 rounded-full duration-300 hover:bg-gray-200 over:duration-300"
        @click="$router.go(-1)"
      >
        <IconsArrow size="20" />
      </button>
      <h2 class="text-2xl md:text-3xl font-bold">Edit User</h2>
    </div>
    <div
      class="bg-white p-3 rounded-md shadow-md selection:bg-[#CC6633] selection:text-white"
    >
      <form
        class="bg-white rounded-md p-5 flex flex-col gap-5"
        @submit="saveChange"
      >
        <div class="flex flex-col gap-3">
          <div class="avatar-url flex flex-col gap-1">
            <label class="text-sm font-semibold" for="avatar-url"
              >Avatar URL</label
            >
            <input
              id="avatar-url"
              type="text"
              class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
              autocomplete="off"
              v-model="userData.avatarUrl"
            />
          </div>
          <div class="flex flex-row justify-between gap-3 w-full">
            <div class="first-name w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="firstname"
                >First Name</label
              >
              <input
                id="firstname"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                v-model="userData.firstName"
              />
            </div>
            <div class="last-name w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="lastname"
                >Last Name</label
              >
              <input
                id="lastname"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                v-model="userData.lastName"
              />
            </div>
            <div class="birth-date w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="birthdate"
                >Date of Birth</label
              >
              <input
                id="birthdate"
                type="date"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                v-model="userData.birthDate"
              />
            </div>
          </div>
          <div class="flex flex-row justify-between gap-3">
            <div class="email flex flex-col gap-1 w-full">
              <label class="text-sm font-semibold" for="email">Email</label>
              <input
                id="email"
                type="email"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                v-model="userData.email"
              />
            </div>
            <div class="gender flex flex-col gap-1 w-full">
              <label class="text-sm font-semibold" for="gender">Gender</label>
              <div class="flex flex-row gap-3">
                <select
                  v-model="userData.gender"
                  id="genders"
                  class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                  autocomplete="off"
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between gap-3 w-full">
          <div class="no-siswa w-full flex flex-col gap-1">
            <label class="text-sm font-semibold" for="nosiswa"
              >No Student</label
            >
            <input
              id="nosiswa"
              type="number"
              class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
              autocomplete="off"
              v-model="userData.noSiswa"
            />
          </div>
          <div class="batch w-1/3 flex flex-col gap-1">
            <label class="text-sm font-semibold" for="batch">Batch</label>
            <input
              id="batch"
              type="number"
              class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
              autocomplete="off"
              v-model="userData.batch"
            />
          </div>
        </div>
        <div class="flex flex-row justify-between gap-3">
          <div class="favorite flex flex-col gap-1 w-1/3">
            <label class="text-sm font-semibold" for="fav">Favorite</label>
            <select
              v-model="userData.favorite"
              id="fav"
              class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
              autocomplete="off"
              placeholder="Favorite"
            >
              <option :value="false">FALSE</option>
              <option :value="true">TRUE</option>
            </select>
          </div>
          <div class="school-class flex flex-col gap-1 w-full">
            <label class="text-sm font-semibold" for="school-class"
              >School Class</label
            >
            <input
              id="school-class"
              type="text"
              class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
              autocomplete="off"
              v-model="userData.schoolClass"
            />
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
            autocomplete="off"
            v-model="userData.description"
          ></textarea>
        </div>
        <button
          class="uppercase bg-[#CC6633] rounded-md py-2 text-white font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { createConfig, responseManager } from '~/service/api-manager';
export default {
  name: 'EditStudent',
  data() {
    return {
      userData: {
        avatarUrl: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        gender: '',
        noSiswa: '',
        batch: '',
        favorite: '',
        schoolClass: '',
        schoolId: {
          name: ''
        },
        description: ''
      }
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const { data: resData } = await this.$axios(
          /* eslint-disable new-cap */
          new createConfig().getData({
            url: `user/${atob(this.$route.query.idUser)}`
          })
        );
        this.userData = resData.data;
      } catch (err) {
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
    async saveChange(e) {
      e.preventDefault();
      try {
        const { data: resData } = await this.$axios(
          new createConfig().putData({
            url: `user/${atob(this.$route.query.idUser)}`,
            data: {
              avatarUrl: this.userData.avatarUrl,
              firstName: this.userData.firstName,
              lastName: this.userData.lastName,
              birthDate: this.userData.birthDate,
              email: this.userData.email,
              gender: this.userData.gender,
              noSiswa: this.userData.noSiswa,
              batch: this.userData.batch,
              favorite: this.userData.favorite,
              schoolClass: this.userData.schoolClass,
              description: this.userData.description
            }
          })
        );
        this.userData = resData.data;
        this.$router.go(-1);
        this.$toast.show(`Successful edit user ${resData.data.firstName}`, {
          position: 'top-center',
          type: 'success',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      } catch (err) {
        console.log(err);
        const error = new responseManager().manageError(err);
        this.$toast.show(error?.error || error.message, {
          position: 'top-center',
          type: 'error',
          duration: 5000,
          theme: 'bubble',
          singleton: true
        });
      }
    }
  }
};
</script>
