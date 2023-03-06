import { setToken } from "~/utils/auth";

export const state = () => ({
    auth: {
        token: '',
        user: {
            id: '',
            noSiswa: 0,
            firstName: '',
            lastName: '',
            email: '',
            avatarUrl: '',
            schoolClass: '',
            batch: 0,
            description: '',
            gender: '',
            birthDate: '',
            favorite: false,
            viewers: null,
            roleId: {
                id: 0,
                name: ''
            },
            schoolId: {
                id: '',
                name: '',
                address:
                    '',
                avatarUrl: '',
                totalStudent: 0,
                operationalClass: {
                    createAt: '',
                    updateAt: '',
                    id: 0,
                    entryTime: '',
                    dismissalTime: '',
                    durationLearn: 0,
                    admissionDay: 0,
                    markBy: null
                },
                goingHomeEarly: null
            }
        }
    }
});

export const getters = {
    getToken(state) {
        return state.auth.token;
    },
    getUserId(state) {
        return state.auth.user.id;
    },
    getUsername(state) {
        return state.auth.user.firstName + ' ' + state.auth.user.lastName;
    },
    getClassId(state) {
        return state.auth.user.schoolId.id;
    },
    getRole(state) {
        return state.auth.user.roleId.name;
    },
    getAuth(state) {
        return state.auth;
    },
    isAuthenticated(state) {
        return state.auth?.token && state.auth?.user?.id && state.auth?.user?.schoolId?.id;
    }
};

export const mutations = {
    HANDLE_AUTH(state, data) {
        state.auth = data;
    }
};

export const actions = {
    setCredential({ commit }, payload) {
        setToken(payload.token)
        commit('HANDLE_AUTH', payload);
    },
    logout({ commit }) {
        commit('HANDLE_AUTH', {});
    }
};
