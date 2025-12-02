

// loops and strings break continue

// for , while loop, do while loop   etc 

// let a ;
//  for ( i = 0; i> -10; i--){
//     // console.log(2 + "*" + i + "= " + i * 2)


//     // console.log( `2 * ${i} = ${i*2}`)
//     console.log(i)
//  }



//  for (i= 0 ; i<=10 ; i++){
//     if(i == 8){
//         break;
//     }else{
//         console.log(i)
//     }
//  }


// for (i= 0 ; i<=10 ; i++){
//     if(i == 8){
//         continue;
//     }else{
//         console.log(i)
//     }
//  }

// let i = 1;
//  while(i < 8){
//     console.log("inside loop")
//     if (i==3)
//         continue;
//     else
//         console.log(i)
//     i++;
//  }

// exmaple 
 
// let i = 1;
//  while(i < 8){
//     console.log("inside loop")
//     if (i==3){
//         i++;
//         continue;
//     }
//     else
//         console.log(i)
//     i++;
//  }

// let i = 1;

// while(i <= 5){
//     if(i == 3){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }


// let i = 1;

// while(i < 5){
//     console.log(i);
//     if(i == 2){
//         continue;
//     }
//     i++;
// }


// let i = 0;

// while(i < 10){

//     i++;

//     if(i % 2 == 0){
//         continue;
//     }

//     if(i == 7){
//         break;
//     }

//     console.log(i);

// }




// do while 


// type of string and multiple type to create string and what are the difference in all that and methods on string 

// three ways to create string 

// let str = "hardik"
// let str1 = 'hardik'
// let str2 = `hardik verma 
// the pro developer `

// console.log(str,str1,str2)
// console.log(typeof(str,str1,str2))



// lets add two string 

// let a = "hardik"
// let b = "verma"
// let ans = a + b;
// console.log(ans)


// you can do many thing with string find length convert to uppercase and lowercase

// impo string methods 

//Substring method
// let str = "hardikverma"
// console.log(str.substring(0,6))
// string.substring(startIndex, endIndex);

// USE OF BACK SLACE(  \  ) VALUE AFTER \ WILL KNOW AS NORMAL VALUE EVEN THE SPACIAL CHARACTER WILL WE TREAT AS NORMAL CHA


// Split method 
// STR1 = "one two three four five six"
// console.log(STR1.split("o"))


// STR1 = "one two three \"four\" five six"  (/)backslace example 
// console.log(STR1.split(" ")) 

// and you can use two backslace \\ to take power to other backslace 
// STR1 = "one \\two \\three \\four \\five \\six"  
// let name  = STR1.split('\\')
// console.log(name) 



//Join method
//array.join(separator);