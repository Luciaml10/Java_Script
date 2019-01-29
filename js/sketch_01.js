function setup() {
  createCanvas(720, 400);
  background(51, 0, 0);
  

}

function draw() {

  push();
  translate(width*0.2, height*0.1);
  rotate(frameCount / 200.0);
  fill(186);
  triangle(200,0,400,0,300,100);
  pop();

  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 20.0);
  ellipse(200,200,100,100);
  pop();

  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -30.0);
  triangle(200,0,400,0,300,100);
  pop();

  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -30.0);
  fill(200);
  ellipse(200,200,100,100);
  pop();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}