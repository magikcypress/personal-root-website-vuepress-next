import { defineClientConfig } from '@vuepress/client'
import Footer from './components/Footer.vue'
import MapTravel from './components/MapTravel.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('MapTravel', MapTravel)
  },
  setup() {},
  rootComponents: [Footer],
})
