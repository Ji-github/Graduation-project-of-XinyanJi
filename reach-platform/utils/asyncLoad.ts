/**
 * 用于异步加载 var 或 umd 类型的模块
 */

import loadJs from 'loadjs';

// 模块名，对应所有要加载的文件
const MODULE_CONFIG = {
    amis: [
        'https://bce.bdstatic.com/fex/amis-v2/sdk_6e3cfae.css',
        'https://bce.bdstatic.com/fex/amis-v2/sdk_41e260d.js'
    ],
    amisEditorSDK: ['https://mms-voice-fe.cdn.bcebos.com/ocp-ukfu16mojto/main.js']
    // amisEditorSDK: ['http://0.0.0.0:8999/output/main.js']
} as {[name: string]: string[]};

const loadedModules = new Set();
const loadingModules = new Map() as Map<string, Function[]>;


// loadjs 会重复加载同一个文件
// 这里干预一下
export function load(moduleName: string) {
    if (!MODULE_CONFIG[moduleName]) {
        return Promise.reject('module not found!');
    }

    if (loadedModules.has(moduleName)) {
        return Promise.resolve();
    }

    const loadingArr = loadingModules.get(moduleName);
    if (loadingArr) {
        return new Promise((resolve, reject) => {
            loadingArr.push(resolve);
        });
    }

    loadingModules.set(moduleName, []);
    return loadJs(MODULE_CONFIG[moduleName], {returnPromise: true})
        .then(() => {
            loadedModules.add(moduleName);

            const loadingArr = loadingModules.get(moduleName);
            loadingArr && loadingArr.forEach(item => item());
            loadingModules.delete(moduleName);
        });
}