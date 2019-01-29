var g=0;

function setup (){
createCanvas(197,152);

}
function draw(){
	g=g+1;
	if(g==0){
		g=g*1;
	}
	if(g==90){
		g=g*-1;
	}
	
	background(225);
	for(var posx=0;posx<197; posx=posx+15){
		for(var posy=0; posy<height; posy=posy+15){
		stroke(random(255),100,100);
		push();
		tranlate(posx, posy);
		scale(0.8);
		rotate(radians(g));
			rect(200,200,50,100);
			ellipse(200,200,100,50);
			triangle(200,0,400,0,300,100);
			fill(240,200,200);
		pop();
		}
	}

}