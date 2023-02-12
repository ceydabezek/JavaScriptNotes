let userA = {
    "name": "Jason",
    "surname": "Anderson",
    "age": "30",
    "adres": {
        "city" : "Roma",
        "district" : "Tiburtina"
    },

        "hobies" : ["cinema","sport"]
}
 let conclusion;
 conclusion = userA.name
 conclusion = userA.surname
 conclusion = userA["age"]
 conclusion = userA.adres.city
 conclusion = userA.adres.district
 conclusion = userA.hobies[0]
 conclusion = userA.hobies[1]

 let users = [
    userA];
    conclusion =users[0].adres;
 console.log(conclusion);