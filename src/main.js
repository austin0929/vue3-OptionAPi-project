import './assets/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$filters = {
    date(time) {
        const localDate = new Date(time * 1000);
        return localDate.toLocaleDateString();
    },
};

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    // validateOnInput: true
})

setLocale('zh_TW')

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2);
app.use(VueAxios, axios)

app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)
app.component('VField', Field)
app.component('VueLoading', Loading)
app.mount('#app')
