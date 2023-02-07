<template>
  <div class="bg-gray-50 md:py-[7.83%] py-32">
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
            <h2 class="text-[32px] font-medium leading-[40px]">211</h2>
            <p>Jumlah Profil Dilihat</p>
          </div>
          <div class="">
            <h2 class="text-[32px] font-medium leading-[40px]">5</h2>
            <p>Lamaran Diproses</p>
          </div>
        </div>
        <div class="rounded-[10px]">
          <div class="relative">
            <div class="background-profile">
              <img
                class="rounded-t-[10px]"
                src="~assets/img/background-profile.jpg"
                alt="background-profile"
              />
            </div>
            <div class="absolute top-20 left-10 bg-white rounded-full p-0.5">
              <div
                class="relative w-fit border border-transparent rounded-full overflow-hidden"
              >
                <img
                  class="w-44 h-44 rounded-full"
                  src="~assets/img/photo-profile.png"
                  alt="photo-profile"
                />
                <div class="absolute bottom-0 w-full bg-[#CC6666E5]/90">
                  <div class="flex justify-center">
                    <button class="h-7 px-5 pb-0.5 flex items-center gap-2">
                      <p class="alata text-white text-[10px] font-normal">
                        Ganti Foto
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
          <div class="bg-white p-3 space-y-11 rounded-b-[10px]">
            <div class="flex justify-end gap-4 montserrat">
              <button
                class="py-2 px-6 rounded-lg text-sm text-white font-bold bg-[#CC6633]"
              >
                Ubah
              </button>
              <button
                class="py-2 px-6 rounded-lg text-sm text-[#F7931E] font-bold bg-[#FDE9D2]"
              >
                Download Profile
              </button>
            </div>
            <div class="px-8 py-5 roboto text-[#333333] space-y-2">
              <h2 class="username alata text-[26px] font-normal leading-[38px]">
                Camelia Cameli
              </h2>
              <p class="registered-since text-base text-[#616161] font-normal">
                Terdaftar sejak 20 Oktober 2020
              </p>
              <div class="flex gap-x-5">
                <div class="space-y-2">
                  <h5 class="text-base font-medium">Email</h5>
                  <h5 class="text-base font-medium">No Telepon</h5>
                </div>
                <div class="space-y-2">
                  <p class="text-base font-normal">camelia.c@gmail.com</p>
                  <p class="text-base font-normal">0857154412414</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="deskripsi rounded-[10px] bg-white">
          <div class="p-6">
            <h2 class="alata text-lg text-[#333333] font-normal leading-4">
              Deskripsi
            </h2>
          </div>
          <hr class="border-[#F7F7F7]" />
          <div class="p-6"></div>
        </div>
        <div class="reference-link rounded-[10px] bg-white">
          <div class="p-6">
            <h2 class="alata text-lg text-[#333333] font-normal leading-4">
              Reference Link
            </h2>
          </div>
          <hr class="border-[#F7F7F7]" />
          <div class="p-6 space-y-6 w-[50%]">
            <div class="external-link space-y-2">
              <p class="roboto text-[#616161] text-base font-normal">
                External Link
              </p>
              <p class="roboto text-base text-[#333333] font-normal leading-6">
                -
              </p>
              <hr class="border-[#BDBDBD]" />
            </div>
            <div class="linkedin-profile space-y-2">
              <p class="roboto text-[#616161] text-base font-normal">
                Linkedin Profile
              </p>
              <p class="roboto text-base text-[#333333] font-normal leading-6">
                -
              </p>
              <hr class="border-[#BDBDBD]" />
            </div>
          </div>
        </div>
        <div class="kelas-g2academy rounded-[10px] bg-white">
          <div class="p-6">
            <h2 class="alata text-lg text-[#333333] font-normal leading-4">
              Kelas G2Academy
            </h2>
          </div>
          <hr class="border-[#F7F7F7]" />
          <div class="p-6">
            <p class="roboto text-base text-[#333333] font-medium leading-6">
              -
            </p>
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
            Total Application : 40
          </p>
          <p
            class="float-right roboto text-[#616161] text-base font-normal leading-6"
          >
            On Progress : 12
          </p>
        </div>
        <div class="border rounded-lg p-6 space-y-3">
          <div class="border rounded-lg py-2.5 px-6 space-y-3">
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
            Offer : 2
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
          </div>
          <div class="pagination flex justify-center gap-3">
            <div class="w-3 h-3 border rounded-full bg-[#F7931E]"></div>
            <div class="w-3 h-3 border rounded-full"></div>
            <div class="w-3 h-3 border rounded-full"></div>
          </div>
        </div>
        <div class="border rounded-lg p-6 space-y-3">
          <h4 class="alata text-[#333333] text-[18px] font-normal leading-4">
            Hire : 0
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfilePage'
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
