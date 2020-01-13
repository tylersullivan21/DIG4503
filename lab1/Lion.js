const Cat require("./Cat.js");

class Lion extends Cat{

    constructor(color, age, weight){

        // super takes the color and age from parent
        super(color, age);
        this.weight = weight;
    }
}

module.exports = Lion;