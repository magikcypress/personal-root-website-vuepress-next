import { defineClientConfig } from '@vuepress/client'
import Footer from './components/Footer.vue'
import MapTravel from './components/MapTravel.vue'
import Button from './components/Button.vue'
import ButtonTelegram from './components/ButtonTelegram.vue'
import ButtonBuyCoffee from './components/ButtonBuyCoffee.vue'
import ButtonGoLive from './components/ButtonGoLive.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('MapTravel', MapTravel)
    app.component('Button', Button)
    app.component('ButtonTelegram', ButtonTelegram)
    app.component('ButtonBuyCoffee', ButtonBuyCoffee)
    app.component('ButtonGoLive', ButtonGoLive)
  },
  setup() {},
  rootComponents: [Footer],
})
