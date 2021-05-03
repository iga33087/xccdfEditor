<template>
  <div class="xccdfTreeItem2">
    <el-dialog :title="data.name" :visible.sync="showDialog" width="50%">
      <div>
        <h2>Attributes<el-button type="success">Add Attributes</el-button></h2>
        <el-form label-width="100px" v-if="data.attributes">
          <template v-for="(item,index) in Object.keys(data.attributes)">
            <el-form-item :label="item" :key="index" v-if="item!=='_ruleObj'">
              <el-input v-model="data.attributes[item]" />
              <span style="color:#f00;" v-if="!inputVerification(item).flag">!{{inputVerification(item).text}}</span>
            </el-form-item>
          </template>
        </el-form>
        </div>
      <div class="buttonList">
        <el-button type="primary">確定</el-button>
      </div>
    </el-dialog>
    <div class="xccdfTreeItem2Box" @click="isOpen=!isOpen">
      <div class="xccdfTreeItem2BoxTitle">
        <i :class="isOpen ? 'el-icon-minus':'el-icon-plus'" v-if="data.elements&&data.elements.length" />  
        {{data.name}}
      </div>
      <div class="xccdfTreeItem2BoxMenu">
        <el-tag class="xccdfTreeItem2BoxMenuError" type="danger" v-if="getErrCount">ERROR x {{getErrCount}}</el-tag>
        <el-button type="success" @click.stop="showDialog=!showDialog">新增</el-button>
        <el-button type="warning" @click.stop="showDialog=!showDialog">修改</el-button>
        <el-button type="danger" @click.stop="showDialog=!showDialog">刪除</el-button>
      </div>
    </div>
    <div class="xccdfTreeItem2BoxChildren" v-if="data.elements&&data.elements.length&&isOpen">
      <XccdfTreeItem2 v-for="(item,index) in data.elements" :key="index" :data="data.elements[index]" :index="index" :defaultIsOpen="false" :parentTag="data.name" @upData="upData" />
    </div>
  </div>
</template>

<script>
import XccdfTreeItem2 from '@/components/XccdfTreeItem2.vue'
export default {
  name:"XccdfTreeItem2",
  props: ['data','index','defaultIsOpen','parentTag'],
  data() {
    return {
      isOpen:this.defaultIsOpen,
      showDialog:false,
    }
  },
  components: {XccdfTreeItem2},
  computed: {
    getflatEleListByTagName() {
      return this.$global.getflatEleListByTagName(this.data.name,this.parentTag)
    },
    ruleObj() {
      let res={}
      let arr=this.getflatEleListByTagName.filter(res=>res.category==='attribute')
      for(let item of arr) {
        res[item.tag]=item
      }
      return res
    },
    getErrCount() {
      let res=0
      for(let item of Object.keys(this.data.attributes)) {
        let flag=this.inputVerification(item)
        if(!flag.flag) {
          res++
        }
      }
      return res
    }
  },
  methods: {
    upData() {
      let obj= {
        value:this.data,
        index:this.index
      }
      this.$emit('upData',obj)
    },
    inputVerification(x) {
      if(!this.ruleObj||!this.ruleObj[x]) return {flag:true}
      if(this.ruleObj[x].count=='1'||this.ruleObj[x].count=='1-n') {
        if(!this.data.attributes[x]) return {flag:false,text:"此欄位為必填"}
        else return {flag:true}
      }
      else {
        return {flag:true}
      }
    }
  }
}
</script>