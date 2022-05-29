/**
 * @file 业务管理数据配置化文件
 */
import {COMMON_COLS} from './common';

export const BUSINESS_COLS = [
    {
        title: '业务ID',
        dataIndex: 'id',
    },
    {
        title: '业务名称',
        dataIndex: 'name',
    },
    {
        title: '业务备注',
        dataIndex: 'remark',
        slots: {customRender: 'content'}
    },
    ...COMMON_COLS
];

export const BUSINESS_FORM = [
    {
        title: '业务ID',
        propsName: 'id',
        placeHolder: '请输入业务ID'
    },
    {
        title: '业务名称',
        propsName: 'name',
        placeHolder: '请输入业务名称'
    },
];

export const BUSINESS_ACTION = [
    {
        actionName: '编辑',
        type: 'edit',
        api: '/ocp/business/update'
    },
    {
        actionName: '搜索',
        type: 'search',
        api: '/ocp/business/list',
        notShow: true
    }
];

export const BUSINESS_SEARCH_FORM = {
    id: '',
    name: '',
    insert_time: ''
};

export const FORM_RULES = {
    name: [
        {
            required: true,
            message: '业务名称不能为空',
            trigger: ['change', 'blur']
        }
    ],
    identify: [
        {
            required: true,
            message: '业务线标识不能为空',
            trigger: ['change', 'blur']
        }
    ]
};

export const BUSINESS_DRAWER_TABLE = [
    {
        title: '序号',
        dataIndex: 'id',
    },
    {
        title: '邮箱前缀',
        dataIndex: 'email',
    },
    {
        title: '操作',
        dataIndex: 'action',
        slots: {customRender: 'action'}
    },
];


export const BUSINESS_DRAWER_FORM = [
    {
        title: '业务ID',
        propsName: 'id',
        type: 'disabled'
    },
    {
        title: '业务名称',
        propsName: 'name',
    },
    {
        title: '业务备注',
        propsName: 'remark',
    },
    {
        title: '创建时间',
        propsName: 'insert_time',
        type: 'disabled'
    },
    {
        title: '编辑时间',
        propsName: 'update_time',
        type: 'disabled'
    }
];

export const BUSINESS_DRAWER_ADD_FORM = [
    {
        title: '业务名称',
        propsName: 'name',
        placeHolder: '请输入业务名称'
    },
    {
        title: '业务线标识',
        propsName: 'identify',
        placeHolder: '请输入业务线标识'
    },
    {
        title: '业务备注',
        propsName: 'remark',
        placeHolder: '请输入业务备注'
    },
    {
        title: '业务默认权限',
        propsName: 'default_power',
        type: 'select',
        placeHolder: '请选择业务接口默认权限',
        options: [
            {
                label: '对业务线全部用户均不可访问',
                value: 0
            },
            {
                label: '对业务线全部用户均访问',
                value: 1
            }
        ]
    }
];
