import {createStore} from 'vuex';

export default createStore({
    state: {
        navSlider: {
            openKeys: ['sub1'],
            selectedKeys: []
        },
        menuManage: {
            // 默认选中顶层
            selectedSubMenu: {
                title: '顶层',
                id: '0'
            },
            // 默认选中顶层
            selectedParentMenu: {
                title: '顶层',
                id: '0'
            }
        },
        selectedBusiness: {
            bid: window.localStorage.getItem('bid') || '',
            bname: 'hot'
        },
        isRefreshMenu: false,
    },
    mutations: {
        updateOpenKeys(state, openKeys) {
            state.navSlider.openKeys = openKeys;
        },
        updateSelectedKeys(state, selectedKeys) {
            state.navSlider.selectedKeys = selectedKeys;
        },
        updateSelectedSubMenu(state, menu) {
            state.menuManage.selectedSubMenu = menu;
        },
        updateSelectedParentMenu(state, menu) {
            state.menuManage.selectedParentMenu = menu;
        },
        updateSelectedBusiness(state, business) {
            window.localStorage.setItem('bid', business.bid);
            state.selectedBusiness = business;
        },
        updateIsRefreshMenu(state, refreshMenu) {
            state.isRefreshMenu = refreshMenu;
        },
    },
    actions: {
    },
    modules: {
    }
});
