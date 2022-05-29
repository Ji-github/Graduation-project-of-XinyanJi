export const HOT_SEARCHFORM = [
    {
        title: '事件ID',
        propsName: 'id',
        placeHolder: '请输入事件id'
    },
    {
        title: '标题',
        propsName: 'title',
        placeHolder: '请输入标题'
    },
    {
        title: '事件query',
        propsName: 'query',
        placeHolder: '请输入事件query'
    },
    {
        title: '状态',
        propsName: 'status',
        placeHolder: '请选择状态',
        type: 'select',
        options: [
            {
                label: '保存成功',
                value: '1'
            },
            {
                label: '上线成功',
                value: '7'
            }
        ]
    },
];

export const HOT_COLUMNS = [
    {
        title: '事件ID',
        dataIndex: 'id',
        fixed: 'left',
        width: 100
    },
    {
        title: '标题',
        width: 200,
        dataIndex: 'title',
    },
    {
        title: '正式/测试',
        dataIndex: 'isTest',
        width: 200,
        slots: {customRender: 'isTest'}
    },
    {
        title: '召回Query',
        dataIndex: 'query',
        width: 200
    },
    {
        title: '上线时间',
        dataIndex: 'insert_time',
        width: 200,
        slots: {customRender: 'insert_time'}
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: 200,
        slots: {customRender: 'status'}
    },
    {
        title: '类目',
        width: 200,
        dataIndex: 'category',
    },
    {
        title: '下线时间',
        dataIndex: 'update_time',
        width: 200,
        slots: {customRender: 'update_time'},
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: 300,
        fixed: 'right',
        slots: {customRender: 'action'}
    },
];

export const HOT_SEARCH_FORM = {
    id: '',
    title: '',
    query: '',
    status: undefined,
    device_type: undefined,
    category: undefined,
    page_num: 1
};

export const btnType = 'EventListBtn';

export const powerType = {
    '1': '保存成功',
    '7': '上线成功'
};

export const eventConfigRules = {
    isTest: [{
        required: true,
        trigger: ['change', 'blur'],
        message: '正式/测试不能为空',
        type: 'number'
    }],
    title: [{
        required: true,
        trigger: ['change', 'blur'],
        message: '事件标题不能为空'
    }],
    query: [{
        required: true,
        trigger: ['change', 'blur'],
        message: '召回Query不能为空'
    }]
}