let students = ["jason","davide","gabriele"];


conclusion1 = students.length;

//array to string
conclusion = students.toString();
conclusion=students.join(" ");


//deleting element
conclusion=students.pop();
conclusion=students.shift();

//adding element
conclusion=students.push("tom");
conclusion=students.unshift("tom");

//EXAMPLE
let brands1 = ["mazda","toyota"];
let brands2 = ["mazda","renault"];
let brands3 = ["mercedes"];
 //conclusion = brands1.concat(brands2,brands3);
 conclusion = brands1.splice(0,1,"audi","bmw")



console.log(conclusion);
console.log(brands1);