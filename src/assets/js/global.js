import EleList from '@/assets/data/EleList.js'

export default {
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
}