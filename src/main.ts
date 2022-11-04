import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import '@/assets/css/index.less'
import {router} from '@/router'
import { pinia } from './store'
import { registerIcons } from './global/registerIcons'
import { useLoginStore } from './store/login/login'

const app = createApp(App)
app.use(pinia)

const loginStore = useLoginStore()
loginStore.loadLoaclCacheAction()

app.use(router)
app.use(registerIcons)
app.mount('#app')
