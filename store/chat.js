import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { API_WEB_SOCKET } from '~/utils/api';
import { getUsername } from '~/utils/auth';
import { notificateAudioPlay } from '~/utils/audio';
var stompClient = null

export const state = () => ({
    contacs: [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIdDE42rKH2M-QPAjzpD6jfdW09EKQsfgTg&usqp=CAU',
            name: 'Absensi Web Chat Update 😁💕',
            notcomment: true,
            active: false
        }
    ],
    stompClient: null,
    chat: []
})

export const getters = {
    getChatList(state) {
        return state.chat
    },
    getContactList(state) {
        return state.contacs
    },
    getStompClient(state) {
        return state.stompClient ? true : false
    },
    chatList(state) {
        return state.chat
    }
}

export const mutations = {
    ADD_CONTACT(state, payload) {
        state.contacs = [
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIdDE42rKH2M-QPAjzpD6jfdW09EKQsfgTg&usqp=CAU',
                name: 'Absensi Web Chat Update 😁💕',
                notcomment: true,
                active: false
            },
            payload
        ]
    },
    SET_STOMP_CLIENT(state, payload) {
        state.stompClient = payload
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
    setStompClient({ commit }, payload) {
        commit('SET_STOMP_CLIENT', payload)
    },
    setChatFirst({ commit }, payload) {
        commit('SET_CHAT_FIRST', payload)
    },
    connected({ commit }, payload) {
        commit('SET_STOMP_CLIENT', payload)
    },
    connect({ commit, dispatch }) {
        let Sock = new SockJS(API_WEB_SOCKET);
        stompClient = over(Sock);
        stompClient.connect({}, (e) => dispatch('onConnected', e), (e) => dispatch('onError', e));
        commit('SET_STOMP_CLIENT', JSON.stringify(stompClient))
    },
    onConnected({ commit, dispatch }) {
        stompClient.subscribe('/chatroom/public', (e) => dispatch('onMessageReceived', e));
    },
    onMessageReceived({ commit }, payload) {
        var payloadData = JSON.parse(payload.body);
        const me = payloadData.senderName === getUsername() ? true : false
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
        if (!me) notificateAudioPlay()
    },
    sendMessages({ commit }, payload) {
        stompClient.send('/app/message', {}, JSON.stringify(payload));
    },
    onError({ commit }, error) {
        console.log(error);
    }
}