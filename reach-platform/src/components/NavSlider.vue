<template>
    <a-layout-sider
        collapsible
        class="layout-sider"
    >
        <div class="logo"></div>
        <a-menu
            v-model:selectedKeys="selectedKeys"
            v-model:openKeys="openKeys"
            mode="inline"
            theme="dark"
            class="menu-list"
            :style="{height: bHeight + 'px'}"
        >
            <sub-menu
                v-for="item in list" :key="item.id"
                :data="item"
            />
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
import {ref, defineComponent, computed} from 'vue';
import {useStore} from 'vuex';
import SubMenu from './SubMenu.vue';
import DIRECTORY_LIST from '@/config/directory';

export default defineComponent({
    data() {
        return {
            list: DIRECTORY_LIST,
            status: window.localStorage.getItem('status') || 0
        };
    },
    computed: {
        bHeight() {
            return document.body.clientHeight;
        },
    },
    async mounted() {
    },
    methods: {
    },
    setup() {
        const store = useStore();

        return {
            collapsed: ref<boolean>(false),
            openKeys: computed({
                get: () => store.state.navSlider.openKeys,
                set: value => store.commit('updateOpenKeys', value)
            }),
            selectedKeys: computed({
                get: () => store.state.navSlider.selectedKeys,
                set: value => store.commit('updateSelectedKeys', value)
            })
        };
    },
    components: {
        SubMenu
    }
});
</script>

<style lang="less" scoped>
.menu-list {
    border-right: 0;
}
.logo {
    background-image: url(../assets/logoAndName.png);
    background-size: 82%;
    background-position: center;
    background-repeat: no-repeat;
    height: 64px;
    cursor: pointer;
}
.layout-sider {
    width: 200px;
    background: #00162A;
    position: 'fixed';
    left: 0;
    overflow: auto;
}
</style>