// amis 自定义校验规则
type ValidateFn = (
    values: {[propsName: string]: any},
    value: any,
    arg1?: any,
    arg2?: any,
    arg3?: any
  ) => boolean;

interface Rules {
  name: string;
  fn: ValidateFn;
  message?: string;
}

const CustomRules: Rules[] = [
    {
        // 打标签唯一
        name: 'tagUnique',
        fn: (values, value) => {
            if (value.length > 0) {
                const notEmptyList = value.filter((item: any) => {
                    return item.label !== '';
                });
                if (notEmptyList.length > 1) {
                    return false;
                }
            }

            return true;
        },
        message: '打标签必须只有一个值为‘新’或‘热’'
    },
    {
        // 通用combo 总数校验规则
        name: 'comboLength',
        fn: (values, value, len) => {
            if (value?.length !== len) {
                return false;
            }
            return true;
        },
        message: 'combo 数目不正确'
    },
    {
        // logo 配置规则
        name: 'titleLogoRequired',
        fn: (values) => {
            if (!values.isMainTitle && !values.isTimer && values.isAddLogo) {
                return false;
            }
            return true;
        },
        message: '主副标题和倒计时至少存在一个时，才允许配置logo'
    },
    {
        // 金刚位 combo 总数校验规则
        name: 'tagComboLength',
        fn: (values, value) => {
            const lenMap = {
                0: 1,
                1: 8,
                2: 10
            };
            if (value?.length !== lenMap[values.tagStyle as keyof typeof lenMap]) {
                return false;
            }
            return true;
        },
        message: '金刚位数量和布局不符，请修改'
    },
    {
        // 当事人头卡 combo 总数校验规则
        name: 'partyComboLength',
        fn: (values, value) => {
            if (values.partySize < 3) {
                return value?.length === values.partySize;
            } else if (values.partySize === 3) {
                return value?.length >= 3 && value?.length <= 4;
            }
            return true;
        },
        message: '请检查当事人配置个数'
    },
    {
        // 金刚位 gif
        name: 'isAddGifUnique',
        fn: (values, value) => {
            if (value && value.filter((v: any) => v.isAddGif === true).length > 1) {
                return false;
            }
            return true;
        },
        message: '最多只允许一个金刚位添加动图'
    }
];

export default (amisLib: any) => {
    CustomRules.map(rule => {
        amisLib.addRule(
            rule.name,
            rule.fn,
            rule.message
        );
    });
};