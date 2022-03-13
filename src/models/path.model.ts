export default class Path {
	
	// api path
	static Api = {
		BASE_PATH: '/api/finance',
		
		// 인증 & 계정
		CHECK_AUTH: '/account/v1/check-auth',		// 로그인 여부 확인
		LOGIN: '/account/v1/login',							// 로그인
		LOGOUT: '/account/v1/logout',						// 로그아웃
	}
	
	// web path
	static Web = {
		INDEX: '',					// 인덱스
		LOGIN: '/login'			// 로그인
		
	}
	
	// page that doesn't require authentication.
	static NON_AUTH_PATH = [this.Web.INDEX, this.Web.LOGIN]
	
}
