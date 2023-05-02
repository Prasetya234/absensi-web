<template>
  <div
    class="flex justify-center items-center pt-[5.85%]"
    style="height: 100vh"
  >
    <div class="container w-11/12">
      <aside class="border-r w-2/4">
        <header class="border-b">
          <h1 class="title">Chat (BETA)</h1>
          <div class="box-input flex gap-x-3 border rounded-lg px-2 py-1">
            <input type="text" placeholder="Search" class="" />
            <span class="flex items-center">
              <Magnifier/>
            </span>
          </div>
        </header>
        <ul>
          <li
            v-for="(data, idx) in getContactList"
            :key="idx"
            :class="
              data.active
                ? 'bg-[#f7931e] text-white'
                : 'bg-transparent text-black'
            "
            class="border-b gap-x-3"
            @click="selectedContactChat(idx)"
          >
            <img :src="data.image" alt="Profile Picture" />
            <div>
              <h2 class="truncate">{{ data.name }}</h2>
            </div>
          </li>
        </ul>
      </aside>
      <main>
        <header>
          <div class="flex gap-x-5 w-2/4">
            <img :src="activechat.image" alt="Image Active" />
            <div class="flex items-center">
              <h2>{{ activechat.name }}</h2>
              <!-- <h3>already 1902 messages</h3> -->
            </div>
          </div>
          <div v-if="activechat.notcomment">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png"
              alt=""
            />
          </div>
        </header>
        <ul
          v-if="chatList.length && !activechat.notcomment"
          id="chat"
          ref="scrollToMe"
        >
          <li
            v-for="(data, idx) in chatList"
            :id="`m-${idx}`"
            :key="idx"
            :class="data.me ? 'me' : 'you'"
          >
            <div class="entete">
              <h2>{{ data.senderName }}</h2>
              <h3>{{ new Date(data.date) }}</h3>
            </div>
            <div class="triangle"></div>
            <div class="message">
              {{ data.message }}
            </div>
          </li>
        </ul>
        <div
          v-else
          id="chat"
          class="flex justify-center items-center font-bold text-xl"
        >
          <h1>Belum ada Chat</h1>
        </div>
        <footer
          v-if="!activechat.notcomment"
          class="border-t flex justify-center items-center gap-x-3"
        >
          <input
            v-model="textchat"
            @keyup.enter="sendMessage"
            placeholder="Type your message"
            class="border focus:ring-0"
          />
          <button
            :class="`border border-transparent rounded-lg text-white transition duration-300 hover:transition hover:duration-300 focus:outline-none focus:border-[#CC6633] ${!textchat ? 'bg-[#CC6633]/75 cursor-not-allowed' : 'bg-[#CC6633] cursor-pointer'}`"
            @click="sendMessage"
          >
            Send
          </button>
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { createConfig } from '~/service/api-manager';
import emptyImage from '~/assets/img/empty-profile.png';
import Magnifier from '~/components/icons/magnifier.vue';

export default {
  components: { Magnifier },
  name: 'Chat',
  data: () => ({
    activechat: {
      image: '',
      name: ''
    },
    textchat: ''
  }),
  computed: {
    ...mapGetters('auth', ['getUsername', 'getClassId']),
    ...mapGetters('chat', ['getContactList', 'chatList'])
  },
  watch: {
    chatList() {
      setTimeout(() => {
        this.scrollDown();
      }, 50);
    }
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('chat', [
      'addContact',
      'sendMessages',
      'setChatFirst',
      'setActiveContact'
    ]),
    sendMessage() {
      if (!this.textchat) return;
      const chatMessage = {
        senderName: this.getUsername,
        message: this.textchat,
        date: new Date(),
        status: 'MESSAGE'
      };
      this.postMessage(chatMessage);
      this.sendMessages(chatMessage);
      this.textchat = '';
      setTimeout(() => {
        this.scrollDown();
      }, 100);
    },
    selectedContactChat(idx) {
      this.setActiveContact(idx);
      this.scrollDown();
      this.activechat = this.getContactList[idx];
    },
    async fetchChat() {
      try {
        const { data } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'chat'
          })
        );
        this.setChatFirst(
          data.data.map((item) => ({
            ...item,
            me: item.senderName === this.getUsername
          }))
        );
      } catch (error) {
        console.log(error);
      }
    },
    scrollDown() {
      this.$nextTick(() => {
        try {
          const length = this.chatList.length;
          if (length > 0) {
            const id = length - 1;
            const element = document.getElementById('m-' + id);
            element.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
        } catch {}
      });
    },
    async postMessage(data) {
      try {
        const chatMessage = {
          ...data,
          schoolId: this.getClassId
        };
        await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().postData({
            url: 'chat/send',
            data: chatMessage
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSchool() {
      try {
        const { data } = await this.$axios(
          // eslint-disable-next-line new-cap
          new createConfig().getData({
            url: 'school/' + this.getClassId
          })
        );
        this.addContact({
          image: data.data.avatarUrl ? data.data.avatarUrl : emptyImage,
          name: data.data.name,
          active: true
        });
        this.activechat = this.getContactList[1];
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    this.showLoading();
    await this.fetchChat();
    await this.fetchSchool();
    this.scrollDown();
    this.hideLoading();
    this.$emit('no-footer')
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
.container {
  background: white;
  margin: 0 auto;
  font-size: 0;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  overflow: hidden;
  border: gainsboro;
  box-shadow: 0 2px 4px gainsboro;
}
aside {
  width: 25%;
  height: 100%;
  background-color: #ffffff;
  display: inline-block;
  font-size: 15px;
  vertical-align: top;
}
main {
  width: 75%;
  display: inline-block;
  font-size: 15px;
  vertical-align: top;
}

aside header {
  padding: 30px 20px;
}
aside div input {
  width: 100%;
  height: 35px;
  line-height: 50px;
  padding: 0 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 3px;
  color: #828282;
}
aside div input::placeholder {
  color: #000000;
  font-family: 'Open Sans', sans-serif;
}
aside ul {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  overflow-y: auto;
  height: 400px;
}
aside li {
  cursor: pointer;
  padding: 10px 0;
  display: flex;
  align-items: center;
}
aside li:hover {
  background-color: #fde9d0;
  color: #000000;
}
h2,
h3 {
  margin: 0;
}
aside li img {
  border-radius: 50%;
  width: 50px;
  margin-left: 5%;
}
aside li div {
  display: inline-block;
  vertical-align: top;
}
aside li h2 {
  font-size: 15px;
  font-weight: 600;
  font-family: 'Alata', sans-serif;
  margin-bottom: 5px;
}
aside li h3 {
  font-size: 12px;
  font-weight: normal;
}

.status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
}
.orange {
  background-color: #ff725d;
}

main header {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 40px;
  box-shadow: 1.5px 4px 4px gainsboro;
}

main header img:first-child {
  border-radius: 50%;
}
main header img:last-child {
  width: 24px;
  margin-top: 8px;
}

main header h2 {
  font-size: 17px;
  font-family: 'Alata', sans-serif;
  font-weight: 600;
  margin-bottom: 5px;
}
main header h3 {
  font-size: 14px;
  font-weight: normal;
  color: #7e818a;
}

#chat {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  overflow-y: scroll;
  height: 400px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
}
#chat li {
  padding: 10px 30px;
}
#chat h2 {
  display: inline-block;
  font-family: 'Alata', sans-serif;
  font-size: 16px;
  font-weight: 500;
}
#chat h3 {
  color: #bbb;
  display: inline-block;
  font-size: 13px;
  font-weight: normal;
}
#chat .entete {
  margin-bottom: 10px;
}
#chat .message {
  padding: 7px 17px;
  line-height: 25px;
  max-width: 90%;
  display: inline-block;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  border-radius: 5px;
  box-shadow: 3px 4px 4px gainsboro;
}
#chat .me {
  text-align: right;
  position: relative;
}
#chat .you .message {
  background-color: #fde9d0;
  color: #000000;
}
#chat .me .message {
  background-color: #f7931e;
  color: #ffffff;
}
#chat .triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
}
#chat .you .triangle {
  border-color: transparent transparent #fde9d0 transparent;
  margin-left: 15px;
}
#chat .me .triangle {
  border-color: transparent transparent #f7931e transparent;
  position: absolute;
  right: 4.5%;
  top: 39.5%;
}
main footer {
  display: flex;
  gap: 1;
  padding: 20px 30px 20px 20px;
}
main footer input {
  resize: none;
  display: block;
  width: 100%;
  height: 36px;
  padding: 4px 7px;
  border-radius: 3px;
  font-size: 13px;
}
.title {
  font-size: 22px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
}
main footer input::placeholder {
  color: #ddd;
}
main footer img {
  height: 30px;
  cursor: pointer;
}
main footer button {
  height: fit-content;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 6px 15px;
}

::-webkit-scrollbar {
  width: 10px;
  height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 2px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
