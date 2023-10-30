let citations = [6,6,4,8,4,3,3,10]
citations.sort((a,b)=> a-b);
console.log(citations);
const len = citations.length
let res = 0
for(let h = 0;h < len; h++){
  if(citations[h] >= len - h){
    res = len - h
    break
  }else{
    continue
  }
  }
