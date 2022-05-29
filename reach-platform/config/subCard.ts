/**
 * 自定义表单子卡列表column
 */
export const SUBCARD_COLUMN = [
    {
        title: 'id',
        dataIndex: 'id'
    },
    {
        title: '子卡名称',
        dataIndex: 'name',
        slots: {customRender: 'name'}
    },
    {
        title: '子卡英文名称',
        dataIndex: 'uname'
    },
    {
        title: '备注',
        dataIndex: 'description'
    },
    {
        title: '创建时间',
        dataIndex: 'insert_time',
        slots: {customRender: 'insertTime'}
    },
    {
        title: '操作',
        dataIndex: 'Action',
        slots: {customRender: 'action'}
    },
];

export const SUBCARD_VERSION_COLUMN = [
    {
        title: 'id',
        dataIndex: 'id'
    },
    {
        title: '子卡名称',
        dataIndex: 'name',
        slots: {customRender: 'name'}
    },
    {
        title: '子卡英文名称',
        dataIndex: 'uname'
    },
    {
        title: '版本号',
        dataIndex: 'version'
    },
    {
        title: '备注',
        dataIndex: 'description'
    },
    {
        title: '创建时间',
        dataIndex: 'insert_time',
        slots: {customRender: 'insertTime'}
    },
    {
        title: '操作',
        dataIndex: 'check',
        slots: {customRender: 'check'}
    },
];

export const CARDS_FORM = [
    {
        title: '子卡名称',
        propsName: 'name',
        placeHolder: '请输入子卡名称'
    },
    {
        title: '子卡英文名称',
        propsName: 'uname',
        placeHolder: '请输入组件英文名称'
    },
    {
        title: '备注',
        propsName: 'description',
        placeHolder: '请输入备注'
    },
];

export const CARDS_VERSION_FORM = [
    {
        title: '子卡名称',
        propsName: 'name',
        placeHolder: '请输入子卡名称'
    },
    {
        title: '备注',
        propsName: 'description',
        placeHolder: '请输入备注'
    },
];

export const CARDS_ADD_FORM = [
    {
        title: '子卡名称',
        propsName: 'name',
        placeHolder: '请输入子卡名称'
    },
    {
        title: '子卡英文名称',
        propsName: 'uname',
        placeHolder: '请输入子卡英文名称'
    },
    {
        title: '备注',
        propsName: 'description',
        placeHolder: '请输入子卡备注'
    }
];
