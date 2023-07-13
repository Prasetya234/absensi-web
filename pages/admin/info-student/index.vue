<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start gap-5">
      <button
        class="h-fit w-fit p-2.5 rounded-full duration-300 hover:bg-gray-200 over:duration-300"
        @click="$router.go(-1)"
      >
        <IconsArrow size="20" />
      </button>
      <h2 class="text-2xl md:text-3xl font-bold">{{ userData.firstName }}'s Info</h2>
    </div>
    <div
      class="bg-white rounded-md shadow-md selection:bg-[#CC6633] selection:text-white"
    >
      <div class="flex flex-row gap-5">
        <div
          class="avatar-url flex flex-col gap-3 justify-center items-center shadow-md rounded-l-md bg-black/10 p-3 w-5/12"
        >
          <div class="bg-white h-64 w-64 p-1 rounded-full">
            <img
              :src="userData.avatarUrl"
              alt="user-photo"
              class="rounded-full"
            />
          </div>
          <div class="flex flex-col gap-1 text-center">
            <h3 class="text-lg font-semibold nunito">
              {{ userData.firstName }} {{ userData.lastName }}
            </h3>
            <p class="text-sm poppins">{{ userData.createAt }}</p>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-full p-5">
          <div class="flex flex-row gap-2">
            <div class="firstname-property nunito w-1/4">Firstname</div>
            <span class="firstname-separated w-fit">:</span>
            <div class="firstname-value poppins w-full border-b">
              {{ userData.firstName }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="lastname-property nunito w-1/4">Lastname</div>
            <span class="lastname-separated w-fit">:</span>
            <div class="lastname-value poppins w-full border-b">
              {{ userData.lastName }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="gender-property nunito w-1/4">Gender</div>
            <span class="gender-separated w-fit">:</span>
            <div class="gender-value poppins w-full border-b">
              {{ userData.gender }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="birthdate-property nunito w-1/4">Date Of Birth</div>
            <span class="birthdate-separated w-fit">:</span>
            <div class="birthdate-value poppins w-full border-b">
              {{ userData.birthDate }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="email-property nunito w-1/4">Email</div>
            <span class="email-separated w-fit">:</span>
            <div class="email-value poppins w-full border-b">
              {{ userData.email }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="studentid-property nunito w-1/4">Student ID</div>
            <span class="studentid-separated w-fit">:</span>
            <div class="studentid-value poppins w-full border-b">
              {{ userData.noSiswa }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="batch-property nunito w-1/4">Batch</div>
            <span class="batch-separated w-fit">:</span>
            <div class="batch-value poppins w-full border-b">
              {{ userData.batch }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="favorite-property nunito w-1/4">Favorite</div>
            <span class="favorite-separated w-fit">:</span>
            <div class="favorite-value poppins w-full border-b">
              {{ userData.favorite }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="schoolclass-property nunito w-1/4">School Class</div>
            <span class="schoolclass-separated w-fit">:</span>
            <div class="schoolclass-value poppins w-full border-b">
              {{ userData.schoolClass }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="schoolid-property nunito w-1/4">School ID</div>
            <span class="schoolid-separated w-fit">:</span>
            <div class="schoolid-value poppins w-full border-b">
              {{ userData.schoolId.name }}
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="description-property nunito w-1/4">Description</div>
            <span class="description-separated w-fit">:</span>
            <div class="description-value poppins w-full border-b">
              {{ userData.description }}
            </div>
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
        createAt: '',
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
