export const CUSTOM_FORM_FORM = [
    {
        title: '组件ID',
        propsName: 'id',
        placeHolder: '请输入组件id',
    },
    {
        title: '组件名称',
        propsName: 'name',
        placeHolder: '请输入组件名称',
    },
    {
        title: '组件英文名称',
        propsName: 'uname',
        placeHolder: '请输入组件英文名称',
    }
];

export const CUSTOM_FORM_CLUMNS = [
    {
        title: '组件ID',
        dataIndex: 'id'
    },
    {
        title: '组件名称',
        dataIndex: 'name'
    },
    {
        title: '组件英文名称',
        dataIndex: 'uname'
    },
    {
        title: '组件备注',
        dataIndex: 'remark'
    },
    {
        title: '操作',
        dataIndex: 'action',
        slots: {customRender: 'action'},
    }
];

export const CUSTOM_FORM_SEARCHFORM = {
    id: '',
    title: '',
    uname: ''
};

export const btnType = 'CustomBtn';

export const CUSTOM_FORM_ADD_FORM = [
    {
        title: '组件名称',
        propsName: 'title',
        placeHolder: '请输入组件名称'
    },
    {
        title: '组件英文名称',
        propsName: 'uname',
        placeHolder: '请输入组件英文名称'
    },
    {
        title: '组件备注',
        propsName: 'remark',
        placeHolder: '请输入组件备注'
    },
    {
        title: '组件类型',
        propsName: 'type',
        placeHolder: '请选择组件类型',
        type: 'select',
        options: [
            {
                label: '局部渲染',
                value: '0'
            },
            {
                label: '全局渲染',
                value: '1'
            },
        ]
    },
];