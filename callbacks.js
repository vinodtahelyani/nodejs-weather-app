var getuser = (id , callback ) =>{
    var user = {
        id:id,
        name:'vinod'
    };
    callback(user);
};

getuser(22,(user,admin) => {
    console.log(user);
    if(user.id==22){
        console.log("aaaa");
    }
});