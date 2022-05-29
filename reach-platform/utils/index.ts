import moment, {Moment} from 'moment';

export function fnDealTime(time: Moment[], index: number) {
    if (time && time.length > 0) {
        return moment(time[index]).unix();
    }
    return '';
}

export function getRandomStr() {
    return Math.random().toString(32).substr(2, 12);
}

export function formatSchema(schema: any) {
    if (Array.isArray(schema.body) && schema.body.length > 0) {
        schema.body = schema.body[0];
    }
}

export function parseSchema(schema: any, propsName: string) {
    formatSchema(schema);
    const type = schema.body.type;
    if (type === 'form') {
        return schema.body[propsName];

    }
    return '';
}