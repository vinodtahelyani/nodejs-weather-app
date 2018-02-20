var asyncAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }
        else{
            reject('give me some numbers');
        }
    });
};



asyncAdd(2,2).then((sum)=>{
    console.log(sum);
    return asyncAdd('sum',6);
}).then((sum)=>{
    console.log(`sum is ${sum}`);
}).catch((msg)=>{
    console.log(msg);
});










// var somePromise =new Promise((resolve,reject)=>{
//     resolve('s');
//     reject('hey it didn\'t work');
// });

// somePromise.then((message)=>{
//     console.log(message);
// },(message)=>{
//     console.log(message);
// });

// console.log('athuuu');




// var asyncAdd = (a,b)=>{
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 if(typeof a === 'number' && typeof b === 'number'){
//                     resolve(a+b);
//                 }
//                 else{
//                     reject('Arguments must be numbers.');
//                 }
//             },00);
//     });
// };


// asyncAdd(2,7).then((message)=>{
//     console.log(`Results: ${message}`);
//     asyncAdd(message,23);
// }).then((message)=>{
//     console.log(message);
// },(message)=>{
//     console.log(message);
// });







// var request = require('request');
// new Promise((resolve,reject)=>{
//         request({
//             url:'https://maps.google.com/maps/api/geocode/json?address=490001' ,
//             json :true
//         },(error,response,body)=>{
//             if(error){
//                 reject('unable to connect due to some error error occured');
//             }
//             else{
//                 resolve(JSON.stringify(body.results[0].formatted_address));
//             }
//         });        //do some stuff here 
// }).then((message)=>{
//         console.log(message);
// },(message)=>{
//         console.log(message);
// });
