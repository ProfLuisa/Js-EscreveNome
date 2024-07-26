function setup() {
    createCanvas(600, 600);
    background ("black");
  }
  
  function draw(){
    
    stroke ("white");
    fill("green");
  
    if(mouseIsPressed){
      rect(mouseX, mouseY, 15, 25);
    }
      
  }