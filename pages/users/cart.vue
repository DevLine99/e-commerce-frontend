<template>
  <DefaultLayout>
    <div>
      <h1>Cart Page</h1>
      <!-- Add your cart details here -->
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/components/templates/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout,
  },
  middleware: 'auth',
}
</script>
