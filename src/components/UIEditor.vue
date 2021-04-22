<template>
  <div class="uiEditor">
    <XccdfTreeItem v-model="tree['elements'][0]" :editMode="true" v-if="tree" />
  </div>
</template>

<script>
import convert  from 'xml-js'
import XccdfTreeItem  from '@/components/XccdfTreeItem.vue'

export default {
  props:["value"],
  components: {XccdfTreeItem},
  watch: {
    tree: {
      handler() {
        alert(1)
        this.$emit('input',convert.js2xml(this.tree))
      },
      deep:true
    }
  },
  data() {
    return {
      tree:convert.xml2js(this.value)
    }
  },
  created() {
    this.$root.$on('delEle',(e)=> {
      console.log(e)
    })
  },
  methods: {
    show() {
      console.log(this.tree)
    },
    delEle(e) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(convert.js2xml(this.tree),"text/xml");
      console.log(xmlDoc.getElementById(e.attributes.id))
      xmlDoc.getElementById(e.attributes.id).remove()
      console.log('delEle',xmlDoc.documentElement.outerHTML)
      this.$emit('input',xmlDoc.documentElement.outerHTML)
      this.$forceUpdate()
    }
  }
}
</script>