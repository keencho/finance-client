export default class Path {
	static INDEX =  '/';					// 인덱스
	static LOGIN = '/login';			// 로그인
	
	static Coin = class {
		private static CONTEXT_PATH = '/coin';
		
		static BULL_MARKET = this.CONTEXT_PATH + '/bull-market'	// 상승장
		
	}
	
}
