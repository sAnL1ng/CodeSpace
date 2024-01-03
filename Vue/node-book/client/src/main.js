import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import 'amfe-flexible'; // 自动设置根字体大小
import './assets/style/reset.css';

import { Button,Form, Field, CellGroup } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(router)

// 注册需要的组件
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);


app.mount('#app');
