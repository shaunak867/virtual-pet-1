var dog,happydog,foodS,database,foodStock



//Create variables here

function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happydog = loadImage("images/dogImg1.png")
  //load images here
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,80,20)
  dog.addImage("saddog",dogImage)
  dog.addImage("happydog",happydog)
dog.scale = 0.4
database = firebase.database()
foodStock = database.ref('food')
foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)
  drawSprites();
  
  //add styles here

  if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.changeImage("happydog",happydog)



  }
  textSize(20)
  fill("white")
  stroke("black")
  text("note:press UP_ARROW key to feed rani milk",50,30)

  text("food remaining:"+foodS,170,70)
  
}
function readStock(data){
foodS = data.val()
}
function writeStock(x){
if(x<=0){
x=0
}
else{

  x=x-1
}
database.ref('/').update({
food:x

})


}



