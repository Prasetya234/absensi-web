<template>
  <div class="bg-[#FFFFFF] absolute w-full">
    <div class="mx-[5%] flex justify-between">
      <div class="app-name flex items-center">
        <p
          class="text-[#F7931E] text-[30px] leading-[41px] font-extrabold uppercase nunito"
        >
          Absensi
        </p>
      </div>
      <div class="nav-item">
        <ul class="flex justify-center items-center gap-[16px]">
          <li
            class="flex flex-col items-center py-2 w-[80px] space-y-2 text-[#CC6633] fill-[#CC6633] cursor-pointer hover:text-[#CC6633] hover:fill-[#CC6633] border-b-2 border-b-[#CC6633]"
          >
            <span>
              <HomeIcon />
            </span>
            <span class="text-inherit text-[14px] leading-[20px] roboto">Home</span>
          </li>
          <li
            class="flex flex-col items-center py-2 w-[80px] space-y-2 text-[#828282] fill-[#828282] cursor-pointer hover:text-[#CC6633] hover:fill-[#CC6633]"
          >
            <span>
              <NotificationIcon />
            </span>
            <span class="text-inherit text-[14px] font-[400] leading-[20px] roboto"
              >Notification</span
            >
          </li>
          <li
            class="flex flex-col items-center py-2 w-[80px] space-y-2 text-[#828282] fill-[#828282] cursor-pointer hover:text-[#CC6633] hover:fill-[#CC6633]"
          >
            <span>
              <ProfileIcon />
            </span>
            <span class="text-inherit text-[14px] font-[400] leading-[20px] roboto"
              >Profil</span
            >
          </li>
          <li
            class="flex flex-col items-center py-2 w-[80px] space-y-2 text-[#828282] fill-[#828282] cursor-pointer hover:text-[#CC6633] hover:fill-[#CC6633]"
          >
            <span class="relative">
              <TimetableIcon />
            </span>
            <span class="text-inherit text-[14px] font-[400] leading-[20px] roboto"
              >Timetable</span
            >
          </li>
          <li
            class="flex flex-col items-center py-2 w-[80px] space-y-2 text-[#828282] fill-[#828282] cursor-pointer hover:text-[#CC6633] hover:fill-[#CC6633] group"
          >
            <span class="flex items-center">
              <OtherIcon />
            </span>
            <span class="text-inherit text-[14px] font-[400] leading-[20px] roboto"
              >Others</span
            >
            <div
              class="hidden group-hover:block absolute top-[90%] right-2 w-[18%]"
            >
              <span class="z-10 p-5 block space-y-3 bg-white menu">
                <button class="w-full">
                  <p class="text-[#828282] text-left text-base hover:text-[#CC6633] leading-[22px] montserrat">
                    Log Out
                  </p>
                </button>
                <button class="w-full">
                  <p class="text-[#828282] text-left text-base hover:text-[#CC6633] leading-[22px] montserrat">
                    Ganti ke Tampilan Talent
                  </p>
                </button>
              </span>
              <div
                class="w-3 h-3 bg-white rotate-[135deg] relative -top-[6.45rem] left-[57%] arrow"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import HomeIcon from "@/assets/icons/home.vue"
import NotificationIcon from "@/assets/icons/notification.vue"
import ProfileIcon from "@/assets/icons/profile.vue"
import TimetableIcon from "@/assets/icons/timetable.vue"
import OtherIcon from "@/assets/icons/other.vue"
export default {
  name: 'NavbarComponent',
  components: {
    HomeIcon,
    NotificationIcon,
    ProfileIcon,
    TimetableIcon,
    OtherIcon,
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');

.nunito {
  font-family: 'Nunito', sans-serif;
}
.roboto {
  font-family: 'Roboto', sans-serif;
}
.montserrat {
  font-family: 'Montserrat', sans-serif;
}
.menu {
  box-shadow: 0px 0.5px 2px 2px #bebebe;
}
.arrow {
  box-shadow: -2px 2px 2px -1px #bebebe;
}
</style>
