import {useState} from 'react';
import AxiosUtil from '@/utils/axios.util';

// 데이터를 긁어올때만 사용될 hook
// 파리미터는 없거나 record 형태여야 한다.
const useDataFetch = (request: (params?: Record<string, any>) => Promise<any>) => {
  const [data, setData] = useState<any>([]);
  
  const doFetch = async(params?: Record<string, any>) => {
    
    const onSuccess = (callbackData: any) => {
      setData(callbackData);
    }
    
    await AxiosUtil.responseHandler(
      request(params),
      {
        onSuccess
      }
    )
  }
  
  return [data, doFetch];
}

export default useDataFetch

