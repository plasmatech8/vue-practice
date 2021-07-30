import Vue from 'vue'
import VueRouter from 'vue-router'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueCompositionAPI from '@vue/composition-api'

import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCompositionAPI)

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
}).$mount('#app')
