/**
 * @file 公共数据配置化文件
 */
export const COMMON_COLS = [
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
        dataIndex: 'Action',
        slots: {customRender: 'Action'},
        width: 150
    }
];