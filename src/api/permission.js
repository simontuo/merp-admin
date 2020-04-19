import request from "@/utils/request"

export function permissionPageList(params) {
    return request({
        url: '/permissions',
        method: 'get',
        params: params
    })
}

export function permissionList(params) {
    return request({
        url: '/permissions/list',
        method: 'get',
        params: params
    })
}

export function permissionStore(params) {
    return request({
        url: '/permissions',
        method: 'post',
        params: params
    })
}

export function permissionProfile(params) {
    return request({
        url: '/permissions/' + params.id,
        method: 'get',
        params: params
    })
}

export function permissionUpdate(params) {
    return request({
        url: '/permissions/' + params.id,
        method: 'put',
        params: params
    })
}

export function permissionBatchDelete(params) {
    return request({
        url: '/permissions/delete',
        method: 'delete',
        params: params
    })
}