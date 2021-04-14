<template>
  <div class="eleDetail">
    attribute
    <el-form ref="form" label-width="80px">
      <!--<el-form-item v-for="(item,index) in data.attributes" :key="index" :label="item.name">
        <el-input v-model="data[item]"></el-input>
      </el-form-item>-->
      <el-input :value="value.id" @input="updata"></el-input>
    </el-form>
    element
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updata(e) {
      console.log("e",e)
      let obj=this.value
      obj.id=e
      this.$emit('input',obj)
    }
  }
}
</script>