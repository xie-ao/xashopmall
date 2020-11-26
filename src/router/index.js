import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
	return originalReplace.call(this, location).catch(err => err);
};

const home = () =>
	// import('../views/home/home')
	import('views/home/home')

const profile = () =>
	import('views/profile/profile')

const cart = () =>
	import('views/cart/cart')

const category = () =>
	import('views/category/category')

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: home,
		meta: {
			title: '首页'
		},
	},
	{
		path: '/profile',
		component: profile,
		meta: {
			title: '我的'
		},
	},
	{
		path: '/cart',
		component: cart
	},
	{
		path: '/category',
		component: category
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
