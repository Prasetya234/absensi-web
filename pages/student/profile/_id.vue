<template>
  <div class="bg-gray-50 md:py-[7.83%] py-32">
    <modal v-if="modalActive" :onclose="onToggle">
      <h3 class="mb-4 text-2xl font-bold">Alert</h3>
      <p>Sorry, this feature is not available yet</p>
    </modal>
    <div
      class="box-profile grid md:grid-cols-3 grid-cols-1 md:gap-x-[3.25%] md:space-y-0 space-y-5 md:mx-[5%]"
    >
      <div class="detail-profile md:col-span-2 w-full space-y-6">
        <div
          class="box-overview w-full bg-white rounded-lg p-[2.3%] grid grid-cols-3 roboto text-center"
        >
          <div class="flex justify-center items-center">
            <h2 class="text-[32px] font-medium leading-[40px]">Overview :</h2>
          </div>
          <div class="">
            <h2 class="text-[32px] font-medium leading-[40px]">
              {{ userData.viewers }}
            </h2>
            <p>Viewers</p>
          </div>
          <div class="">
            <h2 class="text-[32px] font-medium leading-[40px]">0</h2>
            <p>Task</p>
          </div>
        </div>
        <div class="rounded-[10px]">
          <div class="relative">
            <div class="background-profile h-32">
              <img
                v-if="userData.schoolId.backgroundProfile"
                class="rounded-t-[10px] h-48 w-full"
                :src="userData.schoolId.backgroundProfile"
                alt="background-profile"
              />
              <img
                v-if="!userData.schoolId.backgroundProfile"
                class="rounded-t-[10px] h-48 w-full"
                src="~/assets/img/background-profile.png"
                alt="background-profile"
              />
            </div>
            <div class="absolute top-20 left-10 bg-white rounded-full p-0.5">
              <div
                class="relative w-fit border border-transparent rounded-full overflow-hidden"
              >
                <img
                  v-if="userData.avatarUrl"
                  class="w-44 h-44 rounded-full"
                  :src="userData.avatarUrl"
                  alt="photo-profile"
                />
                <img
                  v-if="!userData.avatarUrl"
                  class="w-44 h-44 rounded-full"
                  src="~/assets/img/default-profile.jpg"
                  alt="photo-profile"
                />
                <div class="absolute bottom-0 w-full bg-[#CC6666E5]/90">
                  <div class="flex justify-center">
                    <button class="h-7 px-5 pb-0.5 flex items-center gap-2"  v-if="isChange" @click="modalActive = true">
                      <p class="alata text-white text-[10px] font-normal">
                        Change Photo
                      </p>
                      <span class="">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2799 2.19127L8.5103 0.203062C8.39336 0.0730083 8.23512 0 8.07016 0C7.9052 0 7.74695 0.0730083 7.63001 0.203062L1.35641 7.20559L0.783621 9.96886C0.763862 10.0699 0.764539 10.1745 0.785604 10.2752C0.806668 10.3759 0.847588 10.4701 0.905374 10.5508C0.96316 10.6315 1.03635 10.6968 1.1196 10.7419C1.20285 10.787 1.29406 10.8107 1.38656 10.8113C1.42966 10.8162 1.47309 10.8162 1.51619 10.8113L4.01538 10.171L10.2799 3.17526C10.3963 3.04455 10.4616 2.86766 10.4616 2.68326C10.4616 2.49887 10.3963 2.32198 10.2799 2.19127V2.19127ZM3.71391 9.56448L1.37149 10.1138L1.90509 7.54594L6.59898 2.31932L8.4078 4.34123L3.71391 9.56448ZM8.81177 3.8526L7.00295 1.83069L8.05207 0.66473L9.83074 2.68663L8.81177 3.8526Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-3 space-y-11 rounded-b-[10px] mt-16">
            <div class="flex justify-end gap-4 montserrat">
              <button
                v-if="isChange"
                @click="saveChange"
                class="py-2 px-6 rounded-lg text-sm text-white font-bold bg-[#CC6633]"
              >
                <p>Save</p>
              </button>
              <button
                @click="change"
                class="py-2 px-6 rounded-lg text-sm text-white font-bold bg-[#CC6633]"
              >
                <p v-if="!isChange">Edit</p>
                <p v-if="isChange">Cancel</p>
              </button>
              <button
                class="py-2 px-6 rounded-lg text-sm text-[#F7931E] font-bold bg-[#FDE9D2]"
                @click="modalActive = true"
              >
                <p>Download Pdf</p>
              </button>
            </div>
            <div class="px-8 py-4 roboto text-[#333333] space-y-2">
              <h2 class="username alata text-[26px] font-normal leading-[38px]">
                {{ userData.firstName }} {{ userData.lastName }}
              </h2>
              <p class="registered-since text-base text-[#616161] font-normal">
                Registered since {{ userData.createAt }}
              </p>
              <div class="flex gap-x-5">
                <div class="space-y-2">
                  <h5 class="text-base font-medium">Email</h5>
                  <h5 class="text-base font-medium">No Student</h5>
                </div>
                <div class="space-y-2">
                  <p class="text-base font-normal">{{ userData.email }}</p>
                  <p class="text-base font-normal">{{ userData.noSiswa }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="deskripsi rounded-[10px] bg-white">
          <div class="p-6">
            <h2 class="alata text-lg text-[#333333] font-normal leading-4">
              Description
            </h2>
          </div>
          <hr class="border-[#F7F7F7]" />
          <div class="p-6">
            <p v-if="!isChange">{{ userData.description }}</p>
            <textarea
              v-if="isChange"
              class="border border-gray-300 w-full p-3 rounded-md"
              name="description"
              rows="3"
              v-model="userData.description"
            ></textarea>
          </div>
        </div>
        <div class="biodata-siswa rounded-[10px] bg-white">
          <div class="p-6">
            <h2 class="alata text-lg text-[#333333] font-normal leading-4">
              Student Bio
            </h2>
          </div>
          <hr class="border-[#F7F7F7]" />
          <div class="p-6 grid md:grid-cols-2 grid-cols-1 gap-7">
            <div class="space-y-6">
              <div class="fullname space-y-2">
                <p class="roboto text-[#333333] text-base font-medium">
                  Full Name
                </p>
                <p
                  v-if="!isChange"
                  class="roboto text-base text-[#616161] font-normal leading-6 overflow-x-auto [&::-webkit-scrollbar]:hidden"
                >
                  {{ userData.firstName }} {{ userData.lastName }}
                </p>
                <div
                  v-if="isChange"
                  class="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden"
                >
                  <input
                    type="text"
                    class="px-1.5"
                    placeholder="Firstname"
                    v-model="userData.firstName"
                  />
                  <input
                    type="text"
                    class="px-1.5"
                    placeholder="Lastname"
                    v-model="userData.lastName"
                  />
                </div>
                <hr class="border-[#BDBDBD]" />
              </div>
              <div class="birth-date space-y-2">
                <p class="roboto text-[#333333] text-base font-medium">
                  Date of Birth
                </p>
                <p
                  v-if="!isChange"
                  class="roboto text-base text-[#616161] font-normal leading-6"
                >
                  {{ userData.birthDate }}
                </p>
                <input
                  v-if="isChange"
                  type="date"
                  class="w-full"
                  v-model="userData.birthDate"
                />
                <hr class="border-[#BDBDBD]" />
              </div>
            </div>
            <div class="space-y-6">
              <div class="gender space-y-2">
                <p class="roboto text-[#333333] text-base font-medium">
                  Gender
                </p>
                <p
                  v-if="!isChange"
                  class="roboto text-base text-[#616161] font-normal leading-6"
                >
                  {{ userData.gender }}
                </p>
                <select
                  v-if="isChange"
                  v-model="userData.gender"
                  id="gender"
                  class="w-full"
                >
                  <option value="FEMALE">FEMALE</option>
                  <option value="MALE">MALE</option>
                </select>
                <hr class="border-[#BDBDBD]" />
              </div>
              <div class="school-class space-y-2">
                <p class="roboto text-[#333333] text-base font-medium">Class</p>
                <p
                  class="roboto text-base text-[#616161] font-normal leading-6"
                >
                  {{ userData.schoolClass }}
                </p>
                <hr class="border-[#BDBDBD]" />
              </div>
            </div>
          </div>
        </div>
        <div class="kelas-bootcamp rounded-[10px] bg-white">
          <div class="p-6">
            <h2 class="alata text-lg text-[#333333] font-normal leading-4">
              Class
            </h2>
          </div>
          <hr class="border-[#F7F7F7]" />
          <div class="p-6 grid md:grid-cols-2 grid-cols-1 gap-7">
            <div class="space-y-6">
              <div class="class-name space-y-2">
                <p class="roboto text-[#333333] text-base font-medium">
                  Class Name
                </p>
                <p
                  class="roboto text-base text-[#616161] font-normal leading-6"
                >
                  {{ userData.schoolId.name }}
                </p>
                <hr class="border-[#BDBDBD]" />
              </div>
              <div class="foundation space-y-2">
                <p class="roboto text-[#333333] text-base font-medium">
                  Founder
                </p>
                <p
                  class="roboto text-base text-[#616161] font-normal leading-6"
                >
                  {{ userData.schoolId.foundation }}
                </p>
                <hr class="border-[#BDBDBD]" />
              </div>
            </div>
            <div class="space-y-6">
              <div class="address space-y-2">
                <p class="roboto text-[#333333] text-base font-medium">
                  Address
                </p>
                <p
                  class="roboto text-base text-[#616161] font-normal break-normal h-6 max-h-6 w-full max-w-full overflow-x-auto"
                >
                  {{ userData.schoolId.address }}
                </p>
                <hr class="border-[#BDBDBD]" />
              </div>
              <div class="leader-instructor space-y-2">
                <p class="roboto text-[#333333] text-base font-medium">
                  Lead Intructor
                </p>
                <p
                  class="roboto text-base text-[#616161] font-normal leading-6"
                >
                  {{ userData.schoolId.leadInstructor }}
                </p>
                <hr class="border-[#BDBDBD]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="application-progress md:col-span-1 box-border border rounded-lg bg-white py-3.5 px-5 space-y-3"
      >
        <h2
          class="alata text-center text-[#333333] text-lg font-normal leading-4"
        >
          Application Progress
        </h2>
        <div class="h-7">
          <p
            class="float-left roboto text-[#616161] text-base font-normal leading-6"
          >
            Total Task : 0
          </p>
          <p
            class="float-right roboto text-[#616161] text-base font-normal leading-6"
          >
            On Progress : 0
          </p>
        </div>
        <div class="border rounded-lg p-6 space-y-3">
          <!-- <div class="border rounded-lg py-2.5 px-6 space-y-3">
            <p class="roboto text-base font-medium">Back End Developer</p>
            <p class="roboto text-[#616161] text-base font-normal">
              PT Jaya Bersama
            </p>
            <p class="roboto text-[#616161] text-base font-normal">
              Applied on 14 Aug 2021
            </p>
            <p class="roboto text-[#CC6633] text-base font-medium">
              Lulus Tahap 2 (Interview)
            </p>
          </div>
          <div class="border rounded-lg py-2.5 px-6 space-y-3">
            <p class="roboto text-base font-medium">Back End Developer</p>
            <p class="roboto text-[#616161] text-base font-normal">
              PT Jaya Bersama
            </p>
            <p class="roboto text-[#616161] text-base font-normal">
              Applied on 14 Aug 2021
            </p>
            <p class="roboto text-[#CC6633] text-base font-medium">Lihat</p>
          </div>
          <div class="pagination flex justify-center gap-3">
            <div class="w-3 h-3 border rounded-full bg-[#F7931E]"></div>
            <div class="w-3 h-3 border rounded-full"></div>
            <div class="w-3 h-3 border rounded-full"></div>
          </div>
        </div>
        <div class="border rounded-lg p-6 space-y-3">
          <h4
            class="alata text-[#333333] text-[18px] font-normal leading-4 -mt-3.5"
          >
            Interview : 4
          </h4>
          <div class="border rounded-lg py-2.5 px-6 space-y-3">
            <p class="roboto text-base font-medium">Back End Developer</p>
            <p class="roboto text-[#616161] text-base font-normal">
              PT Jaya Bersama
            </p>
            <p class="roboto text-[#616161] text-base font-normal">
              Applied on 14 Aug 2021
            </p>
            <p class="roboto text-[#CC6633] text-base font-medium">Lihat</p>
          </div>
          <div class="border rounded-lg py-2.5 px-6 space-y-3">
            <p class="roboto text-base font-medium">Back End Developer</p>
            <p class="roboto text-[#616161] text-base font-normal">
              PT Jaya Bersama
            </p>
            <p class="roboto text-[#616161] text-base font-normal">
              Applied on 14 Aug 2021
            </p>
            <p class="roboto text-[#CC6633] text-base font-medium">Lihat</p>
          </div>-->
          <div class="pagination flex justify-center gap-3">
            <div class="w-3 h-3 border rounded-full bg-[#F7931E]"></div>
            <div class="w-3 h-3 border rounded-full"></div>
            <div class="w-3 h-3 border rounded-full"></div>
          </div>
        </div>
        <div class="border rounded-lg p-6 space-y-3">
          <h4
            class="alata text-[#333333] text-[18px] font-normal leading-4 -mt-3.5"
          >
            Over : 0
          </h4>
          <!-- <div class="border rounded-lg py-2.5 px-6 space-y-3">
            <p class="roboto text-base font-medium">Back End Developer</p>
            <p class="roboto text-[#616161] text-base font-normal">
              PT Jaya Bersama
            </p>
            <p class="roboto text-[#616161] text-base font-normal">
              Applied on 14 Aug 2021
            </p>
            <p class="roboto text-[#CC6633] text-base font-medium">Lihat</p>
          </div>
          <div class="border rounded-lg py-2.5 px-6 space-y-3">
            <p class="roboto text-base font-medium">Back End Developer</p>
            <p class="roboto text-[#616161] text-base font-normal">
              PT Jaya Bersama
            </p>
            <p class="roboto text-[#616161] text-base font-normal">
              Applied on 14 Aug 2021
            </p>
            <p class="roboto text-[#CC6633] text-base font-medium">Lihat</p>
          </div> -->
          <div class="pagination flex justify-center gap-3">
            <div class="w-3 h-3 border rounded-full bg-[#F7931E]"></div>
            <div class="w-3 h-3 border rounded-full"></div>
            <div class="w-3 h-3 border rounded-full"></div>
          </div>
        </div>
        <div class="border rounded-lg p-6 space-y-3">
          <h4 class="alata text-[#333333] text-[18px] font-normal leading-4">
            Favorite : 0
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createConfig, responseManager } from '~/service/api-manager';
export default {
  name: 'ProfileIdPage',
  data() {
    return {
      modalActive: false,
      userData: {
        createAt: '',
        noSiswa: '',
        firstName: '',
        lastName: '',
        email: '',
        avatarUrl: '',
        schoolClass: '',
        batch: '',
        description: '',
        gender: '',
        birthDate: '',
        favorite: '',
        viewers: 0,
        schoolId: {
          name: '',
          foundation: '',
          address: '',
          leadInstructor: '',
          backgroundProfile: ''
        }
      },
      isChange: false
    };
  },
  mounted() {
    this.getUserById();
  },
  methods: {
    onToggle() {
      this.modalActive = !this.modalActive;
    },
    async getUserById() {
      try {
        const { data: resData } = await this.$axios(
          /* eslint-disable new-cap */
          new createConfig().getData({
            url: `user/${atob(this.$route.params.id)}`
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
    change() {
      this.isChange = !this.isChange;
    },
    async saveChange() {
      this.isChange = !this.isChange;
      try {
        const { data: resData } = await this.$axios(
          new createConfig().putData({
            url: `user/${atob(this.$route.params.id)}`,
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
      } catch (error) {
        const err = new responseManager().manageError(error);
        this.$toast.show(err?.error || error.message, {
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

.alata {
  font-family: 'Alata', sans-serif;
}
.roboto {
  font-family: 'Roboto', sans-serif;
}
.montserrat {
  font-family: 'Montserrat', sans-serif;
}
.box-overview {
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
}
</style>
