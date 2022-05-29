<template>
    <div :id="'amis-' + domId" class="amis-container"></div>
</template>

<script lang="ts">
/* globals amisRequire */
import {defineComponent} from 'vue';
import {getRandomStr} from '../utils';
import {load} from '../utils/asyncLoad';
import genCustomAmisRule from '../config/customAmisRule';

export default defineComponent({
    data() {
        return {
            domId: ''
        };
    },
    props: {
        name: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        controls: {
            type: Array
        },
        mode: {
            type: String,
            default: 'horizontal'
        },
        submitText: {
            type: String,
            default: '提交'
        },
        initData: {
            type: Object || Function
        },
        debug: {
            type: Boolean,
            default: true
        }
    },
    created() {
        this.domId = getRandomStr();
    },
    mounted() {
        load('amis').then(this.renderAmis);
    },
    computed: {
        amisContainerId(): string {
            return 'amis-' + this.domId;
        }
    },
    watch: {
        title() {
            this.renderAmis();
        },
        controls() {
            this.renderAmis();
        },
        mode() {
            this.renderAmis();
        },
        submitText() {
            this.renderAmis();
        },
        initData() {
            this.renderAmis();
        }
    },
    methods: {
        renderAmis() {
            if (!amisRequire) {
                console.error('amisRequire is not defined');
                return;
            }
            const amis = amisRequire('amis/embed');
            const amisLib = amisRequire('amis');

            const amisJson = {
                type: 'form',
                name: this.name,
                title: this.title,
                controls: this.controls,
                mode: this.mode,
                initApi: '',
                data: this.initData,
                onFinished: this.onFinished,
                onChange: this.onChange,
                onValidate: this.onValidate,
                debug: this.debug && Number(process.env.VUE_APP_AMIS_DEBUGER) === 1,
                // onInit?: (values: object, props: any) => any;
                // onReset?: (values: object) => void;
                // onSubmit?: (values: object, action: any) => any;
                // onFailed?: (reason: string, errors: any) => any;
                submitText: ''
            };

            // 生成业务自定义mis校验规则
            genCustomAmisRule(amisLib);

            const amisScoped = amis.embed('#' + this.amisContainerId, amisJson, {});
            this.$emit('saveAmisScope', {amisScoped: amisScoped, uname: this.name});
        },
        onFinished(values: any, action: any) {
            this.$emit('onFinished', values, action);
        },
        onChange(values: any, diff: any, props: any) {
            this.$emit('onChange', values, diff, props);
        },
        onValidate(values: any, form: any) {
            this.$emit('onValidate', values, form);
        },

        /** @public */
        triggerSubmit() {
            const btn = document.querySelector(`#${this.amisContainerId} form input[type=submit]`);
            btn && (btn as any).click();
        }
    }
});
</script>
<style lang="less">
    .amis-scope {
        background-color: #fff;
        &.amis-scope .a-Toast-wrap--topRight {
            top: 100px;
        }
    }
</style>
