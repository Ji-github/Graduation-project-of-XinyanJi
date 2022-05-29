import request from '@/utils/request';

const api = {
    list: '/ocp/head/list',
    insert: '/ocp/head/insert',
    update: '/ocp/head/update',
    delete: '/ocp/head/delete',
    info: '/ocp/head/info'
};

export function getCardHeadList(params: any) {
    return request({
        url: api.list,
        method: 'get',
        params
    });
}

export function getCardHeadInsert(params: any) {
    return request({
        url: api.insert,
        method: 'get',
        params
    });
}

export function getCardHeadUpdate(params: any) {
    return request({
        url: api.update,
        method: 'get',
        params
    });
}

export function getCardHeadDelete(id: string | number) {
    return request({
        url: api.delete,
        method: 'get',
        params: {
            id
        }
    });
}

export function getCardHeadInfo(id: string | number) {
    return request({
        url: api.info,
        method: 'get',
        params: {
            id
        }
    });
}