<template>
  <div class="xccdfTree">
    <div v-for="(item,index) in value" :key="index">
      <XccdfTreeItem v-model="value[index]"/>
    </div>
  </div>
</template>

<script>
import XccdfTreeItem from '@/components/XccdfTreeItem.vue'

export default {
  components: {XccdfTreeItem},
  props: ['value'],
}
</script>