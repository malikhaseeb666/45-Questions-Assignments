 // Rest Parameter Syntax
 function make_sandwich(...list: string[]):void {
    console.log(`==================================`);
    console.log("Sandwich order");
    for (let item of list) {
        console.log(`- ${item}`);

    }
    console.log("Enjoy your sandwich!\n");
 }

 make_sandwich("Ham", "Cheese", "Lettuce");
 make_sandwich("Turkey", "Swiss");
 make_sandwich("Peant Butter", "Jelly");