import Path from '@/models/path.model';
import axios, {AxiosResponse, Method} from 'axios';
import ResponseError from '@/error/response.error';

export default class AxiosUtil {
  static BASE_PATH = Path.Api.BASE_PATH;
  
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
  
  public static async get(requestURL: string): Promise<any> {
    const result: AxiosResponse = await axios.get(requestURL);
    return result.data;
  }
  
  public static async post(requestURL: string, params?: any): Promise<any> {
    const result: AxiosResponse = await axios.post(requestURL, params);
    return result.data;
  }
  
  // ------------------------------------------------------------------------------ //
  
  public static async responseHandler(request: Promise<any>, onSuccess?: any, onFailure?: any): Promise<void> {
    try {
      const res = await request;
      
      if (res.success === false) {
        throw new ResponseError(res.message)
      }
      
      if (typeof onSuccess === 'function') {
        onSuccess(res.data);
      }
    } catch (e: any) {
      if (typeof onFailure === 'function') {
        onFailure(e.message);
      }
    }
  }
}
