import EleList from '@/assets/data/EleList2.js'

export default {
  getTagEle(x) {
    if(!EleList[x]) return []
    let arr=Object.keys(EleList[x])
    let res=arr.filter(key=> EleList[x][key]['category']==='element')
    return res
  },
  getTagAtt(x) {
    if(!EleList[x]) return []
    let arr=Object.keys(EleList[x])
    let res=arr.filter(key=> EleList[x][key]['category']==='attribute')
    return res
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
    let newText=xmlDoc.createTextNode("");
    dom.appendChild(newText);
    return dom
  },
}