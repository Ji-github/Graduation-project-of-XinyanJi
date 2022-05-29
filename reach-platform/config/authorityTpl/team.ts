import {COMMON_COLS} from './common';

export const TEAM_TABLE_COLS = [
    {
        title: '团队ID',
        dataIndex: 'id',
    },
    {
        title: '团队名称',
        dataIndex: 'name',
    },
    {
        title: '备注',
        dataIndex: 'remark',
    },
    ...COMMON_COLS
];

export const TEAM_FORM = [
    {
        title: '团队id',
        propsName: 'id',
        placeHolder: '请输入团队ID'
    },
    {
        title: '团队名称',
        propsName: 'name',
        placeHolder: '请输入团队名称'
    },
];

export const TEAM_ACTION = [
    {
        actionName: '编辑',
        type: 'edit',
        api: '/ocp/team/update'
    },
    {
        actionName: '查找',
        type: 'search',
        api: '/ocp/team/list',
        notShow: true
    }
];

export const TEAM_SEARCH_FORM = {
    name: '',
    id: '',
    insert_time: ''
};

export const FORM_RULES = {
    name: [
        {
            required: true,
            message: '团队名称不能为空',
            trigger: ['change', 'blue']
        }
    ]
};

export const TEAM_ADD_FORM = [
    {
        title: '团队名称',
        propsName: 'name',
        placeHolder: '请输入团队名称'
    },
    {
        title: '团队备注',
        propsName: 'remark',
        placeHolder: '请输入团队备注',
        type: 'textarea'
    }
];