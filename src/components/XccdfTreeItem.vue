<template>
  <div class="xccdfTreeItem">
    <el-dialog title="add element" :visible.sync="showDialog" width="50%">
      <el-select v-model="chooseEleName" placeholder="請選擇">
        <el-option v-for="item in canCreateEle" :key="item" :label="item" :value="item"></el-option>
      </el-select>
      <div class="buttonList">
        <el-button @click="showDialog=!showDialog">取消</el-button>
        <el-button type="primary" @click="addElement">確定</el-button>
      </div>
    </el-dialog>
    <h1 class="xccdfTreeItemTagName" @click.stop="isOpen=!isOpen">
      <div>{{value.nodeName}}</div>
      <div>{{value.nodeValue}}</div>
      <div class="xccdfTreeItemTagNameMenu">
        <!--<el-button @click.stop="addAttributes">add attributes</el-button>-->
        <el-button @click.stop="showDialog=!showDialog">add element</el-button>
        <i class="el-icon-close" @click.stop="delElement" />
        <i class="xccdfTreeItemTagNameIcon el-icon-arrow-down" :class="{'xccdfTreeItemTagNameIconOpen':isOpen}" v-if="value.children&&value.children.length" />
      </div>
    </h1>
    
    <div class="xccdfTreeItemAttributes" v-if="value.attributes&&value.attributes.length">
      <h2>Attributes</h2> 
      <div class="xccdfTreeItemAttributesItem" v-for="(item,index) in value.attributes" :key="index">
        <h3 class="xccdfTreeItemAttributesItemH3">
          <div class="xccdfTreeItemAttributesItemH3Name">{{item.name}}</div>
          <input type="text" :value="item.value" @input="updataAttributes($event,index)"/>
          <i class="el-icon-close" @click="delAttributes(item.name)" />
        </h3>
      </div>
    </div>
    <div class="xccdfTreeItemChildNodes" v-if="value.children&&value.children.length">
      <div v-if="isOpen">
        <div v-for="(item,index) in value.children" :key="index">
          <XccdfTreeItem  v-model="value.children[index]" />
        </div>
      </div>
    </div>
    <div>
      <el-button @click.stop="showHTML=!showHTML">show innerHTML</el-button>
      <div>
        <textarea v-model="value.innerHTML" v-if="showHTML" />
      </div>
    </div>
  </div>
</template>

<script>
import XccdfTreeItem from '@/components/XccdfTreeItem.vue'
import EleList from '@/assets/data/EleList.js'

export default {
  name:"XccdfTreeItem",
  components: {XccdfTreeItem},
  props: ['value'],
  data() {
    return {
      isOpen:false,
      showHTML:false,
      showDialog:false,
      chooseEleName:""
    }
  },
  computed: {
    canCreateEle() {
      if(!EleList[this.value.nodeName]) return []
      let keys=Object.keys(EleList[this.value.nodeName])
      let res=keys.filter(item=>EleList[this.value.nodeName][item]=='element')
      return res
    },
    canCreateAtt() {
      if(!EleList[this.value.nodeName]) return []
      let keys=Object.keys(EleList[this.value.nodeName])
      let res=keys.filter(item=>EleList[this.value.nodeName][item]=='attribute')
      return res
    }
  },
  created() {
  },
  methods: {
    updataAttributes(e,index) {
        let obj=this.value
        obj.attributes[index].value=e.target.value
        try {
          this.$emit('input',obj)
        } catch (error) {
          return error
        }
    },
    addAttributes() {
      let name=prompt("請輸入attributes名稱")
      if(!name) return 0
      let obj=this.value
      obj.setAttribute(name, "");
      this.$emit('input',obj)
      this.$forceUpdate()
    },
    addElement() {

      let obj=this.value
      let newEle=this.createEle(this.chooseEleName)
      obj.appendChild(newEle)
      this.showDialog=!this.showDialog
    },
    createEle(x) {
      let parser=new DOMParser()
      let dom=parser.parseFromString('',"text/xml");
      let newEle=dom.createElement(x);
      let newText=dom.createTextNode(" ");
      newEle.appendChild(newText);
      if(EleList[x]) {
        for(let item of Object.keys(EleList[x])) {
          if(x==item) continue; 
          if(EleList[x][item]=='element') {
            //let newEleC = this.fileData.createElement(item)
            newEle.appendChild(this.createEle(item));
          }
          else if(EleList[x][item]=='attribute') {
            newEle.setAttribute(item, "");
          }
        }
      }
      return newEle
    },
    async delElement() {
      let obj=this.value.parentElement
      //obj.remove()
      obj.removeChild(this.value)
      this.$emit('input',obj)
      this.$forceUpdate()
    },
    delAttributes(x) {
      let obj=this.value
      obj.removeAttribute(x);
      this.$emit('input',obj)
      this.$forceUpdate()
    },
    delay(x) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, x);
      });
    }
  }
}
</script>