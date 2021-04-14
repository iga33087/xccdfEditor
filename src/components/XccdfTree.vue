<template>
  <div class="xccdfTree">
    <XccdfTreeItem v-for="(item,index) in value" :value="item" v-model="value[index]" :key="index"/>
  </div>
</template>

<script>
import XccdfTreeItem from '@/components/XccdfTreeItem.vue'

export default {
  components: {XccdfTreeItem},
  props: ['value'],
}
</script>