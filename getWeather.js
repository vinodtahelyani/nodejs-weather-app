//const yargs = require('yargs');
const axios = require('axios');
// var argv = yargs
// .options({a:{
//         demand:true,
//         alias:'address',
//         describe:'address to fetch wether',
//         string:true
//     }
// })
// .help()
// .alias('help','h')
// .argv;



module.exports = (address)=>{
console.log(address);
var urlAdd='https://maps.google.com/maps/api/geocode/json?address=' + encodeURIComponent(address);
var temp=12;
axios.get(urlAdd).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('unable to find the address');
    }
    else if(response.data.status === 'OVER_QUERY_LIMIT'){
        throw new Error('betttr luck next time');
    }
    else{
    console.log(response.data.results[0].formatted_address);
    var lat= response.data.results[0].geometry.location.lat;
    var lng= response.data.results[0].geometry.location.lng;
    var weatherUrl=`https://api.darksky.net/forecast/d55d494d13670f8da5583a39c6ecaac8/${lat},${lng}`;
    return (axios.get(weatherUrl));
    }
}).then((response)=>{
    if(response.status === 200){
         console.log(Math.round((response.data.currently.temperature-32)*5/9));
    } 
    else{
    throw new Error('Unable to connect to weather');
    }
}).catch((e)=>{
    if(e.code === 'ECONNREFUSED'){
        console.log('unable to connect');
    }
    else{
        console.log(e.message);
    }
});

};
