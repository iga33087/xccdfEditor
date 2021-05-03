<template>
  <div class="xccdfTreeItem2">
    <el-dialog :title="isAdd ? data.name+' - add':data.name+' - edit'" :visible.sync="showDialog" width="50%" v-if="showDialog">
      <div v-if="isAdd">
        <el-select v-model="chooseAdd">
          <el-option v-for="(item,index) in Object.keys(getEleList)" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <div class="buttonList">
          <el-button type="primary" @click="addEle">確定</el-button>
        </div>
      </div>
      <div v-else>
        <div>
          <h2 class="xccdfTreeItem2DiaBoxH2">Attributes<el-button type="success">Add Attributes</el-button></h2>
          <el-form label-width="100px" v-if="data.attributes">
            <template v-for="(item,index) in Object.keys(data.attributes)">
              <el-form-item :label="item" :key="index">
                <el-input v-model="data.attributes[item]" />
                <span style="color:#f00;" v-if="!inputVerification(item).flag">{{inputVerification(item).text}}</span>
              </el-form-item>
            </template>
            <el-form-item :label="'內容'">
              <el-input type="textarea" :rows="4"/>
            </el-form-item>
          </el-form>
        </div>
        <div class="buttonList">
          <el-button type="primary">確定</el-button>
        </div>
      </div>
    </el-dialog>
    <div class="xccdfTreeItem2Box" @click="isOpen=!isOpen">
      <div class="xccdfTreeItem2BoxTitle">
        <i :class="isOpen ? 'el-icon-minus':'el-icon-plus'" v-if="data.elements&&data.elements.length" />  
        {{data.name}}
      </div>
      <div class="xccdfTreeItem2BoxMenu">
        <el-tag class="xccdfTreeItem2BoxMenuError" type="danger" v-if="getErrorCount">ERROR x {{getErrorCount}}</el-tag>
        <el-button type="success" @click.stop="isAdd=true;showDialog=!showDialog">新增</el-button>
        <el-button type="warning" @click.stop="isAdd=false;showDialog=!showDialog">修改</el-button>
        <el-button type="danger" @click.stop="showDialog=!showDialog">刪除</el-button>
      </div>
    </div>
    <div class="xccdfTreeItem2BoxChildren" v-if="data.elements&&data.elements.length&&isOpen">
      <XccdfTreeItem2 v-for="(item,index) in data.elements" :key="index" :data="data.elements[index]" :index="index" :defaultIsOpen="false" :parentTag="data.name" @upData="upData" />
    </div>
  </div>
</template>

<script>
import convert  from 'xml-js'
import XccdfTreeItem2 from '@/components/XccdfTreeItem2.vue'
export default {
  name:"XccdfTreeItem2",
  props: ['data','index','defaultIsOpen','parentTag'],
  data() {
    return {
      isOpen:this.defaultIsOpen,
      showDialog:false,
      isAdd:true,
      chooseAdd:""
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
    getEleList() {
      let res={}
      let arr=this.getflatEleListByTagName.filter(res=>res.category==='element')
      for(let item of arr) {
        res[item.tag]=item
      }
      return res
    },
    getErrorCount() {
      let res=0
      let arr=Object.keys(this.ruleObj)
      if(!arr) return res
      for(let item of arr) {
        let obj=this.inputVerification(item)
        if(!obj.flag) res++
      }
      return res
    }
  },
  methods: {
    addEle() {
      //let obj=this.data
      //obj.elements.push(this.chooseAdd)
      let obj=this.data
      let newEle=this.$global.createEle(this.chooseAdd).outerHTML
      newEle=(convert.xml2js(newEle))['elements'][0]
      obj.elements.push(newEle)
      this.upData(obj)
    },
    upData(x=this.data) {
      let obj= {
        value:x,
        index:this.index
      }
      this.$emit('upData',obj)
    },
    inputVerification(x) {
      if(!this.ruleObj||!this.ruleObj[x]) return {flag:true}
      if(this.ruleObj[x].count=='1'||this.ruleObj[x].count=='1-n') {
        if(!this.data.attributes[x]) return {flag:false,text:"ERROE : 此欄位為必填!"}
        else return {flag:true}
      }
      else {
        return {flag:true}
      }
    }
  }
}
</script>