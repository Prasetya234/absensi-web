<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-start">
      <h2 class="text-3xl font-bold">Add School</h2>
    </div>
    <div
      class="bg-white p-3 rounded-md shadow-md selection:bg-[#CC6633] selection:text-white"
    >
      <form
        class="bg-white rounded-md p-2 flex flex-col gap-5"
        @submit="createSchool"
      >
        <div class="flex flex-row gap-10 items-center">
          <div class="left-side flex flex-col gap-5 w-full">
            <div
              class="school-data w-[50%] border-b-[3px] border-b-[#CC6633] mb-3 py-2"
            >
              <h3 class="text-xl font-semibold">School Data</h3>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex flex-row justify-between gap-4">
                <div class="school-name flex flex-col gap-1 w-full">
                  <label class="text-sm font-semibold" for="school-name"
                    >School Name</label
                  >
                  <input
                    v-model="form.name"
                    id="school-name"
                    type="text"
                    class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                    autocomplete="off"
                    placeholder="School Name"
                  />
                </div>
                <div class="foundation flex flex-col gap-1 w-full">
                  <label class="text-sm font-semibold" for="foundation"
                    >Foundation</label
                  >
                  <input
                    v-model="form.foundation"
                    id="foundation"
                    type="text"
                    class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                    autocomplete="off"
                    placeholder="Foundation"
                  />
                </div>
              </div>
              <div class="flex flex-row justify-between gap-4 w-full">
                <div class="address w-full flex flex-col gap-1">
                  <label class="text-sm font-semibold" for="address"
                    >Address</label
                  >
                  <input
                    v-model="form.address"
                    id="address"
                    type="text"
                    class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                    autocomplete="off"
                    placeholder="Address"
                  />
                </div>
                <div class="number-phone w-full flex flex-col gap-1">
                  <label class="text-sm font-semibold" for="number-phone"
                    >Number Phone</label
                  >
                  <input
                    v-model="form.numberPhone"
                    id="number-phone"
                    type="text"
                    class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                    autocomplete="off"
                    placeholder="Number Phone"
                  />
                </div>
              </div>
              <div class="lead-instructor w-full flex flex-col">
                <label class="text-sm font-semibold" for="lead-instructor"
                  >Lead Instructor Name</label
                >
                <input
                  v-model="form.leadInstructor"
                  id="lead-instructor"
                  type="text"
                  class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                  autocomplete="off"
                  placeholder="Lead Instructor Name"
                />
              </div>
            </div>
          </div>
          <div class="right-side flex flex-col gap-5 w-full">
            <div
              class="operational-class w-[50%] border-b-[3px] border-b-[#CC6633] mb-3 py-2"
            >
              <h3 class="text-xl font-semibold">Operational Class</h3>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex flex-row justify-between gap-4 w-full">
                <div class="entry-time w-full flex flex-col gap-1">
                  <label class="text-sm font-semibold" for="entry-time"
                    >Entry Time</label
                  >
                  <input
                    v-model="form.operationalClass.entryTime"
                    id="entry-time"
                    type="text"
                    class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                    autocomplete="off"
                    placeholder="Entry Time"
                  />
                </div>
                <div class="dismissal-time w-full flex flex-col gap-1">
                  <label class="text-sm font-semibold" for="dismissal-time"
                    >Dismissal Time</label
                  >
                  <input
                    v-model="form.operationalClass.dismissalTime"
                    id="dismissal-time"
                    type="text"
                    class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                    autocomplete="off"
                    placeholder="Dismissal Time"
                  />
                </div>
              </div>
              <div class="flex flex-row justify-between gap-4">
                <div class="admission-day w-full flex flex-col gap-1">
                  <label class="text-sm font-semibold" for="admission-day"
                    >Admission Day</label
                  >
                  <input
                    v-model="form.operationalClass.admissionDay"
                    id="admission-day"
                    type="number"
                    class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
                    autocomplete="off"
                    placeholder="Admission Day"
                  />
                </div>
                <div class="duration-learn flex flex-col gap-1 w-full">
                  <label class="text-sm font-semibold" for="duration-learn"
                    >Duration Learn</label
                  >
                  <input
                    v-model="form.operationalClass.durationLearn"
                    id="duration-learn"
                    type="number"
                    class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633] [&::-webkit-inner-spin-button]:appearance-none"
                    autocomplete="off"
                    placeholder="Duration Learn"
                  />
                </div>
              </div>
              <div class="mark-by flex flex-col w-full">
                <label class="text-sm font-semibold" for="mark-by"
                  >Mark By</label
                >
                <input
                  v-model="form.operationalClass.markBy"
                  id="mark-by"
                  type="text"
                  class="w-full border-2 px-2 py-1.5 text-[#CC6633] text-sm border-gray-300 rounded-md focus:outline-none focus:border-[#CC6633] focus:shadow-sm focus:shadow-[#CC6633]"
                  autocomplete="off"
                  placeholder="Mark By"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row justify-end my-5">
          <button
            @click="createSchool"
            class="w-[30%] text-white py-2.5 rounded-md uppercase bg-[#CC6633]"
            type="submit"
          >
            Create
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
  name: 'AddSchool',
  data: () => ({
    form: {
      avatarUrl: '',
      backgroundProfile: '',
      name: '',
      address: '',
      foundation: '',
      numberPhone: '',
      leadInstructor: '',
      totalStudent: 0,
      operationalClass: {
        admissionDay: '',
        dismissalTime: '',
        durationLearn: '',
        entryTime: '',
        markBy: ''
      }
    }
  }),
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    async createSchool(e) {
      e.preventDefault();
      this.showLoading();
      try {
        const { data: res } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().postData({
            url: 'school',
            data: {
              avatarUrl: this.form.avatarUrl,
              backgroundProfile: this.form.backgroundProfile,
              name: this.form.name,
              address: this.form.address,
              foundation: this.form.foundation,
              numberPhone: this.form.numberPhone,
              leadInstructor: this.form.leadInstructor,
              totalStudent: this.form.totalStudent,
              operationalClass: {
                admissionDay: this.form.operationalClass.admissionDay,
                dismissalTime: this.form.operationalClass.dismissalTime,
                durationLearn: this.form.operationalClass.durationLearn,
                entryTime: this.form.operationalClass.entryTime,
                markBy: this.form.operationalClass.markBy
              }
            }
          })
        );
        this.form = res.data;
        this.$router.go(-1);
        this.$toast.show(`Successfully create School ${res.data.name}`, {
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
