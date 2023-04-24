class Bresenham{
  constructor(x,y,r){
      this.x = x;
      this.y = y;
      this.r = r;
  }

  draw(){
  stroke(0,0,255);
  let ang = TWO_PI / partes;

  let x1 = 0;
  let y1 = this.r;
  let error = 3 - 2 * this.r;

  while (x1 <= y1){
    point(this.x + x1, this.y + y1);
    point(this.x - x1, this.y + y1);
    point(this.x + x1, this.y - y1);
    point(this.x - x1, this.y - y1);
    point(this.x + y1, this.y + x1);
    point(this.x - y1, this.y + x1);
    point(this.x + y1, this.y - x1);
    point(this.x - y1, this.y - x1);

    if (error < 0){
      error = error + 4 * x1 + 6;
    } else {
      error = error + 4 * (x1 - y1) + 10;
      y1--;
    }

    x1++;
  }
  
  for (let i = 0; i < partes; i++){
    let finalAng = (i + 1) * ang;
    let finalX = this.x + this.r * cos(finalAng);
    let finalY = this.y + this.r * sin(finalAng);
    line(this.x, this.y, finalX, finalY);
  }
}
}