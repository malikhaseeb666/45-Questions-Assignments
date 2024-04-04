let current_users = ["usman", "ali", "areeba", "zain", "osama"]

let new_users = ["haseeb", "ayesha", "ali", "mahad", "areeba"]

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   if(our_condition){
      console.log(`sorry ${new_one_user} is already taken!`)
    }else{
     console.log(`This username ${new_one_user} is available`)
    }
})