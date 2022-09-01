class RandomPicker {

    constructor(items){
        this.items = items;
    }

    // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    pickRandom(){
        return this.items[Math.floor(Math.random() * this.items.length)];
    }
}





