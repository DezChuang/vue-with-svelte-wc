import Vue from 'vue'
import App from './App.vue'

import SvelteHelloWorld from 'svelte-hello-world-wc'
Vue.component(SvelteHelloWorld)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
