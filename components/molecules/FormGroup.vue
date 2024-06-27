<template>
  <v-form>
    <FormLabel :text="label" />
    <InputField v-model="inputValue" :label="label" :type="type" />
  </v-form>
</template>

<script>
import FormLabel from '~/components/atoms/FormLabel.vue'
import InputField from '~/components/atoms/InputField.vue'

export default {
  components: {
    FormLabel,
    InputField,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
