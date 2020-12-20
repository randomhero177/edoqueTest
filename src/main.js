import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store/index';
import router from '@/router/index';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import '@/mixins/getWeather';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { locale });


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
