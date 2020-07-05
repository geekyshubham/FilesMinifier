
var string = "this  is shubham takankhar"

function test(str){
return str.split(' ').reduce((x,y)=>{
 return Math.max(x,y.length)
  },0
  )
  
}
console.log(test("hello world wasssupokl"))