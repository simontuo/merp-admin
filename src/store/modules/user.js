import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, getLoginedUserId, removeLoginedUserId, setLoginedUserId } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
    return {
        token: getToken(),
        id: getLoginedUserId(),
        name: '',
        avatar: '',
        introduction: '',
        roles: []
    }
}

const info = {
    roles: ['admin'],
    avatar: 'https://cdn.learnku.com/uploads/avatars/7032_1480088436.jpeg!/both/100x100',
    name: '大力加冰',
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ID: (state, id) => {
        state.id = id
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
}

const actions = {
    // user login
    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            login(userInfo).then(response => {
                const { data } = response
                commit('SET_TOKEN', data.token)
                setToken(data.token)
                commit('SET_ID', data.adminUserId)
                setLoginedUserId(data.adminUserId)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // get user info
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo({ id: state.id }).then(response => {
                const { data } = response

                if (!data) {
                    reject('Verification failed, please Login again.')
                }

                // const { roles, id, name, avatar } = data

                const { id, userName } = data

                const { avatar, roles, name } = info

                // roles must be a non-empty array
                if (!roles || roles.length <= 0) {
                    reject('getInfo: roles must be a non-null array!')
                }

                commit('SET_ROLES', roles)
                commit('SET_ID', id)
                commit('SET_NAME', userName)
                commit('SET_AVATAR', avatar)
                // commit('SET_INTRODUCTION', introduction)
                // resolve(data)
                resolve(info)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // user logout
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                removeToken() // must remove  token  first
                resetRouter()
                removeLoginedUserId()
                commit('RESET_STATE')
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            removeToken() // must remove  token  first
            commit('RESET_STATE')
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

