<template>
  <div class="uiEditor">
    <XccdfTreeItem2 :data="tree['elements'][0]" :editMode="true" @upData="upData" :index="0" :defaultIsOpen="true" :parentTag="''" v-if="false"/>
    <Tree :data="tree['elements'][0]" :index="0" :parentTag="''" v-if="viewTree" />
  </div>
</template>

<script>
import convert  from 'xml-js'
import XccdfTreeItem2  from '@/components/XccdfTreeItem2.vue'
import Tree  from '@/components/Tree.vue'

export default {
  props:["value"],
  components: {XccdfTreeItem2,Tree},
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
      time:new Date().getTime(),
      inputTestData:{title:'123',value:[
        {title:'111'},
        {title:'222'},
      ]},
      treeTest:[
        {title:'1111',data:{d1:1,d2:1,d3:2},elements:[
          {title:'1-1',data:{d1:1,d2:1,d3:2}},
          {title:'1-2',data:{d1:1,d2:1,d3:2},elements:[
            {title:'1-2-1',data:{d1:1,d2:1,d3:2}},
            {title:'1-2-2',data:{d1:1,d2:1,d3:2}},
          ]},
          {title:'1-3',data:{d1:1,d2:1,d3:2}},
        ]},
      ]
    }
  },
  computed: {
    viewTree() {
      return convert.xml2js(this.value)
    }
  },
  created() {
    this.$root.$on('delEle',(e)=> {
      this.delEle(e)
    })
    this.$root.$on('refresh',()=> {
      this.$emit('input',convert.js2xml(this.tree))
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

    },
    upData(e) {
      console.log('fffffff',e)
      this.tree['elements'][0]=e.value
      this.$emit('input',convert.js2xml(this.tree))
    }
  }
}
</script>