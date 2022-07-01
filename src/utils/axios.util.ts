import axios, {AxiosResponse, Method} from 'axios';
import ResponseError from '@/core/response.error';
import {setRecoil} from '@/core/RecoilNexus';
import SpinnerAtom from '@/recoil/spinner.atom';

export default class AxiosUtil {
  static BASE_PATH = '/api/finance';
  
  public static async request(method: Method, path: string, params?: any): Promise<any>{
    switch (method) {
      case 'GET':
      case 'get':
        return await this.get(this.BASE_PATH + path);
      case 'POST':
      case 'post':
        return await this.post(this.BASE_PATH + path, params);
      default:
        break;
    }
    
    return undefined
  }
  
  public static async get(requestURL: string): Promise<AxiosResponse> {
    return await axios.get(requestURL);
  }
  
  public static async post(requestURL: string, params?: any): Promise<AxiosResponse> {
    return await axios.post(requestURL, params);
  }
  
  // ------------------------------------------------------------------------------ //
  
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
