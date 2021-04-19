<template>
  <div class="home">
    <div class="toolBar">
      <div class="toolBarItem">
        <span class="toolBarItemLabel">檔案名稱</span>
        <el-input v-model="fileName" placeholder="檔案名稱" style="width:200px;"></el-input>
      </div>
      <div class="toolBarMenu">
        <input ref="upFile" type="file" style="display:none;" @change="importData">
        <el-button @click="$refs.upFile.click()">匯入</el-button>
        <el-button type="primary" @click="exportData">匯出</el-button>
      </div>
    </div>
    <XccdfTreeItem v-model="fileData"/>
  </div>
</template>

<script>
// @ is an alias to /src
import XccdfTreeItem from '@/components/XccdfTreeItem.vue'
import EleList from '@/assets/data/EleList.js'

export default {
  name: 'Home',
  components: {
    XccdfTreeItem,
  },
  data() {
    return {
      fileName: "example",
      fileData: "",
      fileDataHTML: "",
      EleList:EleList,
      obj:""
    }
  },
  created() {
    let parser=new DOMParser()
    this.fileData=parser.parseFromString('',"text/xml");
    let html=this.createEle('Benchmark').outerHTML
    this.fileData=(parser.parseFromString(html,"text/xml")).documentElement
    this.fileDataHTML=this.fileData.childNodes[0].outerHTML
    console.log('home', this.fileData)
  },
  methods: {
    importData(e) {
      console.log(e)
      let file=e.target.files[0]||e.dataTransfer.files[0]  //e.target.files[0] || e.dataTransfer.files[0]
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          let parser=new DOMParser()
          this.fileData=(parser.parseFromString(event.target.result,"text/xml")).documentElement
          resolve(event.target.result)
        };
        reader.readAsBinaryString(file)
      })
    },
    exportData() {
      var pom = document.createElement('a');
      var bb = new Blob([this.fileData.outerHTML]);
      pom.setAttribute('href', window.URL.createObjectURL(bb));
      pom.setAttribute('download', this.fileName+'.xml');
      pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
      pom.draggable = true; 
      pom.classList.add('dragout');
      pom.click();
    },
    createEle(x) {
      let obj={}
      let newEle=this.fileData.createElement(x);
      let newText=this.fileData.createTextNode(" ");
      newEle.appendChild(newText);
      obj.html=newEle
      if(EleList[x]) {
        for(let item of Object.keys(EleList[x])) {
          if(x==item) continue; 
          if(EleList[x][item]=='element') {
            //let newEleC = this.fileData.createElement(item)
            newEle.appendChild(this.createEle(item));
          }
          else if(EleList[x][item]=='attribute') {
            newEle.setAttribute(item, "");
          }
        }
      }
      return newEle
    },
  }
}
</script>
