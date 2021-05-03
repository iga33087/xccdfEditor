<template>
  <div class="home">
    <div class="toolBar">
      <div class="toolBarItem">
        <span class="toolBarItemLabel">檔案名稱</span>
        <el-input v-model="fileName" placeholder="檔案名稱" style="width:200px;"></el-input>
      </div>
      <div class="toolBarMenu">
        <input ref="upFile" type="file" style="display:none;" @change="importFile">
        <el-input v-model="key" placeholder="搜尋id" style="width:200px;margin-right:10px;"></el-input>
        <el-button type="primary">搜尋</el-button>
        <el-button type="warning" @click="$refs.upFile.click()">匯入</el-button>
        <el-button type="success" @click="exportData">匯出</el-button>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="原始碼編輯" name="1">
        <SourceEditor v-model="sourceCode" v-if="activeName==='1'"/>
      </el-tab-pane>
      <el-tab-pane label="圖像化編輯" name="2">
        <UIEditor v-model="sourceCode" v-if="activeName==='2'"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import convert  from 'xml-js'
import SourceEditor from '@/components/SourceEditor.vue'
import UIEditor from '@/components/UIEditor.vue'

export default {
  components: {SourceEditor,UIEditor},
  data() {
    return {
      idCount:0,
      activeName:"2",
      fileName:"example",
      key:"",
      sourceCode:"",
    }
  },
  created() {
    let dom=this.$global.createEle('Benchmark')
    let xJson=this.xmlToJson(dom.outerHTML)
    let jsonX=convert.js2xml(xJson)
    //console.log('2',jsonX)
    this.sourceCode=jsonX
    console.log(this.$global.flatEleList())
  },
  methods: {
    async importFile(e) {
      let file=e.target.files[0]
      let res=await this.readFile(file)
      this.sourceCode=res
      this.activeName='1'
    },
    readFile(file) {
      return new Promise((resolve) => {
        let reader = new FileReader();
        reader.onload = function(evt) {
          resolve(evt.target.result);
        };
        reader.readAsText(file);
      });
    },
    xmlToJson(x) {
      return convert.xml2js(x)
    },
    exportData() {
      var pom = document.createElement('a');
      var bb = new Blob([this.sourceCode]);
      pom.setAttribute('href', window.URL.createObjectURL(bb));
      pom.setAttribute('download', this.fileName+'.xml');
      pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
      pom.draggable = true; 
      pom.classList.add('dragout');
      pom.click();
    },
  }
}
</script>


