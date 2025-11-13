<template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      requierd: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value)
    },
  },
}
</script>
