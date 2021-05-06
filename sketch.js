let myOrange = []; 
let myTokomon;
let amount = 20;
let img;

function preload(){
  img = loadImage('iloveorange.PNG');
}

function setup() {
      createCanvas(windowWidth, windowHeight);
      for (let i = 0; i < amount; i++){
      myOrange[i] = new Orange(); 
      }
      myTokomon = new Tokomon();

}

function draw() {
      background(250, 250, 200);

      for (let i = 0; i < amount; i++){
        myOrange[i].display();
        myOrange[i].move();
        // myOrange[i].eat();
    }

    myTokomon.display();
    myTokomon.move();

  }

class Orange{ 

    constructor(){ 
        // this.c = [color(240, 170, 10), color(0,100,100)]; 
        // this.colors = random(this.c);
        this.c1 = color(240, 170, 10);
        this.c2 = color(0, 100, 100);
        this.xpos = random(width);
        this.ypos = random(height);
        this.xspeed = random(1, 3);
        this.yspeed = random(1, 3);
        this.r1 = 10;
        this.r2 = 10;
    }

    display() { 
      this.d = dist(mouseX, mouseY, this.xpos, this.ypos);
      this.d2 = dist(mouseX, mouseY, this.xpos+50, this.ypos+50);
        rectMode(CENTER);
        noStroke();
        fill(this.c1);
        ellipse(this.xpos, this.ypos, this.r1);
        fill(this.c2);
        ellipse(this.xpos+50, this.ypos+50, this.r2);
       
        if(this.c1 && this.d < 35){
          this.r1 = 0;
        }
        if(this.c2 && this.d2 < 35){
          this.r2 += 1;
        }   
    }
  
    move() {
      if (this.xpos >= width || this.xpos < 0){
        this.xspeed = this.xspeed * -1;
      }

      if (this.ypos >= height || this.ypos < 0){
        this.yspeed = this.yspeed * -1;
      }
      this.xpos = this.xpos + this.xspeed;
      this.ypos = this.ypos + this.yspeed;
    }

    // eat(){
    // this.d = dist(mouseX, mouseY, this.xpos, this.ypos);
    // if(this.d < 70){
    //   fill(250, 250, 200);
    // }
    //}
  }

class Tokomon {

  constructor(){
    this.tspeed = 10;
    this.tx = 25;
    this.ty = 25;
  }

  display(){
    imageMode(CENTER);
    image(img, this.tx, this.ty, 25, 25);
    // this.tx = constrain(mouseX, 35, width-35);
    // this.ty = constrain(mouseY, 35, height-35);
  }

  move(){
    this.tx = constrain(mouseX, 25, width-25);
    this.ty = constrain(mouseY, 25, height-25);

  }
}