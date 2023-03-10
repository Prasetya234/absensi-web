import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import store from "./auth"
import { API_WEB_SOCKET } from '~/utils/api';
import { notificateAudioPlay, notificatePopUpPlay } from '~/utils/notification';
let stompClient

export const state = () => ({
    contacs: [
    ],
    chat: []
})

export const getters = {
    getChatList(state) {
        return state.chat
    },
    getContactList(state) {
        return state.contacs
    },
    chatList(state) {
        return state.chat
    },
    getUsername(state, getters, rootState) {
        return rootState.auth.auth.user.firstName + ' ' + rootState.auth.auth.user.lastName
    }
}

export const mutations = {
    ADD_CONTACT(state, payload) {
        state.contacs = [
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIdDE42rKH2M-QPAjzpD6jfdW09EKQsfgTg&usqp=CAU',
                name: 'Absensi Web Update 😁💕',
                notcomment: true,
                active: false
            },
            payload
        ]
    },
    SET_CHAT_FIRST(state, payload) {
        state.chat = payload
    },
    ADD_CHAT(state, payload) {
        state.chat.push(payload)
    },
    SET_ACTIVE_CONTACT(state, payload) {
        state.contacs.forEach((item) => {
            item.active = false
        })
        state.contacs[payload].active = true
    }
}

export const actions = {
    addContact({ commit }, payload) {
        commit('ADD_CONTACT', payload)
    },
    setActiveContact({ commit }, payload) {
        commit('SET_ACTIVE_CONTACT', payload)
    },
    setChatFirst({ commit }, payload) {
        commit('SET_CHAT_FIRST', payload)
    },
    connect({ dispatch }) {
        let Sock = new SockJS(API_WEB_SOCKET);
        stompClient = over(Sock);
        stompClient.connect({}, (e) => dispatch('onConnected', e), (e) => dispatch('onError', e));
    },
    onConnected({ dispatch }) {
        stompClient.subscribe('/chatroom/public', (e) => dispatch('onMessageReceived', e));
    },
    onMessageReceived({ commit, getters }, payload) {
        const payloadData = JSON.parse(payload.body);
        const me = payloadData.senderName === getters.getUsername ? true : false
        switch (payloadData.status) {
            case 'MESSAGE':
                commit('ADD_CHAT', {
                    senderName: payloadData.senderName,
                    message: payloadData.message,
                    date: payloadData.date,
                    me
                })
                break;
        }
        if (!me) {
            notificateAudioPlay()
            notificatePopUpPlay({ message: payloadData.message, sender: payloadData.senderName })
        }
        console.clear();
    },
    sendMessages({ dispatch }, payload) {
        if (!stompClient) {
            dispatch('connect')
            dispatch('loading/showLoading', null, {root:true})
            setTimeout(() => {
                dispatch('loading/hideLoading', null, {root:true})
                stompClient.send('/app/message', {}, JSON.stringify(payload));
            }, 2000);
            return
        }
        stompClient.send('/app/message', {}, JSON.stringify(payload));
    },
    onError({ commit }, error) {
        console.log(error);
    }
}