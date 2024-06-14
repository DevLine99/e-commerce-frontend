<template>
  <v-sheet class="mx-auto" width="300">
    <v-form>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[(v) => !!v || 'Item is required']"
        label="password"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block @click="login">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      email: 'admin@admin.com',
      emailRules: [
        (value) => {
          if (value) return true
          return 'E-mail is requred.'
        },
        (value) => {
          if (/.+@.+\..+/.test(value)) return true
          return 'E-mail must be valid.'
        },
      ],
      password: '999999999',
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()

      const payload = {
        email: this.email,
        password: this.password,
      }
      console.log('login : ', payload)

      try {
        await this.$auth.loginWith('local', {
          data: payload,
        })
        this.$router.push('/')
      } catch (e) {
        this.$router.push('/login')
      }
    },
  },
}
</script>
