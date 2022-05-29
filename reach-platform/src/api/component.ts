import request from '@/utils/request';
export const COMPONENT_API = {
    list: '/ocp/components/list',
    save: '/ocp/components/register',
    getComponent: '/ocp/components/info'
};

export const CARD_API = {
    list: '/pagecomponents/list',
    save: '/pagecomponents/register',
    getComponent: '/pagecomponents/info'
};

export function getComponentList(parameter: any, api: any) {
    return request({
        url: api.list,
        method: 'get',
        params: parameter
    });
}

export function getComponent(parameter: any, api: any) {
    return request({
        url: api.getComponent,
        method: 'get',
        params: parameter
    });
}

export function saveComponent(parameter: any, api: any) {
    return request({
        url: api.save,
        method: 'get',
        params: parameter
    });
}





