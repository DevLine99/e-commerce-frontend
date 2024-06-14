<template>
  <h1>Home</h1>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: mapGetters({
    isAuthenticated: 'auth/isAuthenticated',
  }),
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
  },
}
</script>
