// make a function
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
   return magicians.map(name => `The great ${name}`);
}

// array magicians name 
let magician_names = ["harry", "ali", "usman"];

let great_magicians = make_great(magician_names);

show_magicians(great_magicians);

