/**
 * @file 接口管理数据配置化文件
 */
import {COMMON_COLS} from './common';

export const INTERFACE_COLS = [
    {
        title: '接口id',
        dataIndex: 'id',
    },
    {
        title: '接口名称',
        dataIndex: 'name',
    },
    {
        title: '接口路径',
        dataIndex: 'path',
        slots: {customRender: 'content'}
    },
    ...COMMON_COLS
];

export const INTERFACE_FORM = [
    {
        title: '接口名称',
        propsName: 'name',
        placeHolder: '请输入接口名称'
    },
    {
        title: '接口路径',
        propsName: 'path',
        placeHolder: '请输入接口路径'
    },
];

export const INTERFACE_ACTION = [
    {
        actionName: '编辑',
        type: 'edit',
        api: '/ocp/interface/update'
    },
    {
        actionName: '删除',
        type: 'delete',
        api: '/ocp/interface/delete'
    },
    {
        actionName: '搜索',
        type: 'search',
        api: '/ocp/interface/list',
        notShow: true
    }
];

export const INTERFACE_SEARCH_FORM = {
    name: '',
    path: '',
    insert_time: ''
};

export const FORM_RULES = {
    name: [
        {
            required: true,
            message: '接口名称不能为空',
            trigger: ['change', 'blur']
        },
    ],
    path: [
        {
            required: true,
            message: '接口路径不能为空',
            trigger: ['change', 'blur']
        },
    ],
    powerids: [
        {
            required: true,
            message: '权限管理不能为空',
            trigger: ['change', 'blur'],
            type: 'array'
        }
    ]
};

export const INTERFACE_DRAWER_ADD_FORM = [
    {
        title: '接口名称',
        propsName: 'name',
        placeHolder: '请输入接口名称'
    },
    {
        title: '接口路径',
        propsName: 'path',
        placeHolder: '请输入接口路径'
    },
    {
        title: '权限关联',
        propsName: 'powerids',
        type: 'checkbox'
    }
];

export const INTERFACE_DRAWER_FORM = [
    {
        title: '序号',
        dataIndex: 'id',
    },
    {
        title: '接口名称',
        dataIndex: 'name',
    },
    {
        title: '接口路径',
        dataIndex: 'path',
    },
    {
        title: '创建时间',
        dataIndex: 'insert_time',
    },
    {
        title: '编辑时间',
        dataIndex: 'update_time',
    }
];