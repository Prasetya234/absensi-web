(window.webpackJsonp=window.webpackJsonp||[]).push([[52,7],{380:function(e,t,n){"use strict";n.r(t);n(375);var r={name:"CloseIcon",props:{size:{type:Number,default:22}}},o=n(34),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("svg",{staticStyle:{cursor:"pointer"},attrs:{width:e.size,height:e.size,"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);t.default=component.exports},381:function(e,t,n){"use strict";n.r(t);var r=n(380),o={name:"ModalComponent",props:{onclose:{type:Function,required:!1,default:function(){}},iconClose:{type:Boolean,required:!1,default:!0},width:{type:String,required:!1,default:"600px"}},components:{Close:r.default}},c=n(34),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"fixed top-0 left-0 flex font-isi items-center h-screen justify-center right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto lg:inset-0 h-modal lg:h-full",staticStyle:{background:"rgba(0, 0, 0, 0.5)"},attrs:{id:"authentication-modal"},on:{click:function(t){return t.target!==t.currentTarget?null:e.onclose.apply(null,arguments)}}},[t("div",{staticClass:"relative w-full h-full lg:h-auto",style:"max-width: ".concat(e.width)},[t("div",{staticClass:"relative rounded-lg shadow bg-white"},[e.iconClose?t("button",{staticClass:"absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",attrs:{type:"button"},on:{click:e.onclose}},[t("Close",{attrs:{size:24}}),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Close modal")])],1):e._e(),e._v(" "),t("div",{staticClass:"py-6 px-8"},[e._t("default")],2)])])])}),[],!1,null,null,null);t.default=component.exports},518:function(e,t,n){"use strict";n.r(t);var r={name:"ArrowIcon",props:{direction:{type:String,default:"left"},size:{type:String,default:"22"}},methods:{rotate:function(e){return"left"==e?"rotate(0deg)":"right"==e?"rotate(180deg)":"up"==e?"rotate(90deg)":"down"==e?"rotate(270deg)":void 0}}},o=n(34),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("svg",{attrs:{width:e.size,height:e.size,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M10.25 20L1.25 11L10.25 2M2.5 11H20.75",stroke:"#333333","stroke-width":"2.25","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);t.default=component.exports},523:function(e,t,n){var map={"./af":382,"./af.js":382,"./ar":383,"./ar-dz":384,"./ar-dz.js":384,"./ar-kw":385,"./ar-kw.js":385,"./ar-ly":386,"./ar-ly.js":386,"./ar-ma":387,"./ar-ma.js":387,"./ar-sa":388,"./ar-sa.js":388,"./ar-tn":389,"./ar-tn.js":389,"./ar.js":383,"./az":390,"./az.js":390,"./be":391,"./be.js":391,"./bg":392,"./bg.js":392,"./bm":393,"./bm.js":393,"./bn":394,"./bn-bd":395,"./bn-bd.js":395,"./bn.js":394,"./bo":396,"./bo.js":396,"./br":397,"./br.js":397,"./bs":398,"./bs.js":398,"./ca":399,"./ca.js":399,"./cs":400,"./cs.js":400,"./cv":401,"./cv.js":401,"./cy":402,"./cy.js":402,"./da":403,"./da.js":403,"./de":404,"./de-at":405,"./de-at.js":405,"./de-ch":406,"./de-ch.js":406,"./de.js":404,"./dv":407,"./dv.js":407,"./el":408,"./el.js":408,"./en-au":409,"./en-au.js":409,"./en-ca":410,"./en-ca.js":410,"./en-gb":411,"./en-gb.js":411,"./en-ie":412,"./en-ie.js":412,"./en-il":413,"./en-il.js":413,"./en-in":414,"./en-in.js":414,"./en-nz":415,"./en-nz.js":415,"./en-sg":416,"./en-sg.js":416,"./eo":417,"./eo.js":417,"./es":418,"./es-do":419,"./es-do.js":419,"./es-mx":420,"./es-mx.js":420,"./es-us":421,"./es-us.js":421,"./es.js":418,"./et":422,"./et.js":422,"./eu":423,"./eu.js":423,"./fa":424,"./fa.js":424,"./fi":425,"./fi.js":425,"./fil":426,"./fil.js":426,"./fo":427,"./fo.js":427,"./fr":428,"./fr-ca":429,"./fr-ca.js":429,"./fr-ch":430,"./fr-ch.js":430,"./fr.js":428,"./fy":431,"./fy.js":431,"./ga":432,"./ga.js":432,"./gd":433,"./gd.js":433,"./gl":434,"./gl.js":434,"./gom-deva":435,"./gom-deva.js":435,"./gom-latn":436,"./gom-latn.js":436,"./gu":437,"./gu.js":437,"./he":438,"./he.js":438,"./hi":439,"./hi.js":439,"./hr":440,"./hr.js":440,"./hu":441,"./hu.js":441,"./hy-am":442,"./hy-am.js":442,"./id":443,"./id.js":443,"./is":444,"./is.js":444,"./it":445,"./it-ch":446,"./it-ch.js":446,"./it.js":445,"./ja":447,"./ja.js":447,"./jv":448,"./jv.js":448,"./ka":449,"./ka.js":449,"./kk":450,"./kk.js":450,"./km":451,"./km.js":451,"./kn":452,"./kn.js":452,"./ko":453,"./ko.js":453,"./ku":454,"./ku.js":454,"./ky":455,"./ky.js":455,"./lb":456,"./lb.js":456,"./lo":457,"./lo.js":457,"./lt":458,"./lt.js":458,"./lv":459,"./lv.js":459,"./me":460,"./me.js":460,"./mi":461,"./mi.js":461,"./mk":462,"./mk.js":462,"./ml":463,"./ml.js":463,"./mn":464,"./mn.js":464,"./mr":465,"./mr.js":465,"./ms":466,"./ms-my":467,"./ms-my.js":467,"./ms.js":466,"./mt":468,"./mt.js":468,"./my":469,"./my.js":469,"./nb":470,"./nb.js":470,"./ne":471,"./ne.js":471,"./nl":472,"./nl-be":473,"./nl-be.js":473,"./nl.js":472,"./nn":474,"./nn.js":474,"./oc-lnc":475,"./oc-lnc.js":475,"./pa-in":476,"./pa-in.js":476,"./pl":477,"./pl.js":477,"./pt":478,"./pt-br":479,"./pt-br.js":479,"./pt.js":478,"./ro":480,"./ro.js":480,"./ru":481,"./ru.js":481,"./sd":482,"./sd.js":482,"./se":483,"./se.js":483,"./si":484,"./si.js":484,"./sk":485,"./sk.js":485,"./sl":486,"./sl.js":486,"./sq":487,"./sq.js":487,"./sr":488,"./sr-cyrl":489,"./sr-cyrl.js":489,"./sr.js":488,"./ss":490,"./ss.js":490,"./sv":491,"./sv.js":491,"./sw":492,"./sw.js":492,"./ta":493,"./ta.js":493,"./te":494,"./te.js":494,"./tet":495,"./tet.js":495,"./tg":496,"./tg.js":496,"./th":497,"./th.js":497,"./tk":498,"./tk.js":498,"./tl-ph":499,"./tl-ph.js":499,"./tlh":500,"./tlh.js":500,"./tr":501,"./tr.js":501,"./tzl":502,"./tzl.js":502,"./tzm":503,"./tzm-latn":504,"./tzm-latn.js":504,"./tzm.js":503,"./ug-cn":505,"./ug-cn.js":505,"./uk":506,"./uk.js":506,"./ur":507,"./ur.js":507,"./uz":508,"./uz-latn":509,"./uz-latn.js":509,"./uz.js":508,"./vi":510,"./vi.js":510,"./x-pseudo":511,"./x-pseudo.js":511,"./yo":512,"./yo.js":512,"./zh-cn":513,"./zh-cn.js":513,"./zh-hk":514,"./zh-hk.js":514,"./zh-mo":515,"./zh-mo.js":515,"./zh-tw":516,"./zh-tw.js":516};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=523},547:function(e,t){},548:function(e,t){},549:function(e,t){},554:function(e,t,n){var content=n(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(98).default)("45d7d3a6",content,!0,{sourceMap:!1})},607:function(e,t,n){"use strict";n(554)},608:function(e,t,n){var r=n(97)((function(i){return i[1]}));r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Nunito&display=swap);"]),r.push([e.i,'.nunito[data-v-ef6616c8]{font-family:"Nunito",sans-serif}.bubbly-button[data-v-ef6616c8]{display:inline-block;font-size:1em;padding:1em 2em;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#c63;color:#fff;border-radius:4px;border:none;cursor:pointer;position:relative;transition:transform .1s ease-in,box-shadow .25s ease-in;box-shadow:0 2px 25px #c63}.bubbly-button[data-v-ef6616c8]:focus{outline:0}.bubbly-button[data-v-ef6616c8]:after,.bubbly-button[data-v-ef6616c8]:before{position:absolute;content:"";display:block;width:140%;height:100%;left:-20%;z-index:-1000;transition:all .5s ease-in-out;background-repeat:no-repeat}.bubbly-button[data-v-ef6616c8]:before{display:none;top:-75%;background-image:radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,transparent 20%,#c63 0,transparent 30%),radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,transparent 10%,#c63 15%,transparent 20%),radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,#c63 20%,transparent 0);background-size:10% 10%,20% 20%,15% 15%,20% 20%,18% 18%,10% 10%,15% 15%,10% 10%,18% 18%}.bubbly-button[data-v-ef6616c8]:after{display:none;bottom:-75%;background-image:radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,transparent 10%,#c63 15%,transparent 20%),radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,#c63 20%,transparent 0),radial-gradient(circle,#c63 20%,transparent 0);background-size:15% 15%,20% 20%,18% 18%,20% 20%,15% 15%,10% 10%,20% 20%}.bubbly-button[data-v-ef6616c8]:active{transform:scale(.9);background-color:darken(#c63,5%);box-shadow:0 2px 25px rgba(255,0,130,.2)}.animate[data-v-ef6616c8]:before{display:block;animation:topBubbles-ef6616c8 2s ease-in-out forwards}.animate[data-v-ef6616c8]:after{display:block;animation:bottomBubbles-ef6616c8 2s ease-in-out forwards}@keyframes topBubbles-ef6616c8{0%{background-position:5% 90%,10% 90%,10% 90%,15% 90%,25% 90%,25% 90%,40% 90%,55% 90%,70% 90%}50%{background-position:0 80%,0 20%,10% 40%,20% 0,30% 30%,22% 50%,50% 50%,65% 20%,90% 30%}to{background-position:0 70%,0 10%,10% 30%,20% -10%,30% 20%,22% 40%,50% 40%,65% 10%,90% 20%;background-size:0 0,0 0,0 0,0 0,0 0,0 0}}@keyframes bottomBubbles-ef6616c8{0%{background-position:10% -10%,30% 10%,55% -10%,70% -10%,85% -10%,70% -10%,70% 0}50%{background-position:0 80%,20% 80%,45% 60%,60% 100%,75% 70%,95% 60%,105% 0}to{background-position:0 90%,20% 90%,45% 70%,60% 110%,75% 80%,95% 70%,110% 10%;background-size:0 0,0 0,0 0,0 0,0 0,0 0}}',""]),r.locals={},e.exports=r},640:function(e,t,n){"use strict";n.r(t);n(37),n(27),n(35),n(46),n(25),n(47);var r=n(11),o=n(18),c=(n(48),n(12),n(40),n(41),n(77),n(161),n(546),n(375),n(78),n(103),n(104),n(28)),l=n(560),d=n(373),f=n.n(d),h=n(159);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={name:"Absen",data:function(){return{modalActive:!1,isNotNotDetected:!1,readyAbasen:!1,isProcess:!0,isSchoolDay:!1,weekDays:[],today:"",detectorScores:[],absenceModel:{dateSubmit:"",faceNumber:"",isLate:!1,latitude:"",longitude:""},operationalClass:{entryTime:"",durationLearn:0,dismissalTime:""},custom:{videoHeight:400,videoWidth:550},absenLimit:"",timeNow:""}},computed:v({},Object(c.c)("auth",["getUsername","getUserId"])),methods:v(v({},Object(c.b)("loading",["showLoading","hideLoading"])),{},{loadModuls:function(){var e=this,t=window.location.origin+"/models";Promise.all([l.g.tinyFaceDetector.loadFromUri(t),l.g.faceLandmark68Net.loadFromUri(t),l.g.faceRecognitionNet.loadFromUri(t),l.g.faceExpressionNet.loadFromUri(t),l.g.ssdMobilenetv1.loadFromUri(t)]).then(this.startVideo()),setTimeout((function(){e.checkingCameraAccess()}),500)},closeModalAlert:function(){this.modalActive=!1,this.$router.push("/"),setTimeout((function(){window.location.reload()}),2e3)},startVideo:function(){var e=this;navigator.getUserMedia({video:{}},(function(t){return e.$refs.videoref.srcObject=t}),(function(e){return e}))},getToastError:function(){this.errorMessage("Please allow camera access")},checkingCameraAccess:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),e.getToastError(),e.$router.push("/");case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))()},handleVideoOnPlay:function(){var e=this,t=0,n={width:this.custom.videoWidth,height:this.custom.videoHeight};setInterval(Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcess=!1,e.$refs.canvasref.innerHTML=l.b(e.$refs.videoref),l.f(e.$refs.canvasref,n),r.next=6,l.d(e.$refs.videoref,new l.a).withFaceLandmarks().withFaceExpressions();case 6:o=r.sent,c=l.h(o,n),e.$refs.canvasref.getContext("2d").clearRect(0,0,e.custom.videoWidth,e.custom.videoHeight),l.e.drawDetections(e.$refs.canvasref,c),l.e.drawFaceLandmarks(e.$refs.canvasref,c),(d=null==c?void 0:c.detection.box)&&new l.e.DrawBox(d,{label:e.onCheckFace(c)}).draw(e.$refs.canvasref),++t>=54&&(e.modalActive=!0),e.otherCondition(!0),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(0),e.otherCondition(!1);case 21:case"end":return r.stop()}}),r,null,[[0,18]])}))),1200)},onCheckFace:function(e){var t=this.detectorScores.find((function(t){return t===e.detection._score.toFixed(2)}));return t?(this.fetchAbsenceNow(t),this.getUsername):"Unknown"},otherCondition:function(e){this.isNotNotDetected=!e},onReadyAbsen:function(e){e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700),this.readyAbasen=!0,this.loadModuls()},isLate:function(){return(new Date).getHours()>Number(this.operationalClass.entryTime)},getLocation:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e.absenceModel.latitude=t.coords.latitude,e.absenceModel.longitude=t.coords.longitude}),(function(){e.$router.push("/"),e.errorMessage("Location Blocked")})):(this.$router.push("/"),this.errorMessage("Geolocation is not supported by this browser"))},fetchOperationalClass:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data,r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios((new h.a).getData({url:"operational-class"}));case 3:for(n=t.sent,data=n.data,e.operationalClass=data.data,r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],e.today=r,o=new Date(Date.UTC(1,0,0)),i=0;i<e.operationalClass.admissionDay;i++)e.weekDays.push(o.toLocaleDateString("en-us",{weekday:"long"})),o.setDate(o.getDate()+1);return e.weekDays.includes(e.today)?e.isSchoolDay=!0:e.isSchoolDay=!1,t.abrupt("return",e.weekDays);case 15:t.prev=15,t.t0=t.catch(0);case 17:case"end":return t.stop()}}),t,null,[[0,15]])})))()},fetchFace:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios((new h.a).getData({url:"face-user/"+e.getUserId}));case 3:n=t.sent,data=n.data,e.detectorScores=data.data.detectorScores,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchAbsenceNow:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.absenceModel.faceNumber=e.toString(),t.absenceModel.dateSubmit=(new Date).toISOString().split("T")[0],t.absenceModel.isLate=t.isLate(),t.showLoading(),n.prev=4,n.next=7,t.$axios((new h.a).postData({url:"presensi/absen-now",data:t.absenceModel}));case 7:t.$router.push("/"),t.$toasted.show("Absence Success",{position:"top-center",type:"success",duration:5e3,theme:"bubble",singleton:!0}),setTimeout((function(){window.location.reload()}),2e3),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(4),r=(new h.b).manageError(t.errorMessage),t.errorMessage((null==r?void 0:r.error)||r.message);case 16:return n.prev=16,t.hideLoading(),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[4,12,16,19]])})))()},fetchConditionalAbsence:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios((new h.a).getData({url:"presensi/check"}));case 3:if(n=t.sent,!(r=n.data).data.absen){t.next=9;break}return e.$router.push("/"),e.errorMessage("You've been absent"),t.abrupt("return");case 9:if(r.data.face){t.next=13;break}return e.$router.push("/"),e.errorMessage("Advance data not found"),t.abrupt("return");case 13:e.getLocation(),t.next=18;break;case 16:t.prev=16,t.t0=t.catch(0);case 18:case"end":return t.stop()}}),t,null,[[0,16]])})))()},momentFormat:function(time){return f()(time,"HH").format("HH:mm")},fetchLimitAbsen:function(){var e=f()(this.operationalClass.entryTime,"HH").add(30,"minutes").format("HH:mm");this.absenLimit=e},fetchTimeNow:function(){var time=f()((new Date).getTime()).format("HH:mm");this.timeNow=time},checkAccess:function(){this.isSchoolDay||(this.$router.push("/"),this.errorMessage("It's Holiday")),this.timeNow>this.absenLimit&&(this.$router.push("/"),this.errorMessage("Access Closed"))},errorMessage:function(e){this.$toasted.show(e,{position:"top-center",type:"error",duration:5e3,theme:"bubble",singleton:!0})}}),mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$emit("no-nav"),e.showLoading(),t.next=4,e.fetchConditionalAbsence();case 4:return t.next=6,e.fetchOperationalClass();case 6:return t.next=8,e.fetchFace();case 8:e.hideLoading(),e.fetchTimeNow(),e.fetchLimitAbsen(),e.checkAccess();case 12:case"end":return t.stop()}}),t)})))()}},w=(n(607),n(34)),component=Object(w.a)(j,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pt-20 flex justify-center relative bg-gray-200 relative",staticStyle:{"min-height":"100vh"}},[e.modalActive?t("modal",{attrs:{onclose:e.closeModalAlert}},[t("h3",{staticClass:"mb-4 text-2xl font-bold"},[e._v("Alert")]),e._v(" "),t("p",{staticClass:"text-lg"},[e._v("\n      Sistem gagal mendeteksi wajah anda saat absen. Laporan ini akan di\n      kirmkan ke intruktur kamu dan akan di tindak lanjuti.\n    ")]),e._v(" "),t("p",[e._v("Have a great day!")])]):e._e(),e._v(" "),t("div",{staticClass:"absolute top-5 left-5 flex gap-3 items-center cursor-pointer",on:{click:function(t){return e.$router.go(-1)}}},[t("icons-arrow",{staticClass:"rounded-full p-1.5 transition duration-300 hover:bg-gray-300 hover:transition hover:duration-300",attrs:{size:"28"}}),e._v(" "),t("span",{staticClass:"font-bold text-2xl text-center nunito"},[e._v("Daily Absen")])],1),e._v(" "),t("div",{staticClass:"bg-white rounded-md",staticStyle:{"max-width":"800px",width:"100%","max-height":"550px"}},[t("div",{staticClass:"p-3 rounded-md border-[6px] border-dashed border-gray-200 w-full h-full"},[t("div",{staticClass:"flex justify-center flex-wrap w-full h-[90%]"},[t("div",{staticClass:"w-full text-center p-4 text-base text-gray-400 nunito"},[e._v("\n          I declare that I am an absent and ready to take responsibility for\n          what I do\n        ")]),e._v(" "),e.readyAbasen?t("div",{staticClass:"relative w-100"},[e.isNotNotDetected?t("span",{staticClass:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-400 text-xl font-bold z-20"},[e._v("Face not detected!")]):e._e(),e._v(" "),t("canvas",{ref:"canvasref",staticClass:"absolute z-10"}),e._v(" "),t("video",{ref:"videoref",class:e.isNotNotDetected?"opacity-50":"",attrs:{autoplay:"",muted:"",height:e.custom.videoHeight,width:e.custom.videoWidth},domProps:{muted:!0},on:{play:e.handleVideoOnPlay}})]):t("div",{staticClass:"w-100"},[t("button",{staticClass:"bubbly-button nunito",attrs:{type:"button"},on:{click:e.onReadyAbsen}},[e._v("\n            Click for start scan\n          ")])]),e._v(" "),e.readyAbasen?t("div",{staticClass:"w-full text-center p-4 text-md font-bold"},[e.isProcess?t("span",{staticClass:"text-red-400"},[e._v("Processing...")]):e._e(),e._v(" "),e.isNotNotDetected||e.isProcess?e._e():t("span",{staticClass:"text-green-400"},[e._v("In process of scanning. "),t("b",[e._v("Please wait")])]),e._v(" "),e.isNotNotDetected?t("span",{staticClass:"block text-center text-sm text-gray-500"},[e._v("Position your face to the camera")]):e._e()]):e._e()]),e._v(" "),t("div",{staticClass:"w-2/4 absolute bottom-5 text-xl"},[t("div",{staticClass:"nunito font-[500] flex justify-between"},[t("p",{staticClass:"text-green-400 font-bold"},[e._v("\n            Class Start Time :\n            "),t("span",{staticClass:"text-left"},[e._v("\n              "+e._s(e.momentFormat(e.operationalClass.entryTime)))])]),e._v(" "),t("p",{staticClass:"text-red-400 font-bold"},[e._v("\n            Class End Time :\n            "),t("span",[e._v(e._s(e.momentFormat(e.operationalClass.dismissalTime)))])])])])])])],1)}),[],!1,null,"ef6616c8",null);t.default=component.exports;installComponents(component,{Modal:n(381).default,IconsArrow:n(518).default})}}]);