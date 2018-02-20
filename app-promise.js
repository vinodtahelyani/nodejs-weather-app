var express = require('express');
var app = express();
var axios = require('axios');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var getWeather = require('./getWeather');

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/weather',(req,res)=>{
    res.render('weather',{temperature:'sss'});
    
});

app.post('/weather',urlencodedParser,(req,res)=>{
                    
                    var urlAdd='https://maps.google.com/maps/api/geocode/json?address=' + encodeURIComponent(req.body.address);
                    var temp=12;
                    axios.get(urlAdd).then((response)=>{
                        if(response.data.status === 'ZERO_RESULTS'){
                            throw new Error(`Unable to locate \'${req.body.address}\' :-(`);
                        }
                        else if(response.data.status === 'OVER_QUERY_LIMIT'){
                            throw new Error('Opps! Something Went Wrong :-(');
                        }
                        else{
                        //console.log(response.data.results[0].formatted_address);
                        var lat= response.data.results[0].geometry.location.lat;
                        var lng= response.data.results[0].geometry.location.lng;
                        var weatherUrl=`https://api.darksky.net/forecast/d55d494d13670f8da5583a39c6ecaac8/${lat},${lng}`;
                        return (axios.get(weatherUrl));
                        }
                    }).then((response)=>{
                        if(response.status === 200){
                            console.log((response.data.currently.temperature-32)*5/9);
                            res.render('weather',{ temperature : `It's ${Math.round((response.data.currently.temperature-32)*5/9)} °C in ${req.body.address}` } );
                        } 
                        else{
                        throw new Error('Unable to connect at this moment:-(');
                        }
                    }).catch((e)=>{
                        if(e.code === 'ECONNREFUSED'){
                            console.log( 'unable to connect');
                            res.render('weather',{ temperature : 'Unable to connect at this moment:-(' } );
                        }
                        else{
                            console.log( e.message);                            
                            res.render('weather',{ temperature : e.message } );e.message
                        }
                    });
});

app.listen(8000,'localhost');