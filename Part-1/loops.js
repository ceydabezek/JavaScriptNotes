let numbers = [1,5,7,15,3,25,12,24];
//1-Write the square of each element in the list of numbers
//for (let number of numbers){
 //   console.log(number * number);
//}

//2-Which numbers are multiples of 5
//for (let i=0; i<numbers.length; i++ ){
 //   if(numbers [i]%5==0){
    //    console.log(numbers[i]);
  //  }
//}

//3-Sum of even numbers in a list of numbers
//let total = 0;
//for (let i in numbers){
    //if(numbers[i] % 2==0){
      //  total +=numbers[i];
    //}
//}
//console.log(total); 

//4-Write down the grade point average and achievement status of each student in the list of students
let students = [
    {"name":"yiğit","surname":"bilgi","grades":[60,70,60]},
    {"name":"çınar","surname":"bilgi","grades":[80,70,80]},
    {"name":"ada","surname":"bilgi","grades":[10,20,60]},
];

for( let student of students){
    let not_total = 0;
    let average = 0;
    let piece = 0;
  

    for(let not of student.grades){
        not_total += not;
        piece++;
    
    }
    average = not_total/piece;
    console.log(`${student.name} ${student.surname} 
      average of student: ${average}.`)
    if( average>=50){
      console.log("succesed.")
    } else {
      console.log("failed.")
    }
   
}
