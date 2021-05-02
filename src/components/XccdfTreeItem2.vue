<template>
  <div class="xccdfTreeItem2">
    <el-dialog :title="data.name" :visible.sync="showDialog" width="50%">
      <div>
        <h2>Attributes<el-button type="success">Add Attributes</el-button></h2>
        <el-form label-width="100px" v-if="data.attributes">
          <el-form-item :label="item" v-for="(item,index) in Object.keys(data.attributes)" :key="index">
            <el-input v-model="data.attributes[item]" />
          </el-form-item>
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
        <el-button type="success" @click.stop="showDialog=!showDialog">新增</el-button>
        <el-button type="warning" @click.stop="showDialog=!showDialog">修改</el-button>
        <el-button type="danger" @click.stop="showDialog=!showDialog">刪除</el-button>
      </div>
    </div>
    <div class="xccdfTreeItem2BoxChildren" v-if="data.elements&&data.elements.length&&isOpen">
      <XccdfTreeItem2 v-for="(item,index) in data.elements" :key="index" :data="data.elements[index]" :index="index" @upData="upData" />
    </div>
  </div>
</template>

<script>
import XccdfTreeItem2 from '@/components/XccdfTreeItem2.vue'
export default {
  name:"XccdfTreeItem2",
  props: ['data','index'],
  data() {
    return {
      isOpen:true,
      showDialog:false,
    }
  },
  components: {XccdfTreeItem2},
  methods: {
    upData() {
      let obj= {
        value:this.data,
        index:this.index
      }
      this.$emit('upData',obj)
    }
  }
}
</script>