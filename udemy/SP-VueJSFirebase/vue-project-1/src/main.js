import Vue from 'vue';
import App from './App.vue';

// create global filter
Vue.filter('snippet', val => {
  const size = 50;
  if (!val || typeof val != 'string') return '';
  if (val.length > size) val = val.slice(0, size).concat(' [...]');
  return val;
});

new Vue({
  el: '#app',
  render: h => h(App)
});
