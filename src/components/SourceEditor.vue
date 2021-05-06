<template>
  <div class="sourceEditor">
    <div class="sourceEditorBox">
      <textarea class="sourceEditorBoxTextarea" :value="value" @input="$emit('input',$event.target.value)" @click="show"></textarea>
      <div class="sourceEditorBoxTree">
        <XccdfTreeItem2 :data="tree['elements'][0]" :editMode="true" :index="0" :defaultIsOpen="true" v-if="false"/>
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