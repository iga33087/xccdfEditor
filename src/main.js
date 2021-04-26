import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AsyncComputed from 'vue-async-computed'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-TW'
import $global from '@/assets/js/global.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.scss';

Vue.use(AsyncComputed)
Vue.use(ElementUI,{locale});
Vue.prototype.$global=$global
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
