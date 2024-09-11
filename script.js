class game {
    constructor() {

        //component  elementDecision
           this.elementDecision= document.querySelector(".elementDecision");
           this.elementDecisionElementText = document.querySelector(".elementDecision .element");
           this.elementDecisionImage = document.querySelector(".elementDecision .img");
           this.elementDecisiontInput = document.querySelector(".elementDecision .input");
           this.elementDecisionBtn = document.querySelector(".elementDecision .btn");
           this.elementDecisionScoreNumber = document.querySelector(".elementDecision .score-number");

        ///component loader
           this.loader = document.querySelector(".loader-container");


        //component result
           this.result= document.querySelector(".result");
           this.elementDecisionElement1 = document.querySelector(".result .element1 ");
           this.elementDecisionElement2 = document.querySelector(".result .element2");
           this.elementDecisiontParagraph = document.querySelector(".result .paragraph");
           this.elementDecisionImg1 = document.querySelector(".result .img-1");
           this.elementDecisionImg3 = document.querySelector(".result .img-3");
           this.elementDecisionScoreNumber = document.querySelector(".result .score-number");
           this.elementDecisionScoreNumber = document.querySelector(".result .btn");

        //component ngt
           this.NgtResult= document.querySelector(".ngt-result");
           this.NgtelementDecisionElement1 = document.querySelector(".ngt-result .ngt-element1 ");
           this.NgtelementDecisionElement2 = document.querySelector(".ngt-result .ngt-element2");
           this.NgtelementDecisiontParagraph = document.querySelector(".ngt-result .ngt-paragraph");
           this.NgtelementDecisionImg1 = document.querySelector(".ngt-result .img-1");
           this.NgtelementDecisionImg3 = document.querySelector(".ngt-result .img-3");
           this.NgtelementDecisionScoreNumber = document.querySelector(".ngt-result .ngt-score-number");
           this.NgtelementDecisionNgtBtn = document.querySelector(".ngt-result .ngt-btn");



           

        // Bind the click event to the fetchData method
        this.button.addEventListener('click', () => this.fetchData());
    }


}