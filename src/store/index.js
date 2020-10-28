import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import inventory from './goods/inventory'
import logoManage from './logoManage'
import typeManage from './goods/typeManage'
import goodsRequest from './goods/goodsRequest'
import borrow from './goodsTotal/borrow'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    inventory,
    logoManage,
    typeManage,
    goodsRequest,
    borrow
  },
  getters
})

export default store
