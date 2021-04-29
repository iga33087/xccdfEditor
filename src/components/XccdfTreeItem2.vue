<template>
  <div class="xccdfTreeItem2">
    <el-dialog :title="value.name" :visible.sync="showDialog" width="50%">
      <div class="buttonList">
        <el-button type="primary">確定</el-button>
      </div>
    </el-dialog>
    <div class="xccdfTreeItem2Box" @click="isOpen=!isOpen">
      <div class="xccdfTreeItem2BoxTitle">
        <i :class="isOpen ? 'el-icon-minus':'el-icon-plus'" v-if="value.elements&&value.elements.length" />  
        {{value.name}}
      </div>
      <div class="xccdfTreeItem2BoxMenu">
        <el-button type="success" @click.stop="showDialog=!showDialog">新增</el-button>
        <el-button type="warning" @click.stop="showDialog=!showDialog">修改</el-button>
        <el-button type="danger" @click.stop="showDialog=!showDialog">刪除</el-button>
      </div>
    </div>
    <div class="xccdfTreeItem2BoxChildren" v-if="value.elements&&value.elements.length&&isOpen">
      <XccdfTreeItem2 v-for="(item,index) in value.elements" :key="index" v-model="value.elements[index]" />
    </div>
  </div>
</template>

<script>
import XccdfTreeItem2 from '@/components/XccdfTreeItem2.vue'
export default {
  name:"XccdfTreeItem2",
  props: ['value'],
  data() {
    return {
      isOpen:true,
      showDialog:false
    }
  },
  components: {XccdfTreeItem2},
  methods: {
    scrollTo(e) {
      console.log(e.target.offsettop)
    }
  }
}
</script>