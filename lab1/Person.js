const Chalk = require("chalk");
class Person {
constructor(name, favoriteColor){
    this.name = name;
    this.favoriteColor = favoriteColor;
}

speak(){
    //My first idea.//
    console.log(Chalk.keyword(this.favoriteColor.toLowerCase())(this.name));
}


}

module.exports = Person;