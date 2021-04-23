function encode (str){
  if(!str){
    return 'error'
  }
  else if(str.length < 4){
    while(str.length<4){
      str+=''
      console.log(str)
    }
  }
    let arr = []
    for (let i = 0; i< str.length; i++){
        let bin = str[i].charCodeAt().toString(2);
      console.log(Array((8-bin.length)+1).join("0")+bin)
        arr.push(Array((8-bin.length)+1).join("0") + bin)
    }
    arr.reverse()
    str = ''
    for(let i = 0; i< 8; i++){
        str = str + arr[0][i]+arr[1][i]+arr[2][i]+arr[3][i]
    }
    return parseInt(str,2)
}
console.log(encode('tren'))