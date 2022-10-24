/*
1 Output:
Error 1
Success 4
*/

//2 Ans:
function sleep(time) {
    return new Promise((resolve)=>setTimeout(resolve,time));
}        
async function main() {
    await sleep(4000);
    console.log('2. Sleep function');
}
main();

/* 3 Output:
2
4
undefined
8
*/

/* 4 Output:
start
middle
1
end
success
*/

//5 Ans:
function delay() {
    return new Promise((resolve,reject)=>setTimeout(resolve,1000));
    }

    let promise = delay();
promise
.then(function() {
console.log('5. Returning resolve after 1000ms');
});


/* 6 Output:
SUCCESS!
*/

/* 7 Output:
Get error in console with message: Error: The Fails!
& after error message prints undefined
*/

/* 8 Output:
start
end
resolve
setTimeout
*/

/* 9&10 Output:
start
end
1
2
*/


