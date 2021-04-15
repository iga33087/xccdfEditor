<template>
  <div class="XccdfTree2">
    <div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    toHTML() {
      let parser=new DOMParser()
      let res=parser.parseFromString(this.value,"text/xml");
      return res
    }
  },
  created() {
    console.log((new XMLSerializer()).serializeToString(this.toHTML))
    console.log(this.toHTML.childNodes)
  }
}
</script>