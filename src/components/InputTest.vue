<template>
  <div>
    <input v-for="(item,index) in data.value" v-model="data.value[index].title" :key="index"/>
    <button @click="add">ADD</button>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    add() {
      this.data.value.push({title:'new'})
    }
  }
}
</script>