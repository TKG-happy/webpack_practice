import './reactApp.jsx';
import Vue from 'vue';
import VueApp from './VueApp.vue';
import my from './my.js';
import '../stylesheets/main.scss';

new Vue({
  el: '#vue-root',
  render: (h) => h(VueApp),
});

console.log('webpack');
my();
