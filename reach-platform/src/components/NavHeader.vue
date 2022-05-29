<template>
    <a-layout-header class="header layout-top-side">
        <div class="tools">
            <a class="guide" href="/guide">首页</a>
            <img src="@/assets/avator.jpg" alt="">
            <a @click="toggleImageToolLayer">{{username}}</a>
            <a
                class="login-out"
                @click="handleOut"
            >注销登陆</a>
        </div>
    </a-layout-header>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    data() {
        return {
            username: ''
        }  
    },
    setup() {
        const isShowImageToolLayer = ref(false);
        const toggleImageToolLayer = () => {
            isShowImageToolLayer.value = !isShowImageToolLayer.value;
        };
        return {
            isShowImageToolLayer,
            toggleImageToolLayer
        };
    },
    mounted() {
        const urlHash = this.$router.currentRoute.value.hash;
        if (urlHash === '#imagetool') {
            this.isShowImageToolLayer = true;
        }
        this.username = window.localStorage.getItem('username') || '';
    },
    methods: {
        // 点击logo跳转到首页
        goToHome(): void {
            this.$router.push({
                path: '/'
            });
        },
        handleOut() {
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('status');
            window.location.pathname = '/';
        }
    }
});
</script>
<style lang="less">
.layout-top-side {
    .guide {
        margin: 0 20px;
    }
    .tools {
        > a {
            color: #fff;
        }

        float: right;
        width: 250px;
        > img {
            width: 25px;
            height: 25px;
            margin-right: 10px;
            border-radius: 4px;
        }
        .login-out {
            margin-left: 10px;
        }
    }
}
.header{
    width: calc(100% - 200px);
    position: fixed;
    top: 0px;
    z-index: 3;
    padding: 0 10px!important;
}
.tool-frame {
    width: 100%;
    height: 100vh;
    margin-top: -24px;
    border: none;
}

.site-layout-background {
    background: #fff;
}
</style>