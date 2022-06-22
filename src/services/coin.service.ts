import AxiosUtil from '@/utils/axios.util';
import Path from '@/models/path.model';

export default class CoinService {
	static async getBullMarket(): Promise<any> {
		return await AxiosUtil.request('GET', '/coin/v1/bull-market');
	}
}
