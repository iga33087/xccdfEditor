<template>
  <div class="xccdfTreeItem">
    <div class="xccdfTreeItemBox">
      <div class="xccdfTreeItemBoxTitle">{{value.name}}</div>
      <div class="xccdfTreeItemBoxChildren" v-if="valueCp.elements&&valueCp.elements.length">
        <template v-for="(item,index) in value.elements">
          <XccdfTreeItem v-model="valueCp.elements[index]" :key="index" v-if="item"/>
        </template>
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
  data() {
    return {
      valueCp:this.value
    }
  },
  computed: {
    tagName() {
      let res=Object.keys(this.value)
      res=res.filter(res=>res!=='_attributes')

      console.log("tagName",res)
      return Object.keys(this.value)[0]
    },
  },
  created() {
    console.log('item',this.value.elements)
  }
}
</script>