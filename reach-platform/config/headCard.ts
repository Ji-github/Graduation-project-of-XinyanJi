export const HEAD_CARD_FORM = [
    {
        title: '卡片ID',
        propsName: 'id',
        placeHolder: '请输入卡片ID'
    },
    {
        title: '卡片名称',
        propsName: 'name',
        placeHolder: '请输入卡片名称'
    },
];

export const HEAD_CARD_CLUMNS = [
    {
        title: 'id',
        dataIndex: 'id',
        fixed: 'left',
        width: 90
    },
    {
        title: '卡片名称',
        dataIndex: 'name'
    },
    {
        title: '创建时间',
        dataIndex: 'insert_time',
        slots: {customRender: 'insert_time'}
    },
    {
        title: '编辑时间',
        dataIndex: 'update_time',
        slots: {customRender: 'update_time'}
    },
    {
        title: '操作',
        dataIndex: 'action',
        slots: {customRender: 'action'},
        fixed: 'right',
        width: 150
    }
];

export const HEAD_CARD_BTN_TYPE = 'HeadCardBtn';

export const HEAD_CARD_SEARCH_FORM = {
    id: '',
    title: '',
    insert_time: ''
};