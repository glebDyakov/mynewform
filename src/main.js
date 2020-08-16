
import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
//import VeeValidate, { Validator } from 'vee-validate';
//import ru from 'vee-validate/dist/locale/ru';

// Validator.localize('ru', ru);
// Vue.use(VeeValidate, {
//   locale: 'ru',
// });

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
