/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      dark: {
        colors: {
          primary: '#563774',
          secondary: '#1B1B1B',
          //secondary: colors.grey.darken3,
          navBG: '#262626',
          cardBackground: '#212121',
  
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
      light: {
        colors: {
          primary: '#8560A9',
          secondary: '#E0E0E0',
          //secondary: colors.grey.lighten2,
          cardBackground: '#FAFAFA',
          navBG: '#F7F8FB',
          textColor: '#262626',
  
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
})
