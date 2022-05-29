import {getComponent, COMPONENT_API} from '@/api/component';

// 公共组件shcema
let customSchema = '';
let targetSchema = '';

/**
 * 如果有配置adaptor就使用用户配置的
 * @param params 当前组件
 * @param render_schema render_schema字符串
 */
function replaceAdaptorFn(params: any, render_schema: string) {
    if (params.customParams.replaceAdaptor) {
        // 如果有replaceAdaptor参数将公共组件的render_schema替换为用户配置的
        let replaceAdaptor = params.customParams.replaceAdaptor.replaceAll('"', '\\"');
        replaceAdaptor = replaceAdaptor.replaceAll('\n', '\\n');
        render_schema = render_schema.replace(/"adaptor.*?};\\n"/, `"adaptor":"${replaceAdaptor}"`);
    }
    return render_schema;
}

/**
 * 通过uname获取组件信息
 * @param uname 英文名
 * @returns
 */
async function getComponentSchema(uname: string) {
    return await getComponent(
        {uname},
        COMPONENT_API
    );
}

// TO-DO
// 热点事件中新添加组件第一次渲染问题
//

/**
 * 替换amis公共组件
 * @param controls controls数组
 */
export function replaceCommonElement(controls: any[], uname: string) {
    controls.forEach(async (item: any, index: number) => {
        if (item.name === 'custom-component') {
            customSchema = JSON.stringify(item);
            // 请求公共组件
            const result = await getComponentSchema(item.name);
            // 请求目标组件
            // const targetResult = await getComponentSchema(uname);
            // 拿到目标组件的render_schema
            // const targetJsonSchema = JSON.parse(targetResult.data.render_schema);
            let amisControls = [] as any[];
            let render_schema = result.data.render_schema;
            // 将公共组件的render_schema转化为对象保存
            // const originJsonSchema = JSON.parse(render_schema);
            // 将目标组件的data赋值到中间量
            // originJsonSchema.body.data = targetJsonSchema.body.data;
            // 将中间量转化为字符串赋值给公共组件的render_schema 从而完成data的赋值
            // render_schema = JSON.stringify(originJsonSchema);
            if (item.customParams.replaceParamsName) {
                render_schema = render_schema.replaceAll('_custom', item.customParams.replaceParamsName);
            } else {
                // 将所有_custom相关的都替换为空
                const regex = /(_custom(\.|\:)?)/g;
                render_schema = render_schema.replaceAll(regex, '');
            }
            if (item.customParams.replaceAdaptor) {
                // 如果有配置adaptor替换
                render_schema = replaceAdaptorFn(item, render_schema);
            }
            amisControls = JSON.parse(render_schema).body.controls;
            targetSchema = JSON.stringify(amisControls[0]);
            controls[index] = amisControls[0];
            console.log(777);
        }
        if (item.controls && item.controls.length > 0) {
            replaceCommonElement(item.controls, uname);
        }
    });
}

export function replaceTargetElement(controls: any) {
    // 拿到当前的controls保存
    let jsonControls = JSON.stringify(controls);
    // 将现在的headUrlNaParams更改为_custom
    jsonControls = jsonControls.replaceAll('headUrlNaParams', '_custom');
    // 将controls还原为用户当前配置的
    controls = JSON.parse(jsonControls.replace(targetSchema, customSchema));
    return controls;
}
