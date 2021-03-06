import Vue from "vue";
import Vuex from "vuex";

import authModule from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    procesing: false,
    loaded: false,
    alert: {
      type: 'success',
      show: false,
      message: ''
    }
  },
  mutations: {
    setLoaded: (state, loaded) => {
      state.loaded = loaded;
    },
    steAlertMessage: (state, data) => {
      state.alert.type = data.type;
      state.alert.show = data.show;
      state.alert.message = data.message;

      setTimeout(() => {
        state.alert.type = 'success';
        state.alert.show = false;
        state.alert.message = '';
      }, data.timeout);
    }
  },
  modules: {
    authModule
  },
  actions: {

  }
});
