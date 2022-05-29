/**
 * 组件列表column
 */
export const COMPONENTS_COLUMN = [
    {
        title: 'id',
        dataIndex: 'id'
    },
    {
        title: '组件名称',
        dataIndex: 'name',
        slots: {customRender: 'name'}
    },
    {
        title: '组件英文名称',
        dataIndex: 'uname',
    },
    {
        title: '组件备注',
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

export const COMPONENTS_VERSION_COLUMN = [
    {
        title: 'id',
        dataIndex: 'id'
    },
    {
        title: '组件名称',
        dataIndex: 'name',
        slots: {customRender: 'name'}
    },
    {
        title: '组件英文名称',
        dataIndex: 'uname',
    },
    {
        title: '版本号',
        dataIndex: 'version'
    },
    {
        title: '组件备注',
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

export const COMPONENTS_FORM = [
    {
        title: '组件ID',
        propsName: 'id',
        placeHolder: '请输入组件ID'
    },
    {
        title: '组件名称',
        propsName: 'name',
        placeHolder: '请输入组件名称'
    },
    {
        title: '组件英文名称',
        propsName: 'uname',
        placeHolder: '请输入组件英文名称'
    }
];

export const FORM_VERSION_FORM = [
    {
        title: '组件ID',
        propsName: 'id',
        placeHolder: '请输入组件ID'
    },
    {
        title: '组件名称',
        propsName: 'name',
        placeHolder: '请输入组件名称'
    },
];

export const COMPONENTS_ADD_FORM = [
    {
        title: '组件名称',
        propsName: 'name',
        placeHolder: '请输入组件名称'
    },
    {
        title: '组件英文名称',
        propsName: 'uname',
        placeHolder: '请输入组件英文名称',
    },
    {
        title: '组件备注',
        propsName: 'description',
        placeHolder: '请输入组件备注'
    }
];