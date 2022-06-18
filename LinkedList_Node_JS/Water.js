class Water {
    #type;

    constructor(){
        this.#setType("Water");
    }

    getType(){
        return this.#type;
    }

    #setType(type){
        this.#type = type;
    }
}


module.exports = Water;