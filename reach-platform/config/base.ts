/**
 * @file 基础常量配置文件
 */

// 获取全部数据时定义分页查询每页数据大小
export const PAGE_SIZE = 9999999;
export const OPERATION_URL = 'http://sepro.baidu-int.com/docs/operationbook/#/';

// 召回方式
export const RECALL_TYPE: {[propName: number]: string} = {
    0: '独立召回',
    1: 'query召回',
    2: 'id绑定召回',
};
export const URL_REG = /^((http|https):\/\/)+/;

// 标点转换规则：数组中第一个为中文标点，第二个为英文标点
export const CHAR_TRANS_RULES: string[][] = [
    ['’', "'"],
    ['‘', "'"],
    ['“', '"'],
    ['”', '"'],
    ['（', '('],
    ['）', ')'],
    ['，', ','],
    ['：', ':'],
    ['。', '.'],
    ['？', '?'],
    ['！', '!'],
    ['、', ','],
    ['；', ';']
];