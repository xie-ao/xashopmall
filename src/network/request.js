import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: "http://152.136.185.210:8000/api/w6",
		timeout: 5000
	})

	//请求拦截
	// instance.interceptors.request.use(config => {
	// 	console.log('config', config);
	// 	//1.比如config的一些信息需要变换后再上传服务器
	// 	//2.比如每次发送网络请求时显示请求图标
	// 	//3.某些网络请求（比如登录），必须携带一些信息
	// 	return config
	// }, err => {
	// 	console.log(err);
	// })

	// //响应拦截
	// instance.interceptors.response.use(res => {
	// 	console.log('res', res);
	// 	//.....
	// 	return res.data
	// }, err => {
	// 	console.log('err', err);
	// })

	//因为instance本身就是promise
	return instance(config)

}