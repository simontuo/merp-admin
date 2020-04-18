import Mock from "mockjs"

export default [
	{
		url: '/tenants/list',
		type: 'get',
		response: config => {
			let data = [
				{
					name: "大力出奇迹有限公司",
					default: false
				},
				{
					name: "保级利亚有限公司",
					default: false
				},
				{
					name: "金坷垃大力有限公司",
					default: false
				}
			];

			return {
				code: 20000,
				data: data
			}

		}
	},

	{
		url: '/tenants/[0-9]*',
		type: 'get',
		response: config => {
			const { id } = config.query

			let data = {
				id: id,
				name: '大力加冰',
				mnemonic_code: 'DLJB',
				contact: '@cname',
				contact_phone: /\d{11,11}/,
				contact_address: '@county(true)',
				created_at: '@datetime',
				size: 100,
				mamger_user_id: 1,
				enable: true,
				contract_start_at: '@date',
				contract_end_at: '@date'
			};

			return {
				code: 20000,
				data: data
			}

		}
	},

	{
		url: '/tenants/[0-9]*',
		type: 'put',
		response: _ => {
			return {
				code: 20000,
				message: '保存成功'
			}
		}
	},

	{
		url: '/tenants',
		type: 'post',
		response: config => {

			return {
				code: 20000,
				message: "新增成功"
			}

		}
	},

	{
		url: '/tenants',
		type: 'get',
		response: config => {
			const { query, page = 1, pageSize = 20 } = config.query

			const list = Mock.mock({
				'items|150': [
					{
						id: '@increment',
						name: '@cname',
						contact: '@cname',
						contact_phone: /\d{11,11}/,
						contact_address: '@county(true)',
						creator: '@cname',
						created_at: '@datetime',
					}
				]
			});

			let sortItems = list.items.reverse();

			const items = sortItems.filter((item, index) => index < pageSize * page && index >= pageSize * (page - 1));

			return {
				code: 20000,
				data: {
					total: list.items.length,
					items: items
				}
			}

		}
	}
]