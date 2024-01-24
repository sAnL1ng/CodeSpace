import baseUrl from './request.js'

// 我的页面的所有接口
export const apiGetUserInfo = (uid) => {
	return uni.request({
		url: `${baseUrl}/user/detail?uid=32953014`,
		method: 'GET',
		data: {
			uid: uid
		}
	})
}