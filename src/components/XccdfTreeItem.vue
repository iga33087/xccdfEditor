<template>
  <div class="xccdfTreeItem" @click.stop="isOpen=!isOpen">
    <h1 class="xccdfTreeItemTagName">
      <div>{{value.nodeName}}</div>
      <div>{{value.nodeValue}}</div>
      <div>
        <el-button @click="addAttributes">add attributes</el-button>
        <el-button @click="addElement">add element</el-button>
        <el-button type="danger">remove element</el-button>
        <el-button type="danger">remove element</el-button>
        <i class="xccdfTreeItemTagNameIcon el-icon-arrow-down" :class="{'xccdfTreeItemTagNameIconOpen':isOpen}" v-if="value.children&&value.children.length" />
      </div>
    </h1>
    
    <div class="xccdfTreeItemAttributes" v-if="value.attributes&&value.attributes.length">
      <h2>Attributes</h2> 
      <div class="xccdfTreeItemAttributesItem" v-for="(item,index) in value.attributes" :key="index">
        <h3>
          <el-tag>{{item.name}}</el-tag>
          <input type="text" :value="item.value" @input="updataAttributes($event,index)"/>
        </h3>
      </div>
    </div>
    <div v-if="!value.children.length">
      <textarea v-model="value.innerHTML" />
    </div>
    <div class="xccdfTreeItemChildNodes" v-if="value.children&&value.children.length">
      <div v-if="isOpen">
        <XccdfTreeItem v-for="(item,index) in value.children" v-model="value.children[index]" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import XccdfTreeItem from '@/components/XccdfTreeItem.vue'

export default {
  name:"XccdfTreeItem",
  components: {XccdfTreeItem},
  props: ['value'],
  data() {
    return {
      isOpen:false
    }
  },
  created() {
    //console.log(this.data)
  },
  methods: {
    updataAttributes(e,index) {
      let obj=this.value
      obj.attributes[index].value=e.target.value
      console.log(e,index)
      console.log(obj)
      this.$emit('input',obj)
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
      let name=prompt("請輸入element名稱")
      if(!name) return 0
      let obj=this.value
      let newEle=document.createElement(name)
      obj.appendChild(newEle)
      this.$emit('input',obj)
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
h1,h2,h3,h4,h5 {
  margin: 0 0 10px 0;
}
.xccdfTreeItem {
  background-color: rgba(0,0,0,0.1);
  margin-bottom: 20px;
  padding: 20px;
}
.xccdfTreeItemTagName {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.xccdfTreeItemTagNameIconOpen {
  transform: rotate(180deg);
}
.xccdfTreeItemAttributes {
}
.xccdfTreeItemChildNodes {
  padding-left: 20px;
}
</style>