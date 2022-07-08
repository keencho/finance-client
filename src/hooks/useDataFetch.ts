import {useEffect, useState} from 'react';
import AxiosUtil from '@/utils/axios.util';

// 데이터를 긁어올때만 사용될 hook
const useDataFetch = (request: Promise<any>) => {
  const [data, setData] = useState<any>([]);
  
  const doFetch = async() => {
    
    const onSuccess = (callbackData: any) => {
      setData(callbackData);
    }
    
    await AxiosUtil.responseHandler(
      request,
      {
        onSuccess
      }
    )
  }
  
  useEffect(() => {
    doFetch()
  }, [])
  
  return data;
}

export default useDataFetch

