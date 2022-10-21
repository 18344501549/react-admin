import { request } from '../utils/request';

/**
 * 登陆接口
 */
export const LoginApi = <T>(params: any) => request.post<T>('/login/', params, { timeout: 15000 });
