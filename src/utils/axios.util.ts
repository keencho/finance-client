import axios, {AxiosResponse, Method} from 'axios';
import {setRecoil} from '@/core/RecoilNexus';
import SpinnerAtom from '@/recoil/spinner.atom';

export default class AxiosUtil {
  static BASE_PATH = '/api/finance';
  
  private static get(requestURL: string, params?: any): Promise<AxiosResponse> {
    if (params) {
      requestURL += '?' + new URLSearchParams(params).toString();
    }
    return axios.get(requestURL);
  }
  
  private static post(requestURL: string, params?: any): Promise<AxiosResponse> {
    return axios.post(requestURL, params);
  }
  
  private static put(requestURL: string, params?: any): Promise<AxiosResponse> {
    return axios.put(requestURL, params);
  }
  
  // ------------------------------------------------------------------------------ //
  
  public static request(method: Method, path: string, params?: any): Promise<any> {
    switch (method) {
      case 'GET':
      case 'get':
        return this.get(this.BASE_PATH + path, params);
      case 'POST':
      case 'post':
        return this.post(this.BASE_PATH + path, params);
      case 'put':
      case 'PUT':
        return this.put(this.BASE_PATH + path, params);
      default:
        throw new Error('unimplemented request method')
    }
  }
  
  public static async responseHandler(request: Promise<any>, options?: { onSuccess?: (data: any) => void | Promise<void>, onFailure?: (message: string) => void | Promise<void>, hideSpinner?: boolean }): Promise<void> {
    const showSpinner = !options || options.hideSpinner === undefined || !options.hideSpinner;
    try {
      if (showSpinner) {
        setRecoil(SpinnerAtom, true);
      }
      
      const res = await request;
  
      if (options && typeof options.onSuccess === 'function') {
        options.onSuccess(res.data);
      }
    } catch (e: any) {
      if (options && typeof options.onFailure === 'function') {
        // 서버의 exception 타입 참조
        options.onFailure(e.response.data.message);
      }
    } finally {
      if (showSpinner) {
        setRecoil(SpinnerAtom, false)
      }
    }
  }
}
