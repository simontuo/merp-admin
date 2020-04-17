import request from "@/utils/request"

export function permissionPageList(params) {
	return request({
		url: '/permissions',
		method: 'get',
		params: params
	})
} 