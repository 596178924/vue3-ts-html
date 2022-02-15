import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/vue-1',
		name: 'vue-1',
		component: () => import('@/views/vue-1.vue')
	},
	{
		path: '/onHooks',
		name: 'onHooks',
		component: () => import('@/views/onHooks.vue')
	},
	{
		path: '/vue-computed-watch',
		name: 'vue-computed-watch',
		component: () => import('@/views/vue-computed-watch.vue')
	},
	{
		path: '/style-module',
		name: 'style-module',
		component: () => import('@/views/style-module.vue')
	},
	{
		path: '/provide',
		name: 'provide',
		component: () => import('@/views/provide.vue')
	},
	{
		path: '/starNight',
		name: 'starNight',
		component: () => import('@/views/starNight.vue')
	},
	{
		path: '/CanvasLine',
		name: 'CanvasLine',
		component: () => import('@/views/CanvasLine.vue')
	},
	
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
