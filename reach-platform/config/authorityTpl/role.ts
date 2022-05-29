/**
 * @file 角色管理数据配置化文件
 */
import {COMMON_COLS} from './common';

export const ROLE_TABLE_COLS = [
    {
        title: '角色ID',
        dataIndex: 'id',
    },
    {
        title: '角色名称',
        dataIndex: 'name',
    },
    {
        title: '角色备注',
        dataIndex: 'remark',
        slots: {customRender: 'content'}
    },
    ...COMMON_COLS
];

export const ROLE_FORM = [
    {
        title: '角色ID',
        propsName: 'id',
        placeHolder: '请输入角色ID'
    },
    {
        title: '角色名称',
        propsName: 'name',
        placeHolder: '请输入角色名称'
    },
];

export const ROLE_ACTION = [
    {
        actionName: '编辑',
        type: 'edit',
        api: '/role/update'
    },
    {
        actionName: '删除',
        type: 'delete',
        api: '/role/delete'
    },
    {
        actionName: '查找',
        type: 'search',
        api: '/role/list',
        notShow: true
    }
];

export const FORM_RULES = {
    name: [
        {
            required: true,
            message: '业务名称不能为空',
            trigger: ['change', 'blur']
        },
    ],
    powerids: [
        {
            required: true,
            message: '权限关联不能为空',
            trigger: ['change', 'blur'],
            type: 'array'
        }
    ],
    team_ids: [
        {
            required: true,
            message: '团队关联不能为空',
            trigger: ['change', 'blur'],
            type: 'array'
        }
    ]
};

export const ROLE_SEARCH_FORM = {
    id: '',
    name: '',
    insert_time: ''
};

export const ROLE_DRAWER_FORM = [
    {
        title: '角色ID',
        propsName: 'id',
    },
    {
        title: '角色名称',
        propsName: 'name',
    },
    {
        title: '角色备注',
        propsName: 'remark',
    },
    {
        title: '创建时间',
        propsName: 'insert_time',
    },
    {
        title: '编辑时间',
        propsName: 'update_time',
    }
];

export const ROLE_ADD_FORM = [
    {
        title: '角色名称',
        propsName: 'name',
        placeHolder: '请输入角色名称'
    },
    {
        title: '角色备注',
        propsName: 'remark',
        placeHolder: '请输入角色备注'
    },
    {
        title: '邮件组关联',
        propsName: 'email_groups',
        placeHolder: '请输入邮件组邮箱，多个邮箱请用换行隔开',
        type: 'textarea'
    },
    {
        title: '权限关联',
        propsName: 'powerids',
        type: 'checkbox',
        options: []
    },
    {
        title: '团队关联',
        propsName: 'team_ids',
        type: 'checkbox',
        options: []
    }
];