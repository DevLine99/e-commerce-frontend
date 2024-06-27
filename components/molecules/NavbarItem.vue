<template>
  <v-btn text>
    <!-- :to เป็นการส่งต่อไป ไม่ได้กดหนดที่ชั้นนี้ -->
    <nuxt-link :to="to" class="white--text">
      <slot></slot>
    </nuxt-link>
  </v-btn>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  mounted: function () {
    console.log('mounted to : ', this.to)
  },
  methods: {
    submitMessage() {
      console.log(this.socket) // something
    },
  },
}
</script>
