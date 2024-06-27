<template>
  <v-btn :color="color" :outlined="outlined" @click="onClick">
    {{ text }}
  </v-btn>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
<style scoped lang="scss">
.base-button {
  @apply bg-purple-600
    px-10 py-2
    text-white
    rounded-full
    shadow-xl
    transition-colors duration-150;

  &:hover {
    @apply bg-purple-800;
  }
}
</style>
