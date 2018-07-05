import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from 'vue-class-component';
import App from './App';
import Foo from './Foo';

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/foo', component: Foo},
  ]
});

let vue = new Vue({
  router,
  render: h => h(App)
});

vue.$mount('#app');
