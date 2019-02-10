import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
require('./config/vuetify');

import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './config/firebase';
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

import i18n from './config/i18n';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
