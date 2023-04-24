class Daa{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
}

draw(){
    stroke(0,255,0);
    this.circulo();
    
    let delta = 360 / partes;
    let x0 = this.x + this.r;
    let y0 = this.y;
    
    for (let i = 0; i < partes; i++) {
        let angulo = (i + 1) * delta;
        let x1 = this.x + this.r * cos(angulo * PI / 180);
        let y1 = this.y + this.r * sin(angulo * PI / 180);
        
        line(this.x, this.y, x0, y0);
        
        x0 = x1;
        y0 = y1;
    }
}

circulo() {
    let x0 = this.x + this.r;
    let y0 = this.y;
    
    for (let i = 0; i <= 360; i += 1) {
      let angulo = i * PI / 180;
      let x1 = this.x + this.r * cos(angulo);
      let y1 = this.y + this.r * sin(angulo);
      
      line(x0, y0, x1, y1);
      
      x0 = x1;
      y0 = y1;
    }
  }
}