<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
      color="#171f36"
      dark
    >
      <v-list>
        <v-list-item to="/" router exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon="mdi-shopping" no-action>
          <template #activator>
            <v-list-item-content>
              <v-list-item-title>Shop</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :href="item.to"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item to="/products" router exact>
          <v-list-item-action>
            <v-icon>mdi-tshirt-v</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Product</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <template v-if="isLoggedIn">
          <v-list-item to="/settings" router exact>
            <v-list-item-action>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item to="/auth/login" router exact>
            <v-list-item-action>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/auth/register" router exact>
            <v-list-item-action>
              <v-icon>mdi-account-plus-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none">
          <v-icon>mdi-truck</v-icon>&nbsp;ShipIT
        </a>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <template v-if="isLoggedIn">
        <v-menu>
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-avatar>
                <v-img :src="user.avatar"></v-img>
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="goToProfile">
              <v-list-item-action>
                <v-icon>mdi-account</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-action>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn icon @click="goToNotifications">
          <v-badge content="2" color="green" overlap>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-btn to="/cart" icon>
          <v-badge content="2" color="green" overlap>
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <template v-else>
        <v-btn to="/auth/login" icon>
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn to="/auth/register" icon>
          <v-icon>mdi-account-plus-outline</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      clipped: true,
      miniVariant: false,
      isLoggedIn: false,
      user: {
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
      },
      items: [
        {
          title: 'Cart',
          to: '/user/cart',
        },
        {
          title: 'Jackets',
          to: '/shop',
        },
      ],
    }
  },
  methods: {
    logout() {
      this.isLoggedIn = false
    },
    login() {
      this.isLoggedIn = true
    },
    goToProfile() {
      this.$router.push('/user/profile')
    },
    goToNotifications() {
      this.$router.push('/notifications')
    },
    goToCart() {
      this.$router.push('/user/cart')
    },
  },
}
</script>
