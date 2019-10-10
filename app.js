document.addEventListener("DOMContentLoaded", function() {
    /*console.log("TERE!");
    
    let hello = "Hello world";
    console.log(hello);

    let rangeStart = 1;
    let rangeEnd = 100;
    let numberToCheck = 61;
    let inRange = false;

    for (let i =rangeStart; i<= rangeEnd; i++ ){
        if(i === numberToCheck) {
            inRange = true;
            break;
        }
    }
        
    /*if (inRange){
        console.log("The number is in range");
    }else {
        console.log("The number is out of range");
    }

    //Ternary Operator
    let result = inRange ? "In Range" : "Out of Range"; // küsimärk on, kas töötab või mitte. See on teine valik kuidas kontrolli teha. Saab kasutada, kui on 2 valikut.
    console.log(result);

    //--------------------------------------------------------------------------------------------------------
    //Write a program to display the multiplication table of a given number
    //Test data
    //number 5
    // Expected Output
    // 5*1 =5;
    // 5*2= 10;
    //......

    let number =5;

    for (let i = 1; i<= 10; i++ ){
        let result = number * i;
        
        //console.log(number, "X", i, "=", result); // esimene võimalus
        let string = `${number} x ${i} = ${result}`; //teine võimalus nr 43 ja 44 rida koos
        console.log(string);

    }*/

   //-------------------------------------------------------------------------------------------------------------

   let stringLenght;
   let string = "Hello world!";
   stringLenght = string.length;
   console.log(stringLenght);

   /*for (let i= 0;i < 12; i++){
       console.log(string[i]);
   }*/

   /*for (let i = string.length-1; i >=0; i--){
       console.log(string[i]);
       
   }*/

   for (let i =0; i<12; i++){

    if (string[i]==='o'){
        console.log("*");
    }else{
        console.log(string[i]);
    }

   }

   let substitute = string.replace("o", "*");
   console.log(substitute);




});