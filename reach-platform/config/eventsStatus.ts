export enum EventStatusEnum {
    Hold = 1,
    OfflineSucceed = 7,
}

/**
 * 事件状态
 */
export const EVENT_STATUS_LIST: Array<{text: string, value: number}> = [
    {
        text: '保存成功',
        value: EventStatusEnum.Hold,
    },
    {
        text: '上线成功',
        value: EventStatusEnum.OfflineSucceed,
    },
];
