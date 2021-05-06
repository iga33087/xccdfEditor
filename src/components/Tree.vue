<template>
  <div class="tree" ref="tree">
    <el-dialog :visible.sync="showEditBox" width="50%" v-if="showEditBox">
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
    <div class="treeTitle" @click.stop="showChildrens=!showChildrens">
      <div><i :class="showChildrens ? 'el-icon-minus':'el-icon-plus'" v-if="data.elements&&data.elements.length" />  {{data.name}}</div>
      <div>
        <el-tag class="xccdfTreeItem2BoxMenuError" type="danger" @click.stop="getAllError" v-if="getErrorCount">ERROR x {{getErrorCount}}</el-tag>
        <div class="xccdfTreeItem2BoxMenuErrorHidden" v-if="getErrorCount" v-show="false">{{getErrorCount}}</div>
        <el-button type="success" @click.stop="isAdd=true;showEditBox=!showEditBox">新增</el-button>
        <el-button type="warning" @click.stop="isAdd=false;showEditBox=!showEditBox">修改</el-button>
        <el-button type="danger" @click.stop="delEle">刪除</el-button>
      </div>
    </div>
    <div class="treeChildrens" v-show="data.elements&&data.elements.length&&showChildrens">
      <Tree v-for="(item,index) in data.elements" :data="item" :index="index" :key="index" :parentTag="data.name" @delEle="toDelEle" />
    </div>
  </div>
</template>

<script>
import convert  from 'xml-js'
import Tree from '@/components/Tree.vue'
export default {
  name:'Tree',
  props: ['data','index','parentTag'],
  components: {Tree},
  data() {
    return {
      isAdd:false,
      showEditBox:false,
      showChildrens:true,
      chooseAdd:""
    }
  },
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
  mounted() {
    console.log(this.data.name,this.getAllError())
  },
  methods: {
    getAllError() {
      let res=0
      let dom=this.$refs.tree
      let list=dom.querySelectorAll('.xccdfTreeItem2BoxMenuErrorHidden')
      for(let item of list) {
        res+=Number(item.innerHTML)
      }
      console.log(res)
      return res
    },
    addEle() {
      let obj=this.data
      if(!obj.elements) obj.elements=[]
      let newEle=this.$global.createEle(this.chooseAdd).outerHTML
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

<style lang="scss" scoped>
  .tree {
    border-width: 0 0 0 1px;
    border-color: #222;
    border-style: solid;
    cursor: pointer;
    margin-bottom: 16px;
    &:hover {
      background-color: rgba(0,0,0,0.03);
    }
  }
  .treeTitle {
    cursor: pointer;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .treeChildrens {
    padding-top: 16px;
    padding-left: 50px;
  }
  .xccdfTreeItem2BoxMenuError {
    margin-right: 10px;
  }
</style>