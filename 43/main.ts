//



let Magicians:string[]=["Tickola", "MR Beans",  "Gippy"];
let GreatMagicians:string[]=[];
function make_great(list:string[]):string[]{
    for(let item of list){
        GreatMagicians.push("The Great Man "+ item);
    }
    return GreatMagicians;

}

function ShowMagicians(list:string[]):void{
    console.log(`----------------------------------`);
    for(let item of list){
        console.log(item);

    }

}

let GreatMag:string[]=make_great(Magicians);
// calling a function
ShowMagicians(Magicians);
ShowMagicians(Magicians);


