import {useEffect, useState} from 'react';

const useFetch = (request: Promise<any>) => {
  const [data, setData] = useState<any>(undefined);
  
  const doFetch = async() => {
    console.log(request)
  }
  
  useEffect(() => {
    doFetch()
  })
  
  return data;
}

export default useFetch
