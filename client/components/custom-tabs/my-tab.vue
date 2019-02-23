<template>
  <div v-if="isActive">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      isActive: this.active
    }
  }
}
</script>
