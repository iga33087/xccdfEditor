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
        <el-button type="success">匯出</el-button>
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
import EleList from '@/assets/data/EleList.js'
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
      EleList:EleList,
      sourceCode:"",
      objList:"",
    }
  },
  created() {
    let dom=this.createEle('Benchmark')
    let xJson=this.xmlToJson(dom.outerHTML)
    let jsonX=convert.js2xml(xJson)
    console.log('1',this.addIdAndPid(xJson))
    console.log('2',jsonX)
    this.sourceCode=jsonX
    //console.log('3',this.addIdAndPid(xJson['elements'][0]))
  },
  methods: {
    getTagEle(x) {
      if(!EleList[x]) return []
      let arr=Object.keys(EleList[x])
      let res=arr.filter(key=> EleList[x][key]==='element')
      return res
    },
    getTagAtt(x) {
      if(!EleList[x]) return []
      let arr=Object.keys(EleList[x])
      let res=arr.filter(key=> EleList[x][key]==='attribute')
      return res
    },
    async importFile(e) {
      let file=e.target.files[0]
      let res=await this.readFile(file)
      this.sourceCode=res
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
    createEle(x) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString("","text/xml");
      let getTagEle=this.getTagEle(x)
      let getTagAtt=this.getTagAtt(x)
      let dom = xmlDoc.createElement(x);
      for(let item of getTagAtt) {
        dom.setAttribute(item, "");
      }
      for(let item of getTagEle) {
        if(item===x) continue;
        let newDom=this.createEle(item)
        dom.appendChild(newDom);
      }
      return dom
    },
    xmlToJson(x) {
      return convert.xml2js(x)
    },
    addIdAndPid(x,id) {
      this.idCount++
      let nowId=this.idCount
      x['_id']=nowId
      if(id) x['_pid']=id
      if(x.elements&&x.elements.length) {
        for(let item of x.elements) {
          this.addIdAndPid(item,nowId)
        }
      }
      return x
    }
  }
}
</script>


