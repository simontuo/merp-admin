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