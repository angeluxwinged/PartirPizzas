class PuntoPendiente{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
  
draw(){
    stroke(255,0,0);
    ellipse(this.x, this.y, this.r*2, this.r*2);
        
    for (let i = 0; i < 360; i += 360/partes) {
        let ang = i * (PI / 180);
        let x1 = this.x + this.r * cos(ang);
        let y1 = this.y + this.r * sin(ang);
            
        let m = (y1 - this.y) / (x1 - this.x);
        let b = this.y - m * this.x;
            
        let x2 = this.x + (this.r-this.r);
        let y2 = m * x2 + b;
        line(x1, y1, x2, y2);
        line(x1, y1, x2, this.y);
     }
  }    
}