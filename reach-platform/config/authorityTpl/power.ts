/**
 * @file 权限管理数据配置化文件
 */
import {COMMON_COLS} from './common';
export const POWER_COLS = [
    {
        title: 'id',
        dataIndex: 'id',
    },
    {
        title: '权限名称',
        dataIndex: 'name',
    },
    {
        title: '权限备注',
        dataIndex: 'remark',
        slots: {customRender: 'content'}
    },
    {
        title: '权限类型',
        dataIndex: 'type',
        slots: {customRender: 'type'}
    },
    ...COMMON_COLS
];

export const POWER_FORM = [
    {
        title: '权限名称',
        propsName: 'name',
        placeHolder: '请输入权限名称'
    },
    {
        title: '权限类型',
        propsName: 'type',
        type: 'select',
        placeHolder: '请输入权限类型',
        options: [
            {
                label: '平台级默认权限项',
                value: 1,
            },
            {
                label: '业务线级默认权限项',
                value: 2,
            },
            {
                label: '普通权限项',
                value: 3
            }
        ]
    },
];

export const POWER_ACTION = [
    {
        actionName: '编辑',
        type: 'edit',
        api: '/power/update'
    },
    {
        actionName: '搜索',
        type: 'search',
        api: '/power/list',
        notShow: true
    }
];

export const POWER_SEARCH_FORM = {
    name: '',
    type: undefined,
    insert_time: ''
};

export const FORM_RULES = {
    firstName: [
        {
            required: true,
            message: '',
            trigger: ['change', 'blue']
        }
    ],
    pagename: [
        {
            required: true,
            message: '页面名称不能为空',
            trigger: ['change', 'blur']
        },
    ],
    opname: [
        {
            required: true,
            message: '操作名称不能为空',
            trigger: ['change', 'blur']
        },
    ]
};

export const POWER_DRAWER_FORM = [
    {
        title: '序号',
        dataIndex: 'id',
    },
    {
        title: '权限名称',
        dataIndex: 'name',
    },
    {
        title: '权限备注',
        dataIndex: 'remark',
    },
    {
        title: '权限类型',
        dataIndex: 'type'
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

export const POWER_TYPE = {
    '1': '平台级默认权限项',
    '2': '业务线级默认权限项',
    '3': '普通权限项'
};
