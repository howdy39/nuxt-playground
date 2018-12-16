<template>
  <section>
    <ul class="links">
      <li>
        <a
          href="https://example.com"
          target="_blank">https://example.com</a> (no v-prevent-click)
      </li>
      <li>
        <a
          v-prevent-click
          href="https://example.com"
          target="_blank">https://example.com</a> (v-prevent-click)
      </li>
    </ul>

    <h2>有効無効の切り替えの確認</h2>
    <button
      type="button"
      @click="preventClickEnabled = !preventClickEnabled">切替</button>
    <ul class="links">
      <li>
        <a
          v-prevent-click="preventClickEnabled"
          href="https://example.com"
          target="_blank">https://example.com</a> (v-prevent-click={{ preventClickEnabled }})
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      preventClickEnabled: false
    }
  }
}
</script>

<style>
.links li {
  margin-bottom: 15px;
}
</style>
