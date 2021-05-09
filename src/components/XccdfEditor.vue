<template>
  <div class="xccdfEditor" @dragover.prevent @drop.prevent="importData">
    <!--<button v-for="(item,index) in Object.keys(EleList)" :key="index" @click="createEle(item)">Add {{item}}</button>-->
    <!--<button @click="exportData">匯出</button>-->
    <div class="xccdfEditorBox">
      <!--<div class="xccdfEditorBoxItem">檔案名稱<input type="text" v-model="fileName"/></div>-->
      <div v-if="value">
        <XccdfTree v-model="value.children" />
      </div>
    </div>
  </div>
</template>

<script>
//import parseString from 'xml2js'
//import XccdfTree from '@/components/XccdfTree.vue'
import XccdfTreeItem from '@/components/XccdfTreeItem.vue'
import EleList from '@/assets/data/EleList.js'

export default {
  components: {XccdfTreeItem},
  props:["value"],
  data() {
    return {
      fileName: "",
      fileData: "",
      fileDataHTML: "",
      EleList:EleList
    }
  },
  watch: {
    value: {
      handler() {
        this.$emit('input',this.value)
      },
      deep:true,
      immediate:true
    }
  },
  methods: {
    importData(e) {
      //console.log(e)
      /*let file=e.dataTransfer.files[0]
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          let parser=new DOMParser()
          this.fileData=parser.parseFromString(event.target.result,"text/xml")
          resolve(event.target.result)
        };
        reader.readAsBinaryString(file)
      })*/
    },
    exportData() {
      var pom = document.createElement('a');
      var bb = new Blob([this.fileData.documentElement.outerHTML]);
      pom.setAttribute('href', window.URL.createObjectURL(bb));
      pom.setAttribute('download', this.fileName+'.xml');
      pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
      pom.draggable = true; 
      pom.classList.add('dragout');
      pom.click();
    },
    getTagList(x) {
      return this.value.getElementsByTagName(x)
    },
    del(x) {
      x.parentNode.removeChild(x)
      this.$forceUpdate()
    },
    add(x) {
      let dom=this.value.getElementsByTagName(x)[0]
      let copyDom=dom.cloneNode(true);
      dom.parentNode.appendChild(copyDom);
      this.$forceUpdate()
    },

    getChoose(x) {
      this.chooseData=x
      this.showMore=!this.showMore
    }
  }
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
  .xccdfEditorBoxItem {
    padding: 10px 0;
  }
</style>