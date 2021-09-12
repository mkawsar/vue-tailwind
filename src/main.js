import Vue from 'vue'
import _ from 'lodash';
import App from '@/App.vue';
import router from '@/router'
import '@/assets/css/tailwind.css'
import VueNotify from 'vue-notifyjs';

import localStorage from '@/services/localStorage';
import notification from '@/services/notification';

Vue.config.productionTip = false;

require('@/bootstrap');

Vue.use(VueNotify);

Vue.prototype.$lodash = _;

Vue.prototype.$localStorage = localStorage;
Vue.prototype.$notification = notification;

window.$ = window.jQuery = require('jquery');

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
window.app = app;
