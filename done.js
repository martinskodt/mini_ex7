var ansigter = []
var eye1;
var eye2;
var eyefill = "O"
var eyeon = false;
var on = false
var bubble = 0;
var gif
var song
var mundx =0
var mundy =0
		
var text = "Form Face"

function Face(x,y){

this.x = x;
this.y = y;
	
this.eyes = function(){
	
	var eyecol = color(255,255,255)
	eye1 = createButton(eyefill,false)	
	eye1.position(x,y)
	eye1.style("background-color",eyecol)	

	eye2 = createButton(eyefill)	
	eye2.position(x+100,y)
	eye2.style("background-color",eyecol)
	
eye1.mousePressed(this.eyeclose) 
eye2.mousePressed(this.eyeclose)
	

}

this.eyeclose = function(){	
	if(eyeon){ 
		eyeon = false
	} else {
		eyeon = true
	}
	
	if(eyeon){
		eyefill = "-"
	}else{ 
		eyefill = "O"
	}	
}	

this.nose = function(){
	var sel;
	textAlign(CENTER)
	this.sel = createSelect()
	this.sel.position(x+40,y+40)
	
	this.sel.option(' ');
	this.sel.option('P');
	this.sel.option('r');
	this.sel.option('e');
	this.sel.option('s');
	this.sel.option('s');
	this.sel.option(' ');
	this.sel.option('me');
	
	this.sel.changed(makestar)
	}
	
this.mouth = function(){
	var lip
	var lipcol = color(255,0,0)
	lip = createButton("||||||||||||||||||||||",false)
	lip.position(x+17+mundx,y+108+mundy)
	lip.style("background-color",lipcol)
	lip.mousePressed(sang)

	if(on){
		mundx = sin(frameCount * 0.5) * 200
		mundy = 50 +cos(frameCount * 0.5) * 50
	}else{ 
		
	}	

}

function sang(){
	on = true
	console.log(makestar.star)
	song.setVolume(0.15)
	song.play();
	song.jump(23)

	if(song.isPlaying){
		song.setVolume(0.15)
		song.playMode("restart")
		
	}

}

function makestar(){	
noStroke()
fill(255)
ellipse(random(width),random(height),mundy,mundy)

}
}

function preload(){
song = loadSound("assets/shooting.stars.mp3")
createCanvas(window.innerWidth,window.innerHeight)

	
}

function setup() {
	background(10,20,100)
	frameRate(60)

	

}

function draw() {
	//background(10,20,100)
ansigter[0] = new Face(width/2 -100,height/2 -100)
	ansigter[0].eyes();
	ansigter[0].nose();
	ansigter[0].mouth();

}


//  for (var i=0;i< ansigter.length ;i++){
//	ansigter[i] = new Face(width/2 -100,height/2 -100)
//
//	}
//
////
////
//function mousePressed(){
//	
//if( mouseX <= width/2 -100 || mouseX >= width/2 -100 +200 || mouseY >= height/2 -100 + 140 || mouseY <= height/2 -100 )
//	console.log("face")
//	ansigter.push(new Face(mouseX,mouseY))
//}

