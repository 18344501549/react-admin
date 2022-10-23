import { request } from '../utils/request';

import { loginData } from '../components/Login/loginType'

/**
 * 登陆接口
 */
export const LoginApi = <T>(params: loginData) => request.post<T>('/login/', params, { timeout: 15000 });

/**
 * 获取验证码接口
 */
export const GetCode = <T>(params: any) => request.post<T>('/getSms/', params, { timeout: 15000 });
