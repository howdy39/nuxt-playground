<template>
  <section class="container">
    <h2>directives</h2>
    <ul>
      <li>
        <nuxt-link to="/directives-sample/prevent-click">prevent-click</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}
</style>
