<template>
  <div>
    <h1>disable-direct-access</h1>
    <nuxt-link to="/">top</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'disable-direct-access'
}
</script>
