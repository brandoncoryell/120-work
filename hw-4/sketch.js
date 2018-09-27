//Brandon Coryell 50
//hw-4

// Declare the setup function
function setup() {

// creat canvas
    createCanvas(900, 600)

//color the background 'blue'
    background('gray');
}

// Declare the draw function
function draw(){

// Sandbox start
push();

// Centering the grid
translate(450, 300);


// body and head
push();
fill('rgb(0,200,0)');
ellipse(0, 0, 300, 300);

// Eye
push();
stroke('black')
fill('white');
ellipse(0,-75,120,100)
pop();

push();
fill('rgb(0,175,400)');
stroke('black');
ellipse(0,-75,-50,50);
pop();

push();
fill('black');
ellipse(0,-75,30,30);


push();
noStroke();
fill('white');
ellipse(6,-82,10,10);


//mouth
push();
fill('black');
arc(0,83.5,120,90,PI,TWO_PI);



//teeth
push();
fill('white');
arc(-44,83,30,30,radians(180),radians(360), OPEN);

push();
fill('white');
arc(-14,83,30,30,radians(180),radians(360), OPEN);

push();
fill('white');
arc(16,83,30,30,radians(180),radians(360), OPEN);

push();
fill('white');
arc(46,83,30,30,radians(180),radians(360), OPEN);

//ears
push();
fill('rgb(0,200,0)');
triangle(-75,-175, -105,-105,-65,-135)

push();
fill('rgb(0,200,0)');
noStroke();
triangle(75,-175,105,-105,65,-135)
}
