import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/dev/user-services/admin/adminUser/login',
        method: 'post',
        data
    })
}

export function getInfo(params) {
    return request({
        url: '/dev/user-services/admin/adminUser/getAdminUser/' + params.id,
        method: 'get'
    })
}

export function logout() {
    return request({
        url: '/logout',
        method: 'post'
    })
}

export function userPageList(query) {
    return request({
        url: '/dev/user-services/admin/adminOperationUser/usersPage',
        method: 'get',
        params: query
    })
}

export function userList(query) {
    return request({
        url: '/users/list',
        method: 'get',
        params: query
    })
}

export function userStore(data) {
    return request({
        url: '/dev/user-services/admin/adminOperationUser/newUser',
        method: 'post',
        data
    })
}


export function userProfile(params) {
    return request({
        url: '/dev/user-services/admin/adminOperationUser/getUser/' + params.id,
        method: 'get',
        params: params
    })
}

export function userUpdate(data) {
    return request({
        url: '/dev/user-services/admin/adminOperationUser/updateUser',
        method: 'put',
        data
    })
}

export function userBtachBan(data) {
    return request({
        url: '/dev/user-services/admin/adminOperationUser/batchBan',
        method: 'put',
        data
    })
}

export function userResetPassword(data) {
    return request({
        url: '/users/reset_password',
        method: 'post',
        data
    })
}

export function userRemoteList(params) {
    return request({
        url: '/users/remote_list',
        method: 'get',
        params: params
    })
}
