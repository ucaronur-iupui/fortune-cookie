class FortuneCookie extends RandomPicker {

    constructor(outputElement){
        // fortuneCookieAnswers is a big array that holds bunch of fortunes
        super(fortuneCookieAnswers);
        this.outputElement = outputElement;
    }

    generateFortune() {
        let reply = this.pickRandom();
        this.outputElement.innerHTML = reply;
    }
}


let fortuneCookie = new FortuneCookie(document.getElementById("fortune-text"));
