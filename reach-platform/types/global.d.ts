// eslint-disable-next-line @typescript-eslint/ban-types
declare let amisRequire: undefined | Function;
declare let amisEditorSDK: undefined | {
    setup(opt: any): void;
};
declare module 'amis-editor-sdk';
declare module 'amis-editor-sdk/dist/static/media/*.css';
declare module 'https://mms-voice-fe.cdn.bcebos.com/ocp/*';
declare module 'https://code.bdstatic.com/npm/amis-editor-sdk*';
declare module 'https://bce.bdstatic.com/fex/amis-v2/*';
declare module 'vue-json-diff'
