import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		hidden: true
	},

	{
		path: '/forget_password',
		name: 'forgetPassword',
		component: () => import('@/views/forget-password/index'),
		hidden: true
	},

	{
		path: '/404',
		component: () => import('@/views/error/404'),
		hidden: true
	},

	{
		path: '/',
		component: Layout,
		redirect: 'dashboard',
	},

	{
		path: '/dashboard',
		component: Layout,
		redirect: '/dashboard/index',
		children: [
			{
				path: 'index',
				name: 'dashboard',
				component: () => import('@/views/dashboard/index'),
				meta: { title: '数据概览', icon: 'dashboard', affix: true }
			}
		]
	},

	{
		path: '/user',
		component: Layout,
		redirect: '/user/index',
		children: [
			{
				path: 'index',
				name: 'user',
				component: () => import('@/views/user/index'),
				meta: { title: '用户管理', icon: 'user' },
			},
			{
				path: 'profile',
				name: 'profile',
				component: () => import('@/views/profile/index'),
				meta: { title: '个人中心' },
				hidden: true,
			}
		]
	},

	{
		path: '/tenant',
		component: Layout,
		redirect: '/tenant/index',
		children: [
			{
				path: 'index',
				name: 'tenant',
				component: () => import('@/views/tenant/index'),
				meta: { title: '租户管理', icon: 'tenant' }
			},
			{
				path: 'profile',
				name: 'tenantProfile',
				hidden: true,
				component: () => import('@/views/tenant/profile/index'),
				meta: { title: '租户详情' }
			}
		]
	},

	{
		path: '/verify',
		component: Layout,
		redirect: '/verify/permission/index',
		meta: { title: '权限管理', icon: 'verify-code' },
		children: [
			{
				path: 'permission/index',
				name: 'permission',
				component: () => import('@/views/permission/index'),
				meta: { title: '前台权限' },
			},
			{
				path: 'role/index',
				name: 'role',
				component: () => import('@/views/role/index'),
				meta: { title: '前台角色' }
			},
			{
				path: 'role/create',
				name: 'roleCreate',
				component: () => import('@/views/role/create/index'),
				meta: { title: '前台角色新增' },
				hidden: true
			},
			{
				path: 'role/profile',
				name: 'roleProfile',
				component: () => import('@/views/role/profile/index'),
				meta: { title: '前台角色详情' },
				hidden: true
			},
			{
				path: 'admin_permission/index',
				name: 'adminPermission',
				component: () => import('@/views/admin-permission/index'),
				meta: { title: '后台权限' },
			},
			{
				path: 'admin_role/index',
				name: 'adminRole',
				component: () => import('@/views/admin-role/index'),
				meta: { title: '后台角色' }
			}
		]
	},

	{
		path: '/service',
		component: Layout,
		redirect: '/service/index',
		children: [
			{
				path: 'index',
				name: 'service',
				component: () => import('@/views/service/index'),
				meta: { title: '服务管理', icon: 'service' },
			}
		]
	},

	{
		path: '/statistics',
		component: Layout,
		redirect: '/statistics/index',
		children: [
			{
				path: 'index',
				name: 'statistics',
				component: () => import('@/views/statistics/index'),
				meta: { title: '数据统计', icon: 'statistics' }
			}
		]
	},

	// 404 page must be placed at the end !!!
	{ path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
	// mode: 'history', // require service support
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router
