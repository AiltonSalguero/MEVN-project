import Vue from 'vue';
import App from './components/App.vue' //importa el .js de vue

new Vue({
    render: h => h(App)
}).$mount('#app'); //Lo monta en un div con id: app