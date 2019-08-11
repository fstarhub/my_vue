import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router'
import Header from 'components/Header/Header.vue'
import Star from 'components/Star/Star.vue'

import store from './store'
import './api'
// import './mock/mock-server'
//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)

Vue.component(Button.name,Button)

Vue.config.productionTip = false//console 中没有打印生产环境输出提示

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

/* new Vue({
  el:'#App',
  components:{
    App
  },
  template:'<App/>'
}) */
