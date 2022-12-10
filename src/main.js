import Vue from 'vue'
import App from './App.vue'

import { createPinia, PiniaVuePlugin } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import router from './router'

/* add icons to the library */
library.add(fas)
library.add(fab)
library.add(far)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* Setup instance of Pinia */
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

/* Setup Axios */
axios.defaults.baseURL = 'https://futdb.app/api/';
axios.defaults.headers.common['X-AUTH-TOKEN'] = process.env.VUE_APP_FUTDB_TOKEN;
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  pinia
}).$mount('#app')
