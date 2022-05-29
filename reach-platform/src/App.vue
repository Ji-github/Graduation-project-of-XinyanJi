<template>
    <a-config-provider :locale="locale">
        <router-view/>
    </a-config-provider>
</template>
<script lang="ts">
import zhCN from '@baidu/magic-cube-design-next/lib/locale-provider/zh_CN';
export default {
    data() {
        return {
            locale: zhCN,
        };
    }
};
</script>
<style lang="less">
</style>