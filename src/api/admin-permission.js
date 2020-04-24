import request from "@/utils/request"

export function adminPermissionPageList(params) {
	return request({
		url: '/admin_permissions',
		method: 'get',
		params: params
	})
}

export function adminPermissionList(params) {
	return request({
		url: '/admin_permissions/list',
		method: 'get',
		params: params
	})
}

export function adminPermissionStore(params) {
	return request({
		url: '/admin_permissions',
		method: 'post',
		params: params
	})
}

export function adminPermissionProfile(params) {
	return request({
		url: '/admin_permissions/' + params.id,
		method: 'get',
		params: params
	})
}

export function adminPermissionUpdate(params) {
	return request({
		url: '/admin_permissions/' + params.id,
		method: 'put',
		params: params
	})
}

export function adminPermissionBatchDelete(params) {
	return request({
		url: '/admin_permissions/delete',
		method: 'delete',
		params: params
	})
}