<template>
  <div>
    <ul class="tab-header-wrapper">
      <li
        v-for="tab in tabs"
        :key="tab.name"
        :class="{active: tab.name===value}"
        class="tab-header"
        @click="selectTab(tab.name)">
        {{ tab.name }}
      </li>
    </ul>
    <slot/>
  </div>
</template>

<script>
import MyTab from '~/components/custom-tabs/my-tab'

export default {
  components: { MyTab },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectTab(this.value)
  },
  methods: {
    selectTab(tabName) {
      this.tabs.forEach(tab => {
        // propsを書き換えると warn になる
        // [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
        //  Instead, use a data or computed property based on the prop's value. Prop being mutated: "active"
        // tab.active = tab.name === tabName

        // そのため data を書き換える
        tab.isActive = tab.name === tabName
        this.$emit('input', tabName)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-header-wrapper {
  list-style: none;
  padding: 0;
  display: flex;
}

.tab-header {
  font-size: 24px;
  min-height: 40px;
  background: #f0f0f0;
  padding: 10px 20px;
  cursor: pointer;
  &.active {
    background: gray;
  }
  border: 1px solid gray;
}
</style>
