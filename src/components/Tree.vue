<template>
  <div class="tree">
    <el-dialog :visible.sync="showEditBox" width="50%" v-if="showEditBox">
      <div v-if="data.attributes">
        <div v-for="(item,index) in Object.keys(data.attributes)" :key="index">
           <div>{{item}}</div>
           <input v-model="data.attributes[item]" @input="$forceUpdate()" /><span @click.stop="delAtt(item)">X</span>
        </div>
        <button @click="addEle">ADD ele</button>
        <button @click="addAtt">ADD att</button>
      </div>
    </el-dialog>
    <div class="treeTitle" @click.stop="showEditBox=!showEditBox">
      <div>{{data.name}}</div>
      <div>
        <el-button type="success" @click.stop="addEle">新增</el-button>
        <el-button type="warning" @click.stop="showEditBox=!showEditBox">修改</el-button>
        <el-button type="danger" @click.stop="delEle">刪除</el-button>
      </div>
    </div>
    <div class="treeChildrens" v-if="data.elements&&data.elements.length">
      <Tree v-for="(item,index) in data.elements" :data="item" :index="index" :key="index" @delEle="toDelEle" />
    </div>
  </div>
</template>

<script>
import convert  from 'xml-js'
import Tree from '@/components/Tree.vue'
export default {
  name:'Tree',
  props: ['data','index'],
  components: {Tree},
  data() {
    return {
      showEditBox:false
    }
  },
  methods: {
    addEle() {
      let obj=this.data
      if(!obj.elements) obj.elements=[]
      let newEle=this.$global.createEle('Value').outerHTML
      newEle=(convert.xml2js(newEle))['elements'][0]
      obj.elements.push(newEle)
      this.data=obj
      this.$forceUpdate()
      this.$root.$emit('refresh')
    },
    addAtt() {
      let name=prompt("請輸入名稱")
      if(!name) return 0
      this.data.data[name]=""
      this.$forceUpdate()
      this.$root.$emit('refresh')
    },
    delAtt(x) {
      let obj=this.data
      delete obj.attributes[x]
      this.data=obj
      this.$forceUpdate()
      this.$root.$emit('refresh')
    },
    delEle() {
      this.$emit('delEle',this.index)
    },
    toDelEle(e) {
      let obj=this.data
      this.data.elements.splice(e,1)
      this.data=obj
      this.$forceUpdate()
      this.$root.$emit('refresh')
    }
  }
}
</script>

<style scoped>
  .tree {
    border-width: 0 0 1px 0;
    border-color: #000;
    border-style: solid;
    margin-bottom: 10px;
  }
  .treeTitle {
    cursor: pointer;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .treeChildrens {
    padding-left: 50px;
  }
</style>