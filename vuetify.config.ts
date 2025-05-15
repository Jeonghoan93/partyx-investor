import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

export default defineVuetifyConfiguration({
  labComponents: true,
  defaults: {
    VBtn: {
      variant: 'flat',
    },
  },
});
