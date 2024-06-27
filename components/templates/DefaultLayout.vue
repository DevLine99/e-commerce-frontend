<template>
  <v-app>
    <BaseNavbar />
    <v-main>
      <slot />
    </v-main>
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
