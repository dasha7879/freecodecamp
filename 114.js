
 function disemvowel (str) {
    let str1 = str.replace (/[aeiou]/gi, '');
    return str1
 
    }
    console.log (disemvowel(str));
let str = 'mamik'
let bigStr = str.toUpperCase()
console.log(bigStr)

function isIsogram(str){
   let letters = {}
   for(let i=0; i<str.length; i++){
     const bykva = str[i].toLocaleLowerCase()
     if(!letters[bykva]){
       letters[bykva] = true
     } else {
       return false
     }
   }
   
   return true
 }

 console.log(isIsogram("Dermatoglyphics"))
 
 let s = 15
function explode(s) {
  let result = '';
  let a = s.toString(); 
  for (let i=0; i < a.length; i++){
    let y = a[i].repeat(a[i]);
    result += y;
  }
  return result;
}

function getParticipants(handshakes){
    if(handshakes < 1){return 1}
    for(i=0, j=1; i<handshakes; i+=j++)
      return j
  }
  
    
  