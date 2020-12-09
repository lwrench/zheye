import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
  config.params = { ...config.params, icode: 'A20B42A673BD0A08' }
  if (config.data instanceof FormData) {
    config.data.append('icode', 'A20B42A673BD0A08')
  } else {
    config.data = { ...config.data, icode: 'A20B42A673BD0A08' }
  }
  return config
})

axios.get('/columns').then((res) => {
  console.log(res.data)
})

createApp(App).mount('#app')
