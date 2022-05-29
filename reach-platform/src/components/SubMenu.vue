<template>
    <div v-if="!data.is_hidden">
        <a-sub-menu v-if="data.children && data.status <= status" :key="onlyId">
            <template #title>
                <span>
                    <component :is="data.icon ? data.icon + '-outlined' : ''"/>
                    <span>{{data.title}}</span>
                </span>
            </template>
            <template v-for="item in data.children" :key="item.id">
                <self-menu :data="item"/>
            </template>
        </a-sub-menu>
        <div v-else-if="isShow(data)" @click="clickMenu(data)">
            <a-menu-item :key="onlyId">
                <router-link
                    :to="{
                        name: handleName(data.url),
                        query: handleQuery(data.url)
                    }"
                >
                    <component :is="data.icon ? data.icon + '-outlined' : ''"/>{{ data.title }}
                </router-link>
            </a-menu-item>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

export default defineComponent({
    name: 'self-menu',
    props: {
        data: {
            required: true,
            type: Object as PropType<{[key: string]: any}>,
        }
    },
    data() {
        return {
            routerList: [] as string[],
            status: window.localStorage.getItem('status') || 0
        };
    },
    computed: {
        onlyId(): string {
            return `${this.data.title}${this.data.bid}`;
        },
    },
    mounted() {
        this.dealRoute(this.$route.matched);
    },
    methods: {
        clickMenu(data: any): void {
            // @ts-ignore
            this.$store.commit('updateSelectedBusiness', {
                bid: data.bid,
                bname: data.bname
            });
        },
        // 处理menu
        handleName(name: string): string {
            if ((name || '').includes('/')) {
                return name.split('/')[0] || '';
            } else {
                return name;
            }
        },
        handleQuery(name: string): any {
            if ((name || '').includes('/')) {
                return {
                    uname: name.split('/')[1] || '',
                };
            } else {
                return {};
            }
        },
        dealRoute(routeList: any) {
            routeList.forEach((item: any) => {
                if (item.children?.length > 0) {
                    this.dealRoute(item.children);
                } else {
                    this.routerList.push(item.name);
                }
            });
        },
        isShow(data: any) {
            const status = window.localStorage.getItem('status') || 0;
            return status >= data.status;
        }
    }
});
</script>
