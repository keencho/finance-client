import AxiosUtil from '@/utils/axios.util';

export default class CoinService {
	
	static BASE_URL = '/coin/v1';
	
	static getAllTickers(): Promise<any> {
		return AxiosUtil.request('GET', `${this.BASE_URL}/tickers`);
	}
	
	static resetTickers(): void {
		AxiosUtil.request('PUT', `${this.BASE_URL}/tickers`)
	}
}
