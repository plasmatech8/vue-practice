import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
