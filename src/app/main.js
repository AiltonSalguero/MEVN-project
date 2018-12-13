import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'

//new Vue({
//    render: h => h(App)
//}).$mount('#app'); //Lo monta en un div con id: app

Vue.config.productionTip = false

/* eslint-disable no-new 
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})*/

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})