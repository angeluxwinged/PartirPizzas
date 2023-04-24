var partes = 2;
let boton;
let text;
let circPuntoPendiente;
let circBresenham;
let circDDA;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  text = createInput();
  text.size(70);
  text.position(width/2-text.width/2, 30);
  boton = createButton('Partir Pizzas');
  boton.position(width/2-boton.width/2, 60);
  boton.mousePressed(updateSlices);

  circPuntoPendiente = new PuntoPendiente((width/2)-300,height/2,100);
  circBresenham = new Bresenham(width/2,height/2,100);
  circDDA = new Daa((width/2)+300,height/2,100);
}

function draw() {
  background(252);

  circPuntoPendiente.draw();
  circBresenham.draw();
  circDDA.draw();
 
}

function updateSlices(){
  partes = int(text.value());
}
