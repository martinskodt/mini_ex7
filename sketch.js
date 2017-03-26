var ansigter = []
var eye1;
var eye2;
var eyefill = "O"
var bubble = 0;
var gif
var song
function Face(x,y){

this.x = x;
this.y = y;
	
this.eyes = function(){
	
	var eyecol = color(255,255,255,100)
	eye1 = createButton("O")	
	eye1.position(x,y)
	eye1.style("background-color",eyecol)	

	eye2 = createButton(eyefill)	
	eye2.position(x+100,y)
	eye2.style("background-color",eyecol)
	
	if(eye1.mousePressed || eye2.mousePressed){
	eyefill = "-"
} else{
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
	
	this.sel.changed(makegif)
	}
	
this.mouth = function(){
		var uplip
		var lowlip
		var lipcol = color(255,0,0,100)
	uplip = createButton("||||||||||||||||||||||")
	uplip.position(x+17,y+80)
	uplip.style("background-color",lipcol)
		
	lowlip = createButton("||||||||||||||||||||||")
	lowlip.position(x+17,y+108)
	lowlip.style("background-color",lipcol)

//kommer tilbage til
//this.uplip.mousePressed(sang())
//this.lowlip.mousePressed(sang())
	}
}

function sang(){
song.play;
song.setVolume(0.5)
	
}

function makegif(){	
gif.show;

}

function preload(){
gif = loadGif("assets/gandalf.gif")

song = loadSound("assets/shooting.stars.mp3")
}

function setup() {
	frameRate(60)
    createCanvas(1000,1000)
    background(30,50,200)
}

function draw() {
//background(70,70,200,90)
image(gif,50,700)
gif.hide
  for (var i=0;i< 1 ;i++){
	ansigter[i] = new Face(400,400)
	  ansigter[i].eyes();
	ansigter[i].nose();
	ansigter[i].mouth();
	}
	

	
}
function mousePressed(){
	ansigter.push(new Face(mouseX,mouseY))
}

