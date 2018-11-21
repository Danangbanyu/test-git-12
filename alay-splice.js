function panggilsplice(){
let s = [1,2,3,4,5,11];
console.log(s);
s.splice(0,0,'sapi')
return s
}
// unshift
function panggilunshift() {
  let a1 = [1,2,3,4,5];
  console.log(a1)
  a1.unshift('sapi','beruang')
  return a1
}
console.log(panggilsplice())
console.log('-------------')
console.log(panggilunshift())
