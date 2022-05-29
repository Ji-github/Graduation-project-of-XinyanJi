import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from '@baidu/magic-cube-design-next';
import '@baidu/magic-cube-design-next/dist/antd.css';
import '@/styles/index.less';
// import '@/styles/theme.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
import ECharts from 'vue-echarts';
import {use} from 'echarts/core';


// import ECharts modules manually to reduce bundle size
import {
    CanvasRenderer
} from 'echarts/renderers';
import {
    BarChart
} from 'echarts/charts';
import {
    GridComponent,
    TooltipComponent
} from 'echarts/components';

use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent
]);

moment.locale('zh-cn');
const app = createApp(App);
app.component('v-chart', ECharts);
app.use(Antd);
app.use(store);
app.use(router);
app.mount('#app');
