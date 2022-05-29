import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
        redirect: '/guide',
        children: [
            // 首页
            {
                path: 'guide',
                component: () => import('@/views/Guide.vue'),
                name: 'guide',
                meta: {
                    icon: 'list',
                    title: 'guide'
                }
            },
            // 热点事件
            {
                path: 'event-list',
                component: () => import('@/views/Home/event-manage/List.vue'),
                name: 'eventList',
                meta: {
                    icon: 'list',
                    title: 'eventList'
                }
            },
            // 热点配置
            {
                path: 'event-config',
                component: () => import('@/views/Home/event-manage/EventConfig.vue'),
                name: 'EventConfig',
                meta: {
                    icon: 'list',
                    title: 'EventConfig'
                }
            },
            // 热榜事件
            {
                path: 'hot-top',
                component: () => import('@/views/Home/hot-top/index.vue'),
                name: 'hotTop',
                meta: {
                    icon: 'list',
                    title: 'hotTop'
                }
            },
            // 头卡卡片管理
            {
                path: 'head-card',
                component: () => import('@/views/Home/head-card/index.vue'),
                name: 'headCard',
                meta: {
                    icon: 'list',
                    title: 'headCard'
                }
            },
            // 表单
            {
                path: 'custom-form',
                component: () => import('@/views/Home/custom-form/index.vue'),
                name: 'customForm',
                meta: {
                    icon: 'list',
                    title: 'customForm'
                }
            },
            {
                path: 'add-form',
                component: () => import('@/views/Home/custom-form/AddForm.vue'),
                name: 'addForm',
                meta: {
                    icon: 'list',
                    title: 'addForm'
                }
            },
            // 类目管理
            {
                path: 'category',
                component: () => import('@/views/Home/category/index.vue'),
                name: 'category',
                meta: {
                    icon: 'list',
                    title: 'category'
                }
            },
            // 我的业务管理
            {
                path: 'business-manage',
                component: () => import('@/views/Home/authority-manage/index.vue'),
                name: 'businessManage',
                meta: {
                    icon: 'list',
                    title: 'businessManage'
                },
                props: {name: 'businessManage'}
            },
            // 接口管理
            {
                path: 'interface-manage',
                component: () => import('@/views/Home/authority-manage/index.vue'),
                name: 'interfaceManage',
                meta: {
                    icon: 'list',
                    title: 'interfaceManage'
                },
                props: {name: 'interfaceManage'}
            },
            // 用户管理
            {
                path: 'businessuser-manage',
                component: () => import('@/views/Home/authority-manage/index.vue'),
                name: 'businessuserManage',
                meta: {
                    icon: 'list',
                    title: 'businessuserManage'
                },
                props: {name: 'businessuserManage'}
            },
            // 团队管理
            {
                path: 'team-manage',
                component: () => import('@/views/Home/authority-manage/index.vue'),
                name: 'teamManage',
                meta: {
                    icon: 'list',
                    title: 'teamManage'
                },
                props: {name: 'teamManage'}
            },
            // 无权限页面
            {
                path: 'no-permission',
                component: () => import('@/views/NoPermission.vue'),
                name: 'noPermission',
                meta: {
                    icon: 'list',
                    title: 'noPermission'
                },
                props: {name: 'noPermission'}
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
