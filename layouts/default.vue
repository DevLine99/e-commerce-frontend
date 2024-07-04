<template>
  <div>
    <BaseNavbar />
    <Nuxt />
  </div>
</template>

<script>
import BaseNavbar from '~/components/organisms/BaseNavbar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    BaseNavbar,
  },
}
</script>
