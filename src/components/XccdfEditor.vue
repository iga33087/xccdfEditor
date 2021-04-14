<template>
  <div class="xccdfEditor" @dragover.prevent @drop.prevent="importData">
    <button v-for="(item,index) in Object.keys(objList)" :key="index" @click="createEle(item)">Add {{item}}</button>
    <button @click="exportData">匯出</button>
    <div class="xccdfEditorBox">
      <div class="xccdfEditorBoxItem">檔案名稱<input type="text" v-model="fileName"/></div>
      <div v-if="fileData">
        <XccdfTree v-model="fileData.children" />
        <!--<div class="xccdfEditorBoxItem">title <input type="text" v-model="fileData.getElementsByTagName('title')[0].childNodes[0].nodeValue"></div>
        <div class="xccdfEditorBoxItem">description <input type="text" v-model="fileData.getElementsByTagName('description')[0].childNodes[0].nodeValue"></div>
        <div class="xccdfEditorBoxItem">version <input type="text" v-model="fileData.getElementsByTagName('version')[0].childNodes[0].nodeValue"></div>-->
        <!--<div class="xccdfEditorBoxItem">profile <button @click="add('Profile')">新增</button>
          <div>
            <tr v-for="(item,index) in getTagList('Profile')" :key="index">
              <td><input type="text" v-model="item.id"></td>
              <td><input type="text" v-model="item.getElementsByTagName('title')[0].childNodes[0].nodeValue"></td>
              <td><button @click="del(item)">刪除</button></td>
            </tr>
          </div>
        </div>
        <div class="xccdfEditorBoxItem">group <button @click="add('Group')">新增</button>
          <table border="1">
            <tr>
              <th>id</th>
              <th>title</th>
              <th>description</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item,index) in getTagList('Group')" :key="index">
              <td><input type="text" v-model="item.id"></td>
              <td><input type="text" v-model="item.getElementsByTagName('title')[0].childNodes[0].nodeValue"></td>
              <td><input type="text" v-model="item.getElementsByTagName('description')[0].childNodes[0].nodeValue" v-if="item.getElementsByTagName('description')[0]"></td>
              <td>
                <button @click="del(item)">刪除</button>
                <button>更多</button>
              </td>
            </tr>
          </table>
        </div>
        <div class="xccdfEditorBoxItem">rule <button @click="add('Rule')">新增</button>
          <table border="1">
            <tr>
              <th>id</th>
              <th>title</th>
              <th>description</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item,index) in getTagList('Rule')" :key="index">
              <td><input type="text" v-model="item.id"></td>
              <td><input type="text" v-model="item.getElementsByTagName('title')[0].childNodes[0].nodeValue"></td>
              <td><input type="text" v-model="item.getElementsByTagName('description')[0].childNodes[0].nodeValue" v-if="item.getElementsByTagName('description')[0]"></td>
              <td><button @click="del(item)">刪除</button></td>
            </tr>
          </table>
        </div>
        <div class="xccdfEditorBoxItem">value <button @click="add('Value')">新增</button>
          <table border="1">
            <tr>
              <th>id</th>
              <th>title</th>
              <th>description</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item,index) in getTagList('Value')" :key="index">
              <td><input type="text" v-model="item.id"></td>
              <td><input type="text" v-model="item.getElementsByTagName('title')[0].childNodes[0].nodeValue"></td>
              <td><input type="text" v-model="item.getElementsByTagName('description')[0].childNodes[0].nodeValue" v-if="item.getElementsByTagName('description')[0]"></td>
              <td><button @click="del(item)">刪除</button></td>
            </tr>
          </table>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
//import parseString from 'xml2js'
import XccdfTree from '@/components/XccdfTree.vue'
export default {
  components: {XccdfTree},
  data() {
    return {
      fileName: "",
      fileData: "",
      objList: {
        'Benchmark': {
          'title':'element',
          'description':'element',
          'status':'element',
          'notice':'element',
          'front-matter':'element',
          'rear-matter':'element',
          'reference':'element',
          'plain-text':'element',
          //'cpe2:platform-specification':'element',
          'platform':'element',
          'version':'element',
          'metadata':'element',
          'model':'element',
          'Profile':'element',
          'Value':'element',
          'Group':'element',
          'Rule':'element',
          'TestResult':'element',
          'signature':'element',
          'id':'attribute',
          'Id':'attribute',
          'resolved':'attribute',
          'style':'attribute',
          'style-href':'attribute',
          'xml:lang':'attribute',
        },
        'Group': {
          'title':'element',
          'description':'element',
          'Value':'element',
          'Group':'element',
          'Rule':'element',
          'signature':'element',
          'id':'attribute',
        },
        'Rule': {
          'title':'element',
          'description':'element',
          'ident':'element',
          'impact-metric':'element',
          'profile-note':'element',
          'fixtext':'element',
          'fix':'element',
          'check':'element',
          'complex-check':'element',
          'signature':'element',
          'role':'attribute',
          'id':'attribute',
          'severity':'attribute',
          'multiple':'attribute'
        },
        'Value': {
          'title':'element',
          'description':'element',
          'value':'element',
          'complex-value':'element',
          'default':'element',
          'complex-default':'element',
          'match':'element',
          'lower-bound':'element',
          'upper-bound':'element',
          'choices':'element',
          'source':'element',
          'signature':'element',
          'id':'attribute',
          'type':'attribute',
          'operator':'attribute',
          'interactive':'attribute',
          'interfaceHint':'attribute',
        },
        'Profile': {
          'status':'element',
          'dc-status':'element',
          'version':'element',
          'title':'element',
          'description':'element',
          'reference':'element',
          'platform':'element',
          'select':'element',
          'setcomplex-value':'element',
          'set-value':'element',
          'refine-value':'element',
          'refine-rule':'element',
          'metadata':'element',
          'signature':'element',
          'id':'attribute',
          'prohibitChanges':'attribute',
          'abstract':'attribute',
          'note-tag':'attribute',
          'extends':'attribute',
          'xml:base':'attribute',
          'Id':'attribute',
        },
        'check': {
          'check-import':'element',
          'check-export':'element',
          'check-content-ref':'element',
          'check-content':'element',
          'system':'attribute',
          'negate':'attribute',
          'id':'attribute',
          'selector':'attribute',
          'multi-check':'attribute',
          'xml:base':'attribute',
        },
        'fixtext': {
          'sub':'element',
          'xml:lang':'attribute',
          'override':'attribute',
          'fixref':'attribute',
          'reboot':'attribute',
          'strategy':'attribute',
          'disruption':'attribute',
          'complexity':'attribute',
        },
        'fix': {
          'sub':'element',
          'instance':'element',
          'id':'attribute',
          'reboot':'attribute',
          'strategy':'attribute',
          'disruption':'attribute',
          'complexity':'attribute',
          'system':'attribute',
          'platform':'attribute',
        },
        'choices': {
          'choice':'element',
          'complex-choice':'element',
          'mustMatch':'attribute',
          'selector':'attribute',
        },
        'TestResult': {
          'benchmark':'element',
          'tailoring-file':'element',
          'title':'element',
          'remark':'element',
          'organization':'element',
          'identity':'element',
          'profile':'element',
          'target':'element',
          'target-address':'element',
          'target-facts':'element',
          'target-id-ref':'element',
          'platform':'element',
          'set-value':'element',
          'set-complex-value':'element',
          'rule-result':'element',
          'score':'element',
          'metadata':'element',
          'signature':'element',
          'id':'attribute',
          'start-time':'attribute',
          'end-time':'attribute',
          'test-system':'attribute',
          'version':'attribute',
          'Id':'attribute',
        },
        'rule-result': {
          'result':'element',
          'override':'element',
          'ident':'element',
          'metadata':'element',
          'message':'element',
          'instance':'element',
          'fix':'element',
          'check':'element',
          'complex-check':'element',
          'idref':'attribute',
          'role':'attribute',
          'severity':'attribute',
          'time':'attribute',
          'version':'attribute',
          'weight':'attribute',
        },
        'override': {
          'old-result':'element',
          'new-result':'element',
          'remark':'element',
          'time':'attribute',
          'authority':'attribute',
        },
        'tailoring-file': {
          'href':'attribute',
          'id':'attribute',
          'version':'attribute',
          'time':'attribute',
        },
        'Tailoring': {
          'benchmark':'element',
          'status':'element',
          'dc-status':'element',
          'version':'element',
          'metadata':'element',
          'Profile':'element',
          'signature':'element',
          'id':'attribute',
          'Id':'attribute',
        },
        'select': {
          'idref':"attribute",
          'selected':"attribute",
        },
        'refine-value': {
          'idref':'attribute',
          'selector':'attribute',
        }
      }
    }
  },
  created() {
    let parser=new DOMParser()
    this.fileData=parser.parseFromString('',"text/xml");
    let html=this.createEle('Benchmark').outerHTML
    console.log(html)
    this.fileData=parser.parseFromString(html,"text/xml");
    console.log(this.fileData.childNodes)
  },
  methods: {
    importData(e) {
      let file=e.dataTransfer.files[0]
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          let parser=new DOMParser()
          this.fileData=parser.parseFromString(event.target.result,"text/xml")
          console.log('fileData',this.fileData.childNodes)
          resolve(event.target.result)
        };
        reader.readAsBinaryString(file)
      })
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
      return this.fileData.getElementsByTagName(x)
    },
    del(x) {
      x.parentNode.removeChild(x)
      this.$forceUpdate()
    },
    add(x) {
      let dom=this.fileData.getElementsByTagName(x)[0]
      let copyDom=dom.cloneNode(true);
      dom.parentNode.appendChild(copyDom);
      this.$forceUpdate()
    },
    createEle(x) {
      let newEle=this.fileData.createElement(x);
      let newText=this.fileData.createTextNode(" ");
      newEle.appendChild(newText);
      if(this.objList[x]) {
        for(let item of Object.keys(this.objList[x])) {
          if(x==item) continue; 
          if(this.objList[x][item]=='element') {
            //let newEleC = this.fileData.createElement(item)
            newEle.appendChild(this.createEle(item));
          }
          else if(this.objList[x][item]=='attribute') {
            newEle.setAttribute(item, "");
          }
        }
      }
      console.log(newEle)
      return newEle
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