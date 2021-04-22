<template>
  <div class="xccdfTreeItem">
    <div class="xccdfTreeItemBox">
      <div class="xccdfTreeItemBoxTitle" @click.stop="isOpen=!isOpen">
        <div>{{value.name}}</div>
        <i class="el-icon-close" @click.stop="delEle" v-if="editMode" />
      </div>
      <div class="xccdfTreeItemBoxAtt" v-if="value.attributes">
        <div class="xccdfTreeItemBoxAttTitle">Attributes</div>
        <div class="xccdfTreeItemBoxAttItem" v-for="(item,index) in Object.keys(value.attributes)" :key="index">
          <div class="xccdfTreeItemBoxAttItemTitle">{{item}}</div>
          <div v-if="editMode">
            <input type="type" v-model="value.attributes[item]" />
            <i class="el-icon-close" @click="delAttributes(item)" />
          </div>
          <div class="xccdfTreeItemBoxAttItemItem" v-else>{{value.attributes[item]}}</div>
        </div>
      </div>
      <div class="xccdfTreeItemBoxChildren" v-if="value.elements&&value.elements.length&&isOpen">
        <template v-for="(item,index) in value.elements">
          <XccdfTreeItem v-model="value.elements[index]" :editMode="editMode" :key="index" v-if="item"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import XccdfTreeItem from '@/components/XccdfTreeItem.vue'

export default {
  name:"XccdfTreeItem",
  props: ['value','editMode'],
  components: {XccdfTreeItem},
  data() {
    return {
      isOpen:false
    }
  },
  computed: {
    tagName() {
      let res=Object.keys(this.value)
      res=res.filter(res=>res!=='_attributes')

      console.log("tagName",res)
      return Object.keys(this.value)[0]
    },
  },
  created() {
    console.log('item',this.value.elements)
  },
  methods: {
    delAttributes(x) {
      let obj=this.value
      delete obj.attributes[x]
      this.$emit('input',obj)
      this.$forceUpdate()
    },
    addAtt(x) {
      let obj=this.value
      obj.attributes[x]=""
      this.$emit('input',obj)
      this.$forceUpdate()
    },
    delEle() {
      if(!this.value.attributes||!this.value.attributes.id) {
        alert("物件必須有id(含值)才能刪除")
        this.addAtt('id')
      }
      /*else {
        let obj=this.value
        this.$emit('input',obj)
        this.$forceUpdate()
        this.$root.$emit('delEle',this.value)
      }*/
    }
  }
}
</script>