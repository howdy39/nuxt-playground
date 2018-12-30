<template>
  <section class="container">
    <h2>directives</h2>
    <ul>
      <li>
        <nuxt-link to="/directives-sample/prevent-click">prevent-click</nuxt-link>
      </li>
    </ul>
    <h2>middleware</h2>
    <ul>
      <li>
        <nuxt-link to="/middleware-sample/direct-access">direct-access</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/middleware-sample/disable-direct-access">disable-direct-access</nuxt-link>
      </li>
    </ul>
    <h2>plugins</h2>
    <ul>
      <li>
        <nuxt-link to="/plugins-sample/nuxt-device-detect">nuxt-device-detect</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/plugins-sample/nuxt-user-agent">nuxt-user-agent</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/plugins-sample/vue-youtube">vue-youtube</nuxt-link>
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
