// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUi);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
  // import { InfiniteScroll } from 'mint-ui';
  // Vue.use(InfiniteScroll);
/* eslint-disable no-new */
import store from './store';
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
