const os=require('os');
const fs=require('fs');
const userData= require('./user.js');

let user=os.userInfo();
let date = new Date();

let message= `User ${user.username} started App at ${date}`

if(userData.log()){
    fs.appendFile("helo.txt",message,(err)=>{
        if(err){
            console.log("Not able to append");
        }
    })
}
