<template>
  <div
    class="flex justify-center items-center pt-[6.85%]"
    style="height: 100vh"
  >
    <div class="container w-4/5">
      <aside>
        <header>
          <h1 class="title">Chat (BETA)</h1>
          <input type="text" placeholder="search" />
        </header>
        <ul>
          <li
            v-for="(data, idx) in getContactList"
            :key="idx"
            @click="selectedContactChat(idx)"
          >
            <img :src="data.image" alt="Profile Picture" />
            <div>
              <h2 class="truncate">{{ data.name }}</h2>
              <h3>
                <span class="status green" v-if="data.active"></span>
                <span class="status orange" v-else></span>
                {{ data.active ? 'Selected' : 'Unselected' }}
              </h3>
            </div>
          </li>
        </ul>
      </aside>
      <main>
        <header>
          <div class="flex w-2/4">
            <img :src="activechat.image" alt="Image Active" />
            <div class="ml-4">
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
          id="chat"
          v-if="chatList.length && !activechat.notcomment"
          ref="scrollToMe"
        >
          <li
            v-for="(data, idx) in chatList"
            :key="idx"
            :class="data.me ? 'me' : 'you'"
            :id="`m-${idx}`"
          >
            <div class="entete">
              <span :class="`status ${data.me ? 'blue' : 'green'}`"></span>
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
        <footer v-if="!activechat.notcomment">
          <textarea
            placeholder="Type your message"
            v-model="textchat"
          ></textarea>
          <button class="cursor-pointer" @click="sendMessage">Send</button>
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
import { getClassId, getUsername } from '~/utils/auth';
import { createConfig } from '~/service/api-manager';
import emptyImage from '~/assets/img/empty-profile.png';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Chat',
  data: () => ({
    activechat: {
      image: '',
      name: ''
    },
    textchat: ''
  }),
  computed: {
    ...mapGetters('chat', ['getContactList', 'chatList'])
  },
  watch: {
    chatList() {
      setTimeout(() => {
        this.scrollDown();
      }, 100);
    }
  },
  methods: {
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('chat', ['addContact', 'sendMessages', 'setChatFirst', 'setActiveContact']),
    sendMessage() {
      if (!this.textchat) return;
      const chatMessage = {
        senderName: getUsername(),
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
      this.activechat = this.getContactList[idx];
    },
    async fetchChat() {
      try {
        const { data } = await this.$axios(
          new createConfig().getData({
            url: 'chat'
          })
        );
        this.setChatFirst(
          data.data.map((item) => ({
            ...item,
            me: item.senderName === getUsername() ? true : false
          }))
        );
      } catch (error) {
        console.log(error);
      }
    },
    scrollDown() {
      this.$nextTick(() => {
        let length = this.chatList.length;
        if (length > 0) {
          let id = length - 1;
          let element = document.getElementById('m-' + id);
          element.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      });
    },
    async postMessage(data) {
      try {
        const chatMessage = {
          ...data,
          schoolId: getClassId()
        };
        this.$axios(
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
          new createConfig().getData({
            url: 'class-bootcamp/' + getClassId()
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
  }
};
</script>
<style scoped>
.container {
  height: 580px;
  background: white;
  margin: 0 auto;
  font-size: 0;
  border-radius: 5px;
  overflow: hidden;
}
aside {
  width: 25%;
  height: 100%;
  background-color: #3b3e49;
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
aside input {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 50px 0 20px;
  background-color: #5e616a;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_search.png);
  background-repeat: no-repeat;
  background-position: 220px;
  background-size: 40px;
}
aside input::placeholder {
  color: #fff;
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
  background-color: #5e616a;
}
h2,
h3 {
  margin: 0;
}
aside li img {
  border-radius: 50%;
  width: 60px;
  margin-left: 20px;
  margin-right: 8px;
}
aside li div {
  display: inline-block;
  vertical-align: top;
}
aside li h2 {
  font-size: 14px;
  color: #fff;
  font-weight: normal;
  margin-bottom: 5px;
}
aside li h3 {
  font-size: 12px;
  color: #7e818a;
  font-weight: normal;
}

.status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
}
.green {
  background-color: #58b666;
}
.orange {
  background-color: #ff725d;
}
.blue {
  background-color: #6fbced;
  margin-right: 0;
  margin-left: 7px;
}

main header {
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 30px 40px;
}

main header img:first-child {
  border-radius: 50%;
}
main header img:last-child {
  width: 24px;
  margin-top: 8px;
}

main header h2 {
  font-size: 16px;
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
#chat h2,
#chat h3 {
  display: inline-block;
  font-size: 13px;
  font-weight: normal;
}
#chat h3 {
  color: #bbb;
}
#chat .entete {
  margin-bottom: 10px;
}
#chat .message {
  padding: 20px;
  color: #fff;
  line-height: 25px;
  max-width: 90%;
  display: inline-block;
  text-align: left;
  border-radius: 5px;
}
#chat .me {
  text-align: right;
  position: relative;
}
#chat .you .message {
  background-color: #58b666;
}
#chat .me .message {
  background-color: #6fbced;
}
#chat .triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
}
#chat .you .triangle {
  border-color: transparent transparent #58b666 transparent;
  margin-left: 15px;
}
#chat .me .triangle {
  border-color: transparent transparent #6fbced transparent;
  position: absolute;
  right: 44px;
  top: 35px;
}
main footer {
  display: flex;
  gap: 1;
  padding: 20px 30px 10px 20px;
}
main footer textarea {
  resize: none;
  border: none;
  display: block;
  width: 100%;
  padding: 4px;
  border-radius: 3px;
  font-size: 13px;
  margin-bottom: 13px;
}
.title {
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}
main footer textarea::placeholder {
  color: #ddd;
}
main footer img {
  height: 30px;
  cursor: pointer;
}
main footer button {
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #6fbced;
  vertical-align: top;
  margin-left: 30px;
  margin-top: -20px;
  display: inline-block;
}

::-webkit-scrollbar {
  width: 16px;
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
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
