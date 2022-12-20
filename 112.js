( function(a){arguments [0] = 10;return a;})(5)

const details = { name:'John!',}
 function getMessage (message){
     return `${message} ${this.name}`;
    } 
    console.log(getMessage.apply(details, ['Hello']));
console.log(message);
var message = 'hello!'

var name ='John';
 function printName(){
     console.log(name) 
     var name = 'Peter'; 
     console.log(name);
    }
     printName(); 
    
     console.log(typeof g());
const details = {
    message: 'Hello!',
}
 function getMessage(){
     return this.message;
    }
    console.log (getMessage.call(details))

    var  a = 1,
         b = function f(x) {
        x && a(--x);
    }; 
    console.log(a)

    let name = 'John';

    function printName() {
        let name = 'Peter';
        console.log(name);
    }
    printName();
    function foo (a,b){
        return a*b;
    }
    const bar = foo.bind(null,2,3)
    console.log(bar ());



let obj3 = {
    name : 'John'
}


function printName(){
    let name = "Peter"
    console.log(this.name)
}

let printNameMethod = printName.bind(obj3)

printNameMethod()


let f = function(a,b) { return a+b }
console.log(f(1,2))

let f = new Function("a,b", "return a+b")
console.log(f(1,2))

let f = new Function("a", "b", "return a+b")
// console.log(f(1,2))
let f = (a, b) => a + b
console.log(f(1,2))

let f = (a, b) => { a + b }
console.log(f(1,2))

var name = 'John'

var user = {
    name : 'Peter',
    printMessage(){
        console.log(`Hello, ${this.name}!`);
    }
};

var printMessage = user.printMessage;
console.log(printMessage())

for (var i = 0, i<10, i++) {

};
console.log(i)

function myLanguages(results: Object[]) {
    return results.entries
  }