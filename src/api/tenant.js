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
        url: '/dev/user-services/admin/company/companysPage',
        method: 'get',
        params: params
    })
}

export function tenantStore(data) {
    return request({
        url: '/dev/user-services/admin/company/newCompany',
        method: 'post',
        data
    })
}

export function tenantProfile(params) {
    return request({
        url: '/dev/user-services/admin/company/getCompany/' + params.id,
        method: 'get',
        params: params
    })
}

export function tenantUpdate(data) {
    return request({
        url: '/dev/user-services/admin/company/updateCompany',
        method: 'put',
        data
    })
}