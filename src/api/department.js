import request from '@/utils/request'

export function departmentProfile(params) {
    return request({
        url: '/dev/user-services/admin/adminOperationDepartment/getDepartment' + params.id,
        method: 'get',
        params: params
    })
}

export function departmentUpdate(data) {
    return request({
        url: '/dev/user-services/department/updateDepartment',
        method: 'put',
        data
    })
}

export function departmentBatchBan(data) {
    return request({
        url: '/dev/user-services/admin/adminOperationDepartment/updateStatusDepartment ',
        method: 'put',
        data
    })
}

export function departmentStore(data) {
    return request({
        url: '/dev/user-services/admin/adminOperationDepartment/newDepartment',
        method: 'post',
        data
    })
}

export function departmentList(params) {
    return request({
        url: '/dev/user-services/admin/adminOperationDepartment/departmentsPage ',
        method: 'get',
        params: params
    })
}
