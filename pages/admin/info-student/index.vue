<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start gap-5">
      <button
        class="h-fit w-fit p-2.5 rounded-full duration-300 hover:bg-gray-200 over:duration-300"
        @click="$router.go(-1)"
      >
        <IconsArrow size="20" />
      </button>
      <h2 class="text-3xl font-bold">{{ userData.firstName }}'s Info</h2>
    </div>
    <div
      class="bg-white p-5 rounded-md shadow-md selection:bg-[#CC6633] selection:text-white"
    >
      <div class="flex flex-row gap-5 w-full">
        <div class="avatar-url flex flex-row justify-center py-5 w-2/6">
          <img
            :src="userData.avatarUrl"
            alt="user-photo"
            class="h-64 w-64 rounded-full"
          />
        </div>
        <div class="flex flex-col gap-3 w-full">
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
                :value="userData.firstName"
                readonly
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
                :value="userData.lastName"
                readonly
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
                :value="userData.birthDate"
                readonly
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
                :value="userData.email"
                readonly
              />
            </div>
            <div class="gender flex flex-col gap-1 w-full">
              <label class="text-sm font-semibold" for="gender">Gender</label>
              <input
                id="gender"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                :value="userData.gender"
                readonly
              />
            </div>
          </div>
          <div class="flex flex-row justify-between gap-3 w-full">
            <div class="no-siswa w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="nosiswa"
                >No Student</label
              >
              <input
                id="nosiswa"
                type="number"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
                autocomplete="off"
                :value="userData.noSiswa"
                readonly
              />
            </div>
            <div class="batch w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="batch">Batch</label>
              <input
                id="batch"
                type="number"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
                autocomplete="off"
                :value="userData.batch"
                readonly
              />
            </div>
            <div class="favorite w-1/3 flex flex-col gap-1">
              <label class="text-sm font-semibold" for="fav">Favorite</label>
              <input
                id="fav"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] uppercase"
                autocomplete="off"
                :value="userData.favorite"
                readonly
              />
            </div>
          </div>
          <div class="flex flex-row justify-between gap-3">
            <div class="school-class flex flex-col gap-1 w-full">
              <label class="text-sm font-semibold" for="school-class"
                >School Class</label
              >
              <input
                id="school-class"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                autocomplete="off"
                :value="userData.schoolClass"
                readonly
              />
            </div>
            <div class="school-id flex flex-col gap-1 w-full">
              <label class="text-sm font-semibold" for="school-id"
                >School ID</label
              >
              <input
                id="schoolId"
                type="text"
                class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
                autocomplete="off"
                :value="userData.schoolId.name"
                readonly
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
              :value="userData.description"
              readonly
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createConfig, responseManager } from '~/service/api-manager';
export default {
  name: 'InfoStudent',
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
    }
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.nunito {
  font-family: 'Nunito', sans-serif;
}
.poppins {
  font-family: 'Poppins', sans-serif;
}
.alata {
  font-family: 'Alata', sans-serif;
}
</style>
