<template>
  <div class="xccdfTreeItem">
    <el-dialog title="add Element" :visible.sync="showDialog" width="50%">
      <el-select v-model="newTagName" placeholder="請選擇物件">
        <el-option v-for="(item,index) in $global.getTagEle(value.name)" :key="index" :label="item" :value="item">
        </el-option>
      </el-select>
      <div class="buttonList">
        <el-button type="primary" @click="addEle" v-if="editMode">確定</el-button>
      </div>
    </el-dialog>
    <div class="xccdfTreeItemBox">
      <div class="xccdfTreeItemBoxTitle" @click.stop="isOpen=!isOpen">
        <div>{{value.name}}</div>
        <div>
          <el-button @click.stop="showDialog=!showDialog">add Element</el-button>
          <i class="el-icon-arrow-down" :class="{'isOpen':isOpen}" />
          <i class="el-icon-close" @click.stop="delEle" v-if="editMode" />
        </div>
      </div>
      <div class="xccdfTreeItemBoxAtt" v-if="value.attributes">
        <div class="xccdfTreeItemBoxAttTitle">Attributes</div>
        <div class="xccdfTreeItemBoxAttItem" v-for="(item,index) in getAtt()" :key="index">
          <div class="xccdfTreeItemBoxAttItemTitle">{{item}}</div>
          <div v-if="editMode">
            <input type="type" v-model="value.attributes[item]" />
            <i class="el-icon-close" @click="delAtt(item)" />
          </div>
          <div class="xccdfTreeItemBoxAttItemItem" v-else>{{value.attributes[item]}}</div>
        </div>
      </div>
      <el-button @click="createText" v-if="!getTextEle.length">create HTML</el-button>
      <div class="xccdfTreeItemBoxChildren" v-if="value.elements&&value.elements.length&&isOpen">
        <template v-for="(item,index) in value.elements">
          <XccdfTreeItem v-model="value.elements[index]" :editMode="editMode" :key="index" v-if="item.type==='element'"/>
          <textarea v-model="value.elements[index].text" :key="index" v-else-if="item.type==='text'"></textarea>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import convert  from 'xml-js'
import EleList from '@/assets/data/EleList.js'
import XccdfTreeItem from '@/components/XccdfTreeItem.vue'

export default {
  name:"XccdfTreeItem",
  props: ['value','editMode','time'],
  components: {XccdfTreeItem},
  data() {
    return {
      isOpen:false,
      showDialog:false,
      newTagName:""
    }
  },
  computed: {
    getTextEle() {
      if(!this.value.elements) return []
      return this.value.elements.filter(res=>res.type==="text")
    },
    getAttList() {
      return EleList[this.value.name].filter(res=>res==='attribute')
    }
  },
  created() {
    console.log('item',this.value.elements)
  },
  watch: {
    value: {
      handler() {
        this.$forceUpdate()
      },
      deep:true
    }
  },
  methods: {
    getAtt() {
      return Object.keys(this.value.attributes)
    },
    delAtt(x) {
      let obj=this.value
      delete obj.attributes[x]
      this.$emit('input',obj)
      this.$forceUpdate()
    },
    addAtt(x) {
      let obj=JSON.parse(JSON.stringify(this.value))
      if(!obj.attributes) obj.attributes={}
      obj.attributes[x]=""
      this.$emit('input',obj)
      this.$forceUpdate()
    },
    addEle() {
      let dom=this.createEle(this.newTagName).outerHTML
      let html=(convert.xml2js(dom))['elements'][0]
      let obj=this.value
      obj.elements.push(html)
      this.$emit('input',obj)
      this.showDialog=!this.showDialog
    },
    delEle() {
      if(!this.value.attributes||!this.value.attributes.id) {
        alert("物件必須有id(含值)才能刪除")
        this.addAtt('id')
      }
      else {
        let obj=this.value
        this.$emit('input',obj)
        this.$root.$emit('delEle',this.value)
      }
    },
    getTagEle(x) {
      if(!EleList[x]) return []
      let arr=Object.keys(EleList[x])
      let res=arr.filter(key=> EleList[x][key]==='element')
      return res
    },
    getTagAtt(x) {
      if(!EleList[x]) return []
      let arr=Object.keys(EleList[x])
      let res=arr.filter(key=> EleList[x][key]==='attribute')
      return res
    },
    createText() {
      let textObj= {
        type:'text',
        text:'',
      }
      let obj=JSON.parse(JSON.stringify(this.value))
      if(!obj.elements) obj.elements=[]
      obj.elements.push(textObj)
      this.$emit('input',obj)
      this.isOpen=!this.isOpen
    },
    createEle(x) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString("","text/xml");
      let getTagEle=this.$global.getTagEle(x)
      let getTagAtt=this.$global.getTagAtt(x)
      let dom = xmlDoc.createElement(x);
      for(let item of getTagAtt) {
        dom.setAttribute(item, "");
      }
      for(let item of getTagEle) {
        if(item===x) continue;
        let newDom=this.createEle(item)
        dom.appendChild(newDom);
      }
      return dom
    },
  }
}
</script>