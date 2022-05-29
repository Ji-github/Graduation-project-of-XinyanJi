/**
 * @file 菜单管理数据配置化文件
 */
import {TableColumn} from '../../types/api/base';

export const MENU_COLS: TableColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        slots: {customRender: 'id'},
        width: 120
    },
    {
        title: '名称',
        dataIndex: 'title',
    },
    {
        title: '说明',
        dataIndex: 'remark',
        slots: {customRender: 'remark'}
    },
    {
        title: '创建时间',
        dataIndex: 'insert_time',
        slots: {customRender: 'insertTime'}
    },
    {
        title: '操作',
        dataIndex: 'Action',
        slots: {customRender: 'Action'},
        width: 150
    }
];
