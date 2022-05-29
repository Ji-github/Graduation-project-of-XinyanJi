/**
 * @file 权限管理数据配置化文件集合
 */
import {BUSINESS_COLS, BUSINESS_FORM, BUSINESS_SEARCH_FORM, BUSINESS_ACTION} from './business';
import {ROLE_TABLE_COLS, ROLE_FORM, ROLE_SEARCH_FORM, ROLE_ACTION} from './role';
import {INTERFACE_COLS, INTERFACE_FORM, INTERFACE_SEARCH_FORM, INTERFACE_ACTION} from './interface';
import {POWER_COLS, POWER_FORM, POWER_SEARCH_FORM, POWER_ACTION} from './power';
import {USER_COLS, USER_FORM, USER_SEARCH_FORM, USER_ACTION} from './user';
import {TEAM_TABLE_COLS, TEAM_FORM, TEAM_SEARCH_FORM, TEAM_ACTION} from './team';

export const AUTHORITY_TPL: {[key: string]: any} = {
    businessManage: {
        title: '业务',
        columns: BUSINESS_COLS,
        formItem: BUSINESS_FORM,
        searchForm: BUSINESS_SEARCH_FORM,
        action: BUSINESS_ACTION,
        drawerName: 'BusinessDrawer',
        api: '/ocp/business/list',
        path: 'business'
    },
    interfaceManage: {
        title: '接口',
        columns: INTERFACE_COLS,
        formItem: INTERFACE_FORM,
        searchForm: INTERFACE_SEARCH_FORM,
        action: INTERFACE_ACTION,
        drawerName: 'InterfaceDrawer',
        api: '/ocp/interface/list',
        path: 'interface'
    },
    businessuserManage: {
        title: '用户',
        columns: USER_COLS,
        formItem: USER_FORM,
        searchForm: USER_SEARCH_FORM,
        action: USER_ACTION,
        drawerName: 'UserDrawer',
        api: '/ocp/businessuser/list',
        path: 'businessuser'
    },
    teamManage: {
        title: '团队',
        columns: TEAM_TABLE_COLS,
        formItem: TEAM_FORM,
        searchForm: TEAM_SEARCH_FORM,
        action: TEAM_ACTION,
        drawerName: 'TeamDrawer',
        api: '/ocp/team/list',
        path: 'team'
    }
};

export const INFO_API: {[key: string]: string} = {
    business: '/ocp/business/info',
    interfaceInfo: '/ocp/interface/info',
    power: '/ocp/power/info',
    powerids: '/ocp/powerList/list',
    role: '/role/info',
    roles: '/ocp/bindUser/list',
    user: '/ocp/businessuser/info',
    team: '/ocp/team/info',
    team_names: '/ocp/team/list',
};