<template>
  <div id="app">
    <Header/>
    <router-view class="content"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
