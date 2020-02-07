const Person = require("./Person.js");
const faker = require('faker');
class People{

constructor(){


 
 this.people = [];

const faker = require('faker');

for(let i=0;i<99;i++){
    let name = faker.name.findName();
    let color = faker.commerce.color();
    this.people.push(new Person(name, color));
}

}



readColor(color){

    

}


}

module.exports = People;