import request from '@/utils/request'

export function adminRolePageList(params) {
	return request({
		url: '/roles',
		method: 'get',
		params: params
	})
}

export function adminRoleDelete(params) {
	return request({
		url: '/admin_roles/delete',
		method: 'delete',
		params: params
	})
}

export function adminRoleProfile(params) {
	return request({
		url: '/admin_roles/' + params.id,
		method: 'get',
		params: params
	})
}

export function adminRoleStore(params) {
	return request({
		url: '/admin_roles',
		method: 'post',
		params: params
	})
}

export function adminRoleUpdate(params) {
	return request({
		url: '/admin_roles/' + params.id,
		method: 'put',
		params: params
	})
}

export function adminRoleBind(params) {
	return request({
		url: '/admin_roles/' + params.id + '/bind',
		method: 'put',
		params: params
	})
}

