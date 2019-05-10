//Methods of reversing a string

//Method 1: Split the string into an array, reverse the array, join the array back into a string

reverseString =(str)=>(str.split("").reverse().join(""));

console.log(reverseString("From that day on, if I was goin' somewhere, I was runnin'!"));


//Method 2: Decrementing for loop

let reverseStringA =(str)=>{

   let reversed = "";

  for(let i = str.length -1; i >= 0; i --){

    reversed += str[i];

  }

  return reversed;
}
 
 console.log(reverseStringA("You've got to put the past behind you before you can move on."));

 //Method 3: Recursion

//substr() method returns the characters in a string starting at the specified location through the specified number of characters
//"hello".substr(1) //"ello"
//charAt()method returns the specified characters from a string
//"hello".charAt(0);//"h"
 reverseStringB =(str)=>{
   
   return (str === "") ? "" : reverseStringB(str.substr(1)) + str.charAt(0);

 }

 console.log(reverseStringB("I'm pretty tired, I think I'll go home now."));

