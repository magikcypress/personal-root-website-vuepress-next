import { defineClientConfig } from '@vuepress/client'
import Footer from './components/Footer.vue'
import MapTravel from './components/MapTravel.vue'
import ButtonTelegram from './components/ButtonTelegram.vue'
import ButtonBuyCoffee from './components/ButtonBuyCoffee.vue'
import GoLive from './components/GoLive.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('MapTravel', MapTravel)
    app.component('ButtonTelegram', ButtonTelegram)
    app.component('ButtonBuyCoffee', ButtonBuyCoffee)
    app.component('GoLive', GoLive)
  },
  setup() {},
  rootComponents: [Footer],
})
