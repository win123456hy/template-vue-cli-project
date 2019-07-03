import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './store/index'
import axios from 'axios'
import moment from 'moment'
import './assets/less/app.less';

Vue.config.productionTip = false

const envElement = document.getElementById('env');
const env = JSON.parse(envElement.innerHTML);

axios.interceptors.request.use(function (config) {
  console.log("REQUEST: ", config.url);
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log("error: ", error);
  return Promise.reject(error);
});

Vue.prototype.$env = env;
Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
