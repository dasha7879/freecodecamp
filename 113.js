let x = [1,2,3,4,5,6,7,8,9,10]

function head (x){
    let head = x[0]
    return head

}
console.log(head (x));

function tail (x){
    let tail  = x.slice(1)
    return tail

}
console.log(tail (x))

function last (x) {
    let last = x[x.length-1]
    return last
}

console.log(last(x))

function init (x){
    let init = x.slice(0,-1)
    return init 

}
console.log(init (x))

let array =[-2,-3,0,1,2,3,4,5]
let result = []

for(let elem of array) {
    if(elem > 0 ){
        result.push (elem)
    }

}
console.log(result)

let arr = ['a', 'b', 'c', 'd', 'e'];
let result = [];

for( let i = arr.length-1; i>=0; i--){
    result.push(arr[i])
}
console.log(result)
let arr = []
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = []

for (let elem of arr) {
	if (elem % 2 != 0) {
		result.push(elem);
	}
}

console.log(result);


Объекты

let obj = {}
obj ['Monday'] = 1;
obj ['Tuesday'] = 2;
obj ['Saturday'] = 3;
obj ['Thursday'] =4;

console.log(obj)

let values = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 
	'вс']; 
let key = [1, 2, 3, 4, 5, 6, 7];
let obj = {}

for (i=0; i<key.length;i++){
    obj[key[i]] = values[i]
}
console.log(obj)

let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 
	'e': 17}; 
let result = {}

for (let key in obj){
    if (obj[key] >= 10 && obj[key]<=20 ){
        result[key] = obj[key]
        
    }

}
console.log(result)

let obj = {1: 'пн', 2: 'вт', 3: 
	'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'}; 
let result = {};
let result1 = {};

for (let key in obj){
result[obj[key]] = key
}

for (let key in result){
    if(result[key] %2 !== 0){
        result1[key] = result[key]
    }
}
console.log(result1)


let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 
	5}; 
let result = {};

for (let key in obj) {
	if (obj[key] % 2 == 0) {
		result[key] = obj[key];
	}
}

console.log(result);


let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let res = {}
for(let key in obj){
    res[obj[key]]=key
}
console.log(res)



let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
 
let obj2 ={}
for(let key in obj){
    if(obj[key]>400){
    obj2[key]=(obj[key]*0.1)+obj[key]
}

}
console.log(obj2)
