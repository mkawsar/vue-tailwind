// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue';
import router from './router'
import './assets/css/tailwind.css'

Vue.config.productionTip = false;


const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
window.app = app;
