class Person {
constructor(name, favoriteColor){
    this.name = name;
    this.favoriteColor = favoriteColor;
}

speak(){
    console.log(chalk.favoriteColor(this.name))
}


}

module.exports = Person;