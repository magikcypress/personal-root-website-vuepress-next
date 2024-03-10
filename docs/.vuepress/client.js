import { defineClientConfig } from 'vuepress/client'
import Footer from './components/Footer.vue'
import MapTravel from './components/MapTravel.vue'
import Button from './components/Button.vue'
import ButtonTelegram from './components/ButtonTelegram.vue'
import ButtonBuyCoffee from './components/ButtonBuyCoffee.vue'
import ButtonGoLive from './components/ButtonGoLive.vue'
import Blog from './components/Blog.vue'
import DonutChart from './components/DonutChart.vue'
import LineChart from './components/LineChart.vue'
import OpenAi from './components/OpenAi.vue'
// import Layout from './theme/layouts/Layout.vue'
// import NotFound from './theme/layouts/NotFound.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('MapTravel', MapTravel)
    app.component('Button', Button)
    app.component('ButtonTelegram', ButtonTelegram)
    app.component('ButtonBuyCoffee', ButtonBuyCoffee)
    app.component('ButtonGoLive', ButtonGoLive)
    app.component('Blog', Blog)
    app.component('OpenAi', OpenAi)
    app.component('DonutChart', DonutChart)
    app.component('LineChart', LineChart)
  },
  setup() { },
  rootComponents: [Footer],
  // layouts: {
  //   NotFound,
  // }
})
