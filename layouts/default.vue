<template>
  <v-app>
    <BaseNavbar />
    <Nuxt />
  </v-app>
</template>

<script>
import BaseNavbar from '~/components/organisms/BaseNavbar.vue'

export default {
  components: {
    BaseNavbar,
  },
}
</script>
