<template>
  <!-- <DefaultLayout> -->
  <v-main>
    <LoginForm />
  </v-main>
  <!-- </DefaultLayout> -->
</template>

<script>
import DefaultLayout from '~/components/templates/DefaultLayout.vue'
import LoginForm from '~/components/pages/LoginForm.vue'

export default {
  components: {
    DefaultLayout,
    LoginForm,
  },
}
</script>
