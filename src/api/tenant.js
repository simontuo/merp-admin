import request from '@/utils/request'

export function tenantUserList(params) {
    return request({
        url: '/tenants/list',
        method: 'get',
        params: params
    })
}

export function tenantPageList(params) {
    return request({
        url: '/dev/user-services/company/companysPage',
        method: 'get',
        params: params
    })
}

export function tenantStore(params) {
    return request({
        url: '/dev/user-services/company/newCompany',
        method: 'post',
        params
    })
}

export function tenantProfile(params) {
    return request({
        url: '/dev/user-services/company/getCompany',
        method: 'get',
        params: params
    })
}

export function tenantUpdate(params) {
    return request({
        url: '/tenants/' + params.id,
        method: 'put',
        params: params
    })
}