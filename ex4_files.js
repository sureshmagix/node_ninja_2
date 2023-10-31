// const xyz = require('./people');

// console.log(xyz);
// console.log(xyz.people);
// console.log(xyz.age);




const {people,age}= require('./people');
console.log(people);

console.log(age);
const os=require('os');

console.log(os.platform(),os.userInfo(),os.cpus(),os.hostname(),os.uptime())