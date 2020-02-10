import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Box from './Box.vue'

Vue.config.productionTip = false

new Vue(
    {
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
    }
)

new Vue(
    {
  el: '#basket',
  components: { Box },
  template: '<Box/>'
    }
)