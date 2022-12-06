var robson, robsonImg, robsonImg2
var pao
var pao2
var alface
var bacteria
var presunto
var sanduiche
var telaDeFundo
var parede1
var parede2
var parede3
var parede4
var bacteria1
var bacteria2
var bacteria3
var bacteria4
var bacteria5
var bacteria6
var bacteria7
var bacteria8
var bacteria9
var bacteria10
var bacteria11
var bacteria12
var bacterias
var paoImg
var alfaceImg
var presuntoImg
var sanduicheImg
var ingredientes
var play = 1
var end = 0
var gamestate = play
var reset
var resetImg

function preload() {
	robsonImg = loadImage("robson.png")
	robsonImg2 = loadImage("robson2.png");
	paoImg = loadImage("pao.png");
	presuntoImg = loadImage("presuntinho.png");
	bacteria = loadImage("bacteria.png");
	alfaceImg = loadImage("alface.png");
	sanduicheImg = loadImage("sanduiche.png");
	telaDeFundo = loadImage("backGround.jpeg");
	resetImg = loadImage("restart.png");
}

function setup(){
	createCanvas(windowWidth, windowHeight - 4);

	reset = createSprite(width/2, 380)
	reset.addImage("restart", resetImg)
	reset.visible = false

	robson = createSprite(100, 100);
	robson.addImage("robson", robsonImg)
	robson.scale = 0.25
	robson.addImage("robson2", robsonImg2)
	robson.debug = false
	robson.setCollider("rectangle",0,0,200,350)

	bacteria1 = createSprite(100, 880);
	bacteria1.addImage(bacteria)
	bacteria1.scale = 0.15
	bacteria1.velocityY = -10
	
	bacteria2 = createSprite(350, 100);
	bacteria2.addImage(bacteria)
	bacteria2.scale = 0.15
	bacteria2.velocityY= 5

	bacteria3 = createSprite(600, 880);
	bacteria3.addImage(bacteria)
	bacteria3.scale = 0.15
	bacteria3.velocityY= -2

	bacteria4 = createSprite(800, 100);
	bacteria4.addImage(bacteria)
	bacteria4.scale = 0.15
	bacteria4.velocityY= 8

	bacteria5 = createSprite(1700,100);
	bacteria5.addImage(bacteria)
	bacteria5.scale = 0.15
	bacteria5.velocityY= 3

	bacteria6 = createSprite(1000, 880);
	bacteria6.addImage(bacteria)
	bacteria6.scale = 0.15
	bacteria6.velocityY= -10

	bacteria7 = createSprite(1270, 100);
	bacteria7.addImage(bacteria)
	bacteria7.scale = 0.15
	bacteria7.velocityY= 9

	bacteria8 = createSprite(1530, 880);
	bacteria8.addImage(bacteria)
	bacteria8.scale = 0.15
	bacteria8.velocityY= -5

	bacteria9 = createSprite(100, 245);
	bacteria9.addImage(bacteria)
	bacteria9.scale = 0.15
	bacteria9.velocityX= 13

	bacteria10 = createSprite(1773, 432);
	bacteria10.addImage(bacteria)
	bacteria10.scale = 0.15
	bacteria10.velocityX= -11

	bacteria11 = createSprite(100, 542);
	bacteria11.addImage(bacteria)
	bacteria11.scale = 0.15
	bacteria11.velocityX= 14

	bacteria12 = createSprite(1773, 700);
	bacteria12.addImage(bacteria)
	bacteria12.scale = 0.15
	bacteria12.velocityX= -12
	
	bacterias = new Group()
	bacterias.add(bacteria1)
	bacterias.add(bacteria2)
	bacterias.add(bacteria3)
	bacterias.add(bacteria4)
	bacterias.add(bacteria5)
	bacterias.add(bacteria6)
	bacterias.add(bacteria7)
	bacterias.add(bacteria8)
	bacterias.add(bacteria9)
	bacterias.add(bacteria10)
	bacterias.add(bacteria11)
	bacterias.add(bacteria12)

	pao = createSprite(869, 129);
	pao.addImage("pao", paoImg)
	pao.scale = 0.3

	pao2 = createSprite(400, 300);
	pao2.addImage("pao", paoImg)
	pao2.scale = 0.3

	alface = createSprite(1400, 300);
	alface.addImage("alface", alfaceImg)
	alface.scale = 0.2


	presunto = createSprite(1000, 700);
	presunto.addImage("presunto", presuntoImg)
	presunto.scale = 0.18

	sanduiche = createSprite(940,400)
	sanduiche.addImage("sanduiche", sanduicheImg)
	sanduiche.visible = false

	ingredientes = new Group()
	ingredientes.add(alface)
	ingredientes.add(pao2)
	ingredientes.add(pao)
	ingredientes.add(presunto)




	parede1 = createSprite(windowWidth/2,windowHeight- 930,width, 20)
	parede2 = createSprite(windowWidth/2,windowHeight- 10,width, 20)
	parede3 = createSprite(windowWidth-10,windowHeight/2,20, height)
	parede4 = createSprite(windowWidth-1870,windowHeight/2,20, height)

	parede1.visible = false
	parede2.visible = false
	parede3.visible = false
	parede4.visible = false

}


function draw(){
	rectMode(CENTER);
	background(telaDeFundo);

	if(gamestate === play){
		
	robson.collide(parede1)
	robson.collide(parede2)
	robson.collide(parede3)
	robson.collide(parede4)

	bacterias.bounceOff(parede1)
	bacterias.bounceOff(parede2)
	bacterias.bounceOff(parede3)
	bacterias.bounceOff(parede4)

	}

	if(bacterias.isTouching(robson)){
		bacterias.setVelocityXEach(0)
		bacterias.setVelocityYEach(0)

		fill("BLACK")
		textSize(25)
		textAlign(CENTER)
		text("você perdeu:(",width/2 ,495)

		keyPressed = false
	}

	if(gamestate === end){
		
		fill("BLACK")
		textSize(25)
		textAlign(CENTER)
		text("parabéns, você conseguiu :)",width/2 ,495)
		reset.visible = true
		bacterias.setVelocityXEach(0)
		bacterias.setVelocityYEach(0)
		if(mousePressedOver(reset)){
			restart()
		}
	}


	drawSprites();
	textSize(18)
	overlap();
	text("X: " + mouseX + "/ Y: " + mouseY, mouseX, mouseY);

	keyPressed();

}

function keyPressed(){
	if (keyIsDown(UP_ARROW)) {
		robson.y -= 7.5
	}

	if (keyIsDown(DOWN_ARROW)) {
		robson.y += 7.5
	}

	if (keyIsDown(LEFT_ARROW)) {
		robson.x -= 7.5
		robson.changeImage("robson2")
	}

	if (keyIsDown(RIGHT_ARROW)) {
		robson.x += 7.5
		robson.changeImage("robson")
	}
}

function overlap(){
	robson.overlap(ingredientes,function(collector,collected){
		collected.remove()
		setTimeout(() => {
			sanduiche.visible = true
			gamestate = end
		}, 10000);
	})
}

function restart(){
	gamestate = play
	sanduiche.visible = false
	reset.visible = false
	bacterias.destroyEach()
}