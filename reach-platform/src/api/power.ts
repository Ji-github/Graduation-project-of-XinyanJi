import request from '@/utils/request';



export function getAuthorityList(api: string, params: any) {
    return request({
        url: api,
        method: 'get',
        params
    });
}

export function authorityInfo(api: string, params: any) {
    return request({
        url: api,
        method: 'get',
        params
    })
}

export function createAuthority(api: string, params: any) {
    return request({
        url: api,
        method: 'get',
        params
    })
}

export function userSearch(username: string) {
    return request({
        url: '/ocp/businessuser/search',
        method: 'get',
        params: {
            name: username
        }
    })
}

export function deleteAuthority(api: string, params: any) {
    return request({
        url: api,
        method: 'get',
        params
    })
}