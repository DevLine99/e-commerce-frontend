<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      <nuxt-link to="/" class="white--text">Nuxt Portfolio</nuxt-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <NavbarItem to="/">Home</NavbarItem>
    <NavbarItem to="/products">Products</NavbarItem>
    <NavbarItem to="/user/cart">Cart</NavbarItem>
    <NavbarItem to="/user/profile">Profile</NavbarItem>

    <v-spacer></v-spacer>

    <BaseButton color="secondary" outlined text="Login">
      <nuxt-link to="/auth/login" class="white--text">
        <strong>Login</strong>
      </nuxt-link>
    </BaseButton>
    <BaseButton color="secondary" outlined text="register">
      <nuxt-link to="/auth/register" class="white--text">
        <strong>Register</strong>
      </nuxt-link>
    </BaseButton>
  </v-app-bar>
</template>

<script>
import NavbarItem from '~/components/molecules/NavbarItem.vue'
import BaseButton from '~/components/atoms/BaseButton.vue'

export default {
  components: {
    NavbarItem,
    BaseButton,
  },
}
</script>
