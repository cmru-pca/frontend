import { ThemeDefinition, createVuetify } from "vuetify"

import '@mdi/font/css/materialdesignicons.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'

const myCustomTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#1976D2",
    accent: "#424242",
    secondary: "#FF8F00",
    info: "#26A69A",
    warning: "#FFC107",
    error: "#BF360C",
    success: "#2E7D32",
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: { ...components, VSkeletonLoader },
    directives,
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme
      }
    },
  })
  nuxtApp.vueApp.use(vuetify)
})