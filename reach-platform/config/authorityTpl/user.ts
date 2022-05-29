/**
 * @file 用户管理数据配置化文件
 */
import {COMMON_COLS} from './common';

export const USER_COLS = [
    {
        title: '序号',
        dataIndex: 'id',
    },
    {
        title: '用户姓名',
        dataIndex: 'name',
    },
    {
        title: '操作人',
        dataIndex: 'opuser',
    },
    {
        title: '团队',
        dataIndex: 'team_names',
        slots: {customRender: 'team_names'},
        width: 100
    },
    {
        title: '角色',
        dataIndex: 'roles',
        slots: {customRender: 'roles'},
    },
    ...COMMON_COLS
];

export const USER_FORM = [
    {
        title: '用户姓名',
        propsName: 'name',
        placeHolder: '请输入用户姓名'
    },
    {
        title: '角色',
        propsName: 'roles',
        type: 'select',
        placeHolder: '请选择角色',
        options: []
    },
    {
        title: '团队',
        propsName: 'team_names',
        type: 'select',
        placeHolder: '请选择团队',
        options: []
    }
];
export const USER_ACTION = [
    {
        actionName: '编辑',
        type: 'edit',
        api: '/ocp/businessuser/update'
    },
    {
        actionName: '移除',
        type: 'delete',
        api: '/ocp/businessuser/delete'
    },
    {
        actionName: '搜索',
        type: 'search',
        api: '/ocp/businessuser/list',
        notShow: true
    }
];

export const USER_SEARCH_FORM = {
    name: '',
    roles: undefined,
    tean_names: undefined
};

export const USER_DRAWER_FORM = [
    {
        title: '用户名称',
        propsName: 'name',
    },
    {
        title: '邮箱前缀',
        propsName: 'name',
    },
    {
        title: '绑定角色',
        propsName: 'roles',
        type: 'checkbox',
        options: []
    }
];

export const FORM_RULES = {
    name: [
        {
            required: true,
            message: '接口名称不能为空',
            trigger: ['change', 'blur']
        },
    ],
    roles: [
        {
            required: true,
            message: '绑定角色不能为空',
            trigger: ['change', 'blur'],
            type: 'arrar'
        },
    ],
};

export const ROLES = {
    "0": "无权限用户",
    "1": "访客",
    "2": "用户",
    "5": "管理员",
    "9": "超级管理员"
};