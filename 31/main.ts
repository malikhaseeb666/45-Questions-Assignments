let userName = ["mahad", "ali","zeeshan", "admin","usman"]

userName = []
if (userName.length === 0){
console.log("your array in empty we need to find some users!")
}else{
    
userName.forEach(oneUser =>{
    if(oneUser === "admin"){
        console.log(`Hello ${oneUser}, would you like to see a state report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for loging in again.`)
    }
})
}

