function setup() {
	createCanvas(700, 700);
	background(100);
}

let pos = 250;
let colorValue = 'yellow';

function draw() {
	background("gray");
	//Cross walk
	noStroke()
	fill("white")
	//Top border
	rect(0, 205, 700, 10)
	//5th line
	rect(450 + 140, 450 / 2, 60, 400)
	//4th line
	rect(450, 450 / 2, 60, 400)
	//3rd line
	rect(310, 450 / 2, 60, 400)
	//2nd line
	rect(310 - 140, 450 / 2, 60, 400)
	//1st line
	rect(310 - 280, 450 / 2, 60, 400)
	//Bottom border
	rect(0, 635, 700, 10)

	//Body
	fill(196, 150, 119);
	strokeWeight(2);
	stroke(0);
	ellipse(pos + 60, 400 + 20, 100, 75);

	//Brown patch
	noStroke()
	fill(121, 81, 58)
	circle(pos + 75, 390 + 30, 70);

	//Head
	strokeWeight(1)
	stroke(0)
	fill(164, 117, 92)
	circle(pos + 115, 400 + 20, 60);

	//Ears 
	strokeWeight(1)
	stroke(0)
	fill(64, 41, 5)
	ellipse(pos + 105, 380 + 10, 50, 20);
	ellipse(pos + 105, 440 + 10, 50, 20);

	//Tail
	fill(64, 41, 5)
	ellipse(pos, 410 + 10, 50, 10);

	//Tail edge
	fill('white')
	ellipse(pos - 20, 410 + 10, 15, 10);

	//Traffic lights 
	fill('black')
	rect(570, 30, 60, 80)
	rect(595, 100, 10, 90)
	fill(colorValue);
	circle(600, 70, 50);

	noStroke();
	fill(0)
	textSize(25)
	text("Click on the traffic light to change the color.", 30, 30)
	text("Use the mouse scroll feature to", 30, 70)
	text("help Cookie cross the street.", 30, 110)
}

//Move the dog according to the vertical scroll amount
function mouseWheel(event) {
	print(event.delta);

	pos += event.delta;
}

//Change the traffic light to green when the yellow circle is clicked
function mousePressed() {
	if (colorValue === 0) {
		colorValue = 'green';
	} else {
		colorValue = 'green';
	}
}