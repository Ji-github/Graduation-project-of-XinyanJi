export const CATEGORY_CLOMNS = [
    {
        title: '类目名称',
        dataIndex: 'name',
    },
    {
        title: '来源',
        dataIndex: 'source',
        slots: {customRender: 'source'},
    },
    {
        title: '操作',
        dataIndex: 'action',
        slots: {customRender: 'action'},
    },
];