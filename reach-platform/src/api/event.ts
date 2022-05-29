import request from '@/utils/request';

const api = {
    list: '/ocp/event/list',
    info: '/ocp/event/info',
    insert: '/ocp/event/insert',
    update: '/ocp/event/update',
    delete: '/ocp/event/delete'
};

export function getEventList(params?: any) {
    return request({
        url: api.list,
        method: 'get',
        params
    });
}

export function getEventInfo(id: string) {
    return request({
        url: api.info,
        method: 'get',
        params: {
            id
        }
    });
}

export function getEventInsert(params: any) {
    return request({
        url: api.insert,
        method: 'get',
        params
    });
}

export function getEventUpdate(params: any) {
    return request({
        url: api.update,
        method: 'get',
        params
    });
}

export function getEventDelete(id: any) {
    return request({
        url: api.delete,
        method: 'get',
        params: {
            id
        }
    });
}
