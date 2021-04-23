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
        //alert(1)
        this.$emit('input',convert.js2xml(this.tree))
        this.$forceUpdate()
      },
      deep:true
    }
  },
  data() {
    return {
      tree:convert.xml2js(this.value),
      time:new Date().getTime()
    }
  },
  created() {
    this.$root.$on('delEle',(e)=> {
      this.delEle(e)
    })
  },
  methods: {
    show(x) {
      this.$emit('input',x)
    },
    delEle(e) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(convert.js2xml(this.tree),"text/xml");
      console.log(11,xmlDoc.getElementById(e.attributes.id))
      xmlDoc.getElementById(e.attributes.id).remove()
      let html=xmlDoc.documentElement.outerHTML
      console.log('delEle',html)
      this.tree=convert.xml2js(html)

    }
  }
}
</script>