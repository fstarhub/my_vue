/* 
vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations'
import actions from './actions'

import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  
  mutations,
  actions,

  modules: { // vuex多模块编程
    msite: msite,   // 子状态: {}
    user: user,     // 子状态: {}
    shop: shop,     // 子状态: {}
  }
})