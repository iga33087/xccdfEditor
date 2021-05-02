<template>
  <div class="sourceEditor">
    <div class="sourceEditorBox">
      <textarea class="sourceEditorBoxTextarea" :value="value" @input="$emit('input',$event.target.value)" @click="show"></textarea>
      <div class="sourceEditorBoxTree">
        <XccdfTreeItem2 v-model="tree['elements'][0]" :editMode="false" v-if="tree" />
      </div>
    </div>
  </div>
</template>

<script>
import convert  from 'xml-js'
import XccdfTreeItem2  from '@/components/XccdfTreeItem2.vue'

export default {
  props:["value"],
  components: {XccdfTreeItem2},
  computed: {
    tree() {
      return convert.xml2js(this.value)
    }
  },
  created() {
  },
  methods: {
    show() {
      console.log(this.tree)
    }
  }
}
</script>