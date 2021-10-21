import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import './assets/css/index.css';

// 工具npm组件
import lodash from 'lodash';

// 封装的router和store
import myRouter from './router';
import myStore from './store';

// ElementUI 相关
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// use组件
Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 扩展到Vue实例原型上
Vue.prototype._ = lodash;

new Vue({
  render: h => h(App),
  router: myRouter,
  store: myStore,
}).$mount('#app');
