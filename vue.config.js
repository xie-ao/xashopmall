module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'content': 'components/content',
				'common': 'components/common',
				'image': '@/assets/image',
				'network': '@/network',
				'views': '@/views',
			}
		}
	}
}