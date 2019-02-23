<template>
  <div>
    <h1>custom-tabs</h1>
    <p><a href="https://github.com/spatie/vue-tabs-component">参考サイト</a></p>
    <my-tabs v-model="selectedTabName">
      <my-tab name="tab1">
        <p style="color:red">これはtab1の中身です</p>
      </my-tab>
      <my-tab name="tab2">
        <p style="color:blue">これはtab2の中身です</p>
      </my-tab>
      <my-tab name="tab3">
        <p style="color:green">これはtab3の中身です</p>
      </my-tab>
    </my-tabs>
  </div>
</template>

<script>
import MyTabs from '~/components/custom-tabs/my-tabs'
import MyTab from '~/components/custom-tabs/my-tab'

export default {
  components: { MyTabs, MyTab },
  data() {
    return {
      selectedTabName: 'tab1'
    }
  }
}
</script>
