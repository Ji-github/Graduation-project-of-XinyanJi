import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {message} from '@baidu/magic-cube-design-next';
import {OTHER_BASE_URL} from '@/config/baseUrl';

const request = axios.create({
    // 改为30s是为了兼容query泛化的接口提供方，那个接口耗时较长。
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});
/**
 * 处理登录后访问的页面url
 * @returns
 */
function dealUrl() {
    const xy = window.location.href.split('://')[0];
    const host = window.location.host;
    return xy + '://' + host;
}
message.config({
    top: '70px'
});
function getParam(config: AxiosRequestConfig): string {
    let parama;
    if (config.method === 'get') {
        parama = JSON.stringify(config.params);
    } else {
        parama = JSON.stringify(config.data);
    }
    return parama;
}
// 请求拦截
request.interceptors.request.use((config: AxiosRequestConfig) => {
    if(config.url !== '/ocp/login/in') {
        if(!window.localStorage.getItem('username')) {
            window.location.pathname = '/';
        };
        if(window.localStorage.getItem('status') === '0') {
            window.location.pathname = '/no-permission';
        };
    }
    const url = config.url as string;
    // 获取根路由
    const rootUrl: string = url.split('/')[1];
    if (OTHER_BASE_URL.includes(rootUrl)) {
        config.baseURL = '';
    }
    else {
        config.baseURL = process.env.VUE_APP_API_BASE_URL;
    }
    return config;
});

// 响应拦截
request.interceptors.response.use(
    (response: AxiosResponse) => {
        const {config, status, data} = response;
        const parama = getParam(config);
        if (status !== 200 && status !== 201) {
            return Promise.reject(data);
        }
        else {
        if (data.status === 10010) {
                window.location.replace('/no-permission?noAccess=true');
                return Promise.reject(data);
            } else if (data.status === 10403) {
                window.location.replace('/no-permission');
                return Promise.reject(data);
            }
            // 全局报错处理
            if (data.status === 0 || data.errno === 0) {
                return Promise.resolve(data);
            }
            else {
                message.error(`
                    报错信息：${data.msg}
                    接口路径：${config.baseURL}${config.url}
                    traceid: ${data.traceid}
                    时间：${new Date().toLocaleString()}
                    请求参数：${parama}`
                    || '接口返回错误！');
                return Promise.reject(data);
            }

        }
    },
    (err: AxiosError) => {
        const {config} = err;
        const parama = getParam(config);
        message.error(`
            报错信息：${err.message}
            接口路径：${config.baseURL}${config.url}
            时间：${new Date().toLocaleString()}
            请求参数：${parama}`
            || '接口请求异常，请查看');
    }
);

// 响应拦截了，因此这里的返回值不是原始定义的 AxiosPromise 了
export default request as (<T = any>(config: AxiosRequestConfig) => Promise<T>);