/**
 * @file 左侧菜单栏api文件
 */
//  import {navMenuList} from '@/types/api/navMenu';
import request from '@/utils/request';

const api = {
    login: '/ocp/login/in',
    register: '/ocp/login/register'
};


export function getLogin(params: any) {
    return request({
        url: api.login,
        method: 'get',
        params
    });
}

export function getRegister(params: any) {
    return request({
        url: api.register,
        method: 'get',
        params
    });
}