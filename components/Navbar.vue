<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      <nuxt-link to="/" class="white--text">Nuxt Portfolio</nuxt-link>
    </v-toolbar-title>

    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-spacer></v-spacer>

    <v-btn text>
      <nuxt-link to="/home" class="white--text">Home</nuxt-link>
    </v-btn>
    <v-btn text>
      <nuxt-link to="/blog" class="white--text">Blog</nuxt-link>
    </v-btn>
    <v-btn text>
      <nuxt-link to="/users/profile" class="white--text">Profile</nuxt-link>
    </v-btn>

    <nuxt-link v-if="$auth.loggedIn" to="/secret">Top Secret</nuxt-link>
    <a v-if="$auth.loggedIn" @click="$auth.logout()">Sign Off</a>
    <a v-else @click="$auth.loginWith('auth0')">Sign In</a>

    <v-spacer></v-spacer>

    <v-btn color="primary" class="white--text" outlined>
      <nuxt-link to="/auth/login" class="white--text">
        <strong>Login</strong>
      </nuxt-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style scoped>
.white--text {
  color: white !important;
}
</style>
