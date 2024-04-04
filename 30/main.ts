let userName = ["mahad", "ali", "usman", "admin", "zeeshan"];

userName.forEach(oneUser =>{
    if(oneUser === "admin"){
        console.log(`Hello ${oneUser}, would you like to see a state report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for loging in again.`)
    }
})