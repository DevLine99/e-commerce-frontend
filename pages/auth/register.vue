<template>
  <v-main>
    <h1>Register</h1>
  </v-main>
</template>

<script>
import BaseNavbar from '~/components/organisms/BaseNavbar.vue'

export default {
  components: {
    BaseNavbar,
  },
  layout: 'register',
  // middleware: 'auth',
}
</script>
