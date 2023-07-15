(window.webpackJsonp=window.webpackJsonp||[]).push([[44,7],{518:function(t,e,r){"use strict";r.r(e);var l={name:"ArrowIcon",props:{direction:{type:String,default:"left"},size:{type:String,default:"22"}},methods:{rotate:function(t){return"left"==t?"rotate(0deg)":"right"==t?"rotate(180deg)":"up"==t?"rotate(90deg)":"down"==t?"rotate(270deg)":void 0}}},o=r(34),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:t.size,height:t.size,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.25 20L1.25 11L10.25 2M2.5 11H20.75",stroke:"#333333","stroke-width":"2.25","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},542:function(t,e,r){var content=r(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(98).default)("545ccced",content,!0,{sourceMap:!1})},580:function(t,e,r){"use strict";r(542)},581:function(t,e,r){var l=r(97)((function(i){return i[1]}));l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap);"]),l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]),l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Alata&display=swap);"]),l.push([t.i,'.nunito{font-family:"Nunito",sans-serif}.poppins{font-family:"Poppins",sans-serif}.alata{font-family:"Alata",sans-serif}',""]),l.locals={},t.exports=l},632:function(t,e,r){"use strict";r.r(e);r(38),r(27),r(54);var l=r(11),o=(r(48),r(159)),n={name:"InfoStudent",data:function(){return{userData:{createAt:"",avatarUrl:"",firstName:"",lastName:"",birthDate:"",email:"",gender:"",noSiswa:"",batch:"",favorite:"",schoolClass:"",schoolId:{name:""},description:""}}},mounted:function(){this.fetchUser()},methods:{fetchUser:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios((new o.a).getData({url:"user/".concat(atob(t.$route.query.idUser))}));case 3:r=e.sent,l=r.data,t.userData=l.data,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n=(new o.b).manageError(e.t0),t.$toast.show((null==n?void 0:n.error)||n.message,{position:"top-center",type:"error",duration:5e3,theme:"bubble",singleton:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},c=(r(580),r(34)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col gap-5"},[e("div",{staticClass:"flex justify-start gap-5"},[e("button",{staticClass:"h-fit w-fit p-2.5 rounded-full duration-300 hover:bg-gray-200 over:duration-300",on:{click:function(e){return t.$router.go(-1)}}},[e("IconsArrow",{attrs:{size:"20"}})],1),t._v(" "),e("h2",{staticClass:"text-2xl md:text-3xl font-bold"},[t._v(t._s(t.userData.firstName)+"'s Info")])]),t._v(" "),e("div",{staticClass:"bg-white rounded-md shadow-md selection:bg-[#CC6633] selection:text-white"},[e("div",{staticClass:"flex flex-row gap-5"},[e("div",{staticClass:"avatar-url flex flex-col gap-3 justify-center items-center shadow-md rounded-l-md bg-black/10 p-3 w-5/12"},[e("div",{staticClass:"bg-white h-64 w-64 p-1 rounded-full"},[e("img",{staticClass:"rounded-full",attrs:{src:t.userData.avatarUrl,alt:"user-photo"}})]),t._v(" "),e("div",{staticClass:"flex flex-col gap-1 text-center"},[e("h3",{staticClass:"text-lg font-semibold nunito"},[t._v("\n            "+t._s(t.userData.firstName)+" "+t._s(t.userData.lastName)+"\n          ")]),t._v(" "),e("p",{staticClass:"text-sm poppins"},[t._v(t._s(t.userData.createAt))])])]),t._v(" "),e("div",{staticClass:"flex flex-col gap-2 w-full p-5"},[e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"firstname-property nunito w-1/4"},[t._v("Firstname")]),t._v(" "),e("span",{staticClass:"firstname-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"firstname-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.firstName)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"lastname-property nunito w-1/4"},[t._v("Lastname")]),t._v(" "),e("span",{staticClass:"lastname-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"lastname-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.lastName)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"gender-property nunito w-1/4"},[t._v("Gender")]),t._v(" "),e("span",{staticClass:"gender-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"gender-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.gender)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"birthdate-property nunito w-1/4"},[t._v("Date Of Birth")]),t._v(" "),e("span",{staticClass:"birthdate-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"birthdate-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.birthDate)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"email-property nunito w-1/4"},[t._v("Email")]),t._v(" "),e("span",{staticClass:"email-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"email-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.email)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"studentid-property nunito w-1/4"},[t._v("Student ID")]),t._v(" "),e("span",{staticClass:"studentid-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"studentid-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.noSiswa)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"batch-property nunito w-1/4"},[t._v("Batch")]),t._v(" "),e("span",{staticClass:"batch-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"batch-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.batch)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"favorite-property nunito w-1/4"},[t._v("Favorite")]),t._v(" "),e("span",{staticClass:"favorite-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"favorite-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.favorite)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"schoolclass-property nunito w-1/4"},[t._v("School Class")]),t._v(" "),e("span",{staticClass:"schoolclass-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"schoolclass-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.schoolClass)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"schoolid-property nunito w-1/4"},[t._v("School ID")]),t._v(" "),e("span",{staticClass:"schoolid-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"schoolid-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.schoolId.name)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-2"},[e("div",{staticClass:"description-property nunito w-1/4"},[t._v("Description")]),t._v(" "),e("span",{staticClass:"description-separated w-fit"},[t._v(":")]),t._v(" "),e("div",{staticClass:"description-value poppins w-full border-b"},[t._v("\n            "+t._s(t.userData.description)+"\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconsArrow:r(518).default})}}]);