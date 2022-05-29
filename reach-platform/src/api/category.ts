/**
 * @file 左侧菜单栏api文件
 */
//  import {navMenuList} from '@/types/api/navMenu';
import request from '@/utils/request';

const api = {
    list: '/ocp/category/list',
    insert: '/ocp/category/insert',
    delete: '/ocp/category/delete'
};


export function categoryInsert(params: any) {
    return request({
        url: api.insert,
        method: 'get',
        params
    });
}

export function categoryList(params?: any) {
    return request({
        url: api.list,
        method: 'get',
        params
    });
}

export function categoryDelete(params: any) {
    return request({
        url: api.delete,
        method: 'get',
        params
    });
}