<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title>
            <h2>Login</h2>
          </v-card-title>
          <v-card-text>
            <FormGroup v-model="email" label="Email" type="email" />
            <FormGroup v-model="password" label="Password" type="password" />
          </v-card-text>
          <v-card-actions>
            <BaseButton
              color="primary"
              text="Login"
              @click="login"
            ></BaseButton>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormGroup from '~/components/molecules/FormGroup.vue'
import BaseButton from '~/components/atoms/BaseButton.vue'

export default {
  components: {
    FormGroup,
    BaseButton,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      // Handle login
      console.log('Email:', this.email)
      console.log('Password:', this.password)
    },
  },
}
</script>
