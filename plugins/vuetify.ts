import { createVuetify } from "vuetify"
import { md3 } from 'vuetify/blueprints'

import '@mdi/font/css/materialdesignicons.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light'
    },
    components: { ...components },
    directives,
    blueprint: md3,
  })
  nuxtApp.vueApp.use(vuetify)
})