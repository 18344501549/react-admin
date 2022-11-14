import axios, { AxiosRequestConfig } from 'axios';
import { getToKen, getUserName } from './tokenType';
import { message } from 'antd';

// //基础URL，axios将会自动拼接在url前
// //process.env.NODE_ENV 判断是否为开发环境 根据不同环境使用不同的baseURL 方便调试
// // let baseURL = process.env.NODE_ENV === 'development' ? '' : 'https://your.domain.com/api';
let baseURL = process.env.REACT_APP_API;

// //默认请求超时时间
const timeout = 30000;

// //创建axios实例
const service = axios.create({
    timeout,
    baseURL,
    //如需要携带cookie 该值需设为true
    withCredentials: true,
    responseType: 'json',
});


// // 取消重复请求
// // const pending: Array<PendingType> = []
// // const CancelToken = axios.CancelToken


// // // 移除重复请求
// // const removePending = (config: AxiosRequestConfig) => {
// //     for (const key in pending) {
// //         const item: number = +key
// //         const list: PendingType = pending[key]
// //         // 当前请求在数组中存在时执行函数体
// //         if (
// //             list.url === config.url &&
// //             list.method === config.method &&
// //             JSON.stringify(list.params) === JSON.stringify(config.params) &&
// //             JSON.stringify(list.data) === JSON.stringify(config.data)
// //         ) {
// //             // 执行取消操作
// //             list.cancel('操作太频繁，请稍后再试')
// //             // 从数组中移除记录
// //             pending.splice(item, 1)
// //         }
// //     }
// // }


// //统一请求拦截 可配置自定义headers 例如 language、token等
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        //配置自定义请求头
        let customHeaders = {
            language: 'zh-cn',
            Token: getToKen(),
            Username: getUserName(),
        };
        config.headers = customHeaders;
        return config;
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
);

//axios返回格式
interface axiosTypes<T> {
    data: T;
    status: number;
    statusText: string;
};

//后台响应数据格式
//###该接口用于规定后台返回的数据格式，意为必须携带code、msg以及result
//###而result的数据格式 由外部提供。如此即可根据不同需求，定制不同的数据格式
interface responseTypes<T> {
    message: T,
    resCode: number,
    msg: string,
    data: T
};

//核心处理代码 将返回一个promise 调用then将可获取响应的业务数据
const requestHandler = <T>(method: 'get' | 'post' | 'put' | 'delete', url: string, params: object = {}, config: AxiosRequestConfig = {}): Promise<T> => {
    let response: Promise<axiosTypes<responseTypes<T>>>;
    switch (method) {
        case 'get':
            response = service.get(url, { params: { ...params }, ...config });
            break;
        case 'post':
            response = service.post(url, { ...params }, { ...config });
            break;
        case 'put':
            response = service.put(url, { ...params }, { ...config });
            break;
        case 'delete':
            response = service.delete(url, { params: { ...params }, ...config });
            break;
    };

    return new Promise<T>((resolve, reject) => {
        response.then(res => {
            //业务代码 可根据需求自行处理
            const data = res.data;

            // resolve(data.data);
            if (data.resCode !== 0) {



                switch (data.resCode) {
                    case 401:
                        message.warn('您的账号已登出或超时，即将登出...');
                        break;
                    case 403:
                        message.warn('您的账号Token已经过期,即将登出...');
                        break;
                    case 500:
                        // error
                        message.error({
                            content: `请求错误:${data.message}`
                        });
                        break;
                };

                // //特定状态码 处理特定的需求
                // if (data.resCode === 401) {
                //     message.warn('您的账号已登出或超时，即将登出...');
                //     console.log('登录异常，执行登出...');
                // };

                // let e = JSON.stringify(data);
                // // error
                // message.warn({
                //     content: `请求错误:${data.message}`
                // });
                // console.log(`请求错误：${e}`)
                //数据请求错误 使用reject将错误返回
                reject(data);
            } else {
                //数据请求正确 使用resolve将结果返回
                message.success({
                    content: data.message,
                    duration: 1
                });
                resolve(data.data);
            };

        }).catch(error => {
            let e = JSON.stringify(error);
            message.warn(`网络错误：${e}`);
            console.log(`网络错误：${e}`)
            reject(error);
        })
    })
}

// // 使用 request 统一调用，包括封装的get、post、put、delete等方法
const request = {
    get: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('get', url, params, config),
    post: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('post', url, params, config),
    put: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('put', url, params, config),
    delete: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('delete', url, params, config)
};

// // 导出至外层，方便统一使用
export { request };
