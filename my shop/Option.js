class Option {

    constructor() {
      this.title = createElement('h2')
      this.title2 = createElement('h3');
      this.option1 = createButton('Fertilizer');
      this.option2 = createButton('Pesticide');
      this.option3 = createButton('Weedicide');
      this.option4 = createButton('Seed');
    }
    hide(){
        this.title2.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
    }
  
    display(){
      this.title.html("Welcome to GAYATRI AGRO SALES");
      this.title.position(350, 0);
      this.title2.html("Please choose the item type ");
      this.title2.position(150,80);
      this.option1.position(150,100);
      this.option2.position(150,120);
      this.option3 .position(150,140);
      this.option4.position(150,160);

     /* this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });*/
  
    }
  }