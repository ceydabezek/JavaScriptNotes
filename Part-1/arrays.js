// let item1 = "iphone 12";
// let item2 = "iphone 13";
// let item3 = "iphone 13 pro";

let itemler = ["iphone 12","iphone 13","iphone 13 pro"];
let prices = [9000, 12000, 20000];
let colors = ["gold","black","white"];

let item1 = ["iphone 12", 9000, "gold"];

let item2 = [];
item2[0] = "iphone 13";
item2[1] = 12000;
item2[2] = "black";

let item3 = [
    "iphone 13 pro", 
    20000, 
    ["black","white","blue"]
];

console.log(item3[2]);
console.log(item3[2][0]);
console.log(item3[2][1]);
console.log(item3[2][2]);
console.log(typeof item3[2]);

console.log(itemler[0]);
console.log(itemler[1]);
console.log(itemler[2]);

console.log(`${itemler[0]}-${prices[0]}-${colors[0]}`);
console.log(`${itemler[1]}-${prices[1]}-${colors[1]}`);
console.log(`${itemler[2]}-${prices[2]}-${colors[2]}`);

let nameofcourse = "Komple Web Geliştirme Eğitimi";
console.log(nameofcourse[5]);
console.log(nameofcourse.split(" ")[3]);