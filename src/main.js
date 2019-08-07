import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from 'components/Header/Header.vue'


Vue.component('Header',Header)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

/* new Vue({
  el:'#App',
  components:{
    App
  },
  template:'<App/>'
}) */
