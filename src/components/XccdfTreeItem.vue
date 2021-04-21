<template>
  <div class="xccdfTreeItem">
    <div class="xccdfTreeItemBox">
      <div class="xccdfTreeItemBoxTitle">{{tagName}}</div>
      <div class="xccdfTreeItemBoxChildren">
        <div v-if="false">
          <XccdfTreeItem v-model="value[tagName]" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XccdfTreeItem from '@/components/XccdfTreeItem.vue'

export default {
  name:"XccdfTreeItem",
  props: ['value'],
  components: {XccdfTreeItem},
  computed: {
    tagName() {
      let res=Object.keys(this.value)
      res=res.filter(res=>res!=='_attributes')

      console.log("tagName",res)
      return Object.keys(this.value)[0]
    },
  },
  created() {
    console.log('item',this.value)
  }
}
</script>