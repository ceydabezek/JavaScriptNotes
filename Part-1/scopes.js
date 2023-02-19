var name = "Jason";

function print() {
    var name = "Tom";
    var age = 20;
    console.log("function scope:",name,age);
}
if(true){
    let name= "Alex";
    console.log(name);
}
console.log(name);
print();