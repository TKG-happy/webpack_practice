import './reactApp.jsx';
import Vue from 'vue';
import VueApp from './VueApp.vue';
import my from './my.js';
import add from './add.ts';
import '../stylesheets/main.scss';

new Vue({
  el: '#vue-root',
  render: (h) => h(VueApp),
});

console.log(add(3, 9));
console.log('webpack');
my();
