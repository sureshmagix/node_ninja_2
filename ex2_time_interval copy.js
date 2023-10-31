
setTimeout(()=>{
    console.log('in the time out');
    clearInterval(int);
},5000);


const int = setInterval(()=>{
    console.log('int the interval');

},2000);




