var backgound, backgroundImg
var girl, girlImg
var garbage, garbageImg, garbageGroup

function preload(){
backgroundImg = loadImage ("https://cdn2.vectorstock.com/i/1000x1000/14/66/seamless-cartoon-nature-background-with-separate-vector-20061466.jpg")
girlImg = loadImage("https://en.pimg.jp/044/401/882/1/44401882.jpg")
garbageImg =(" https://media.istockphoto.com/vectors/garbage-black-bag-with-food-waste-plastic-trash-and-rubbish-vector-vector-id1048185204")
}
function setup() {
 createCanvas(400,400);
 background = createSprite(400,400)
 background.addImage("background", backgroundImg)
 background.velocity = -1
 girl = createSprite(200,200,50,70);
 girl.addImage("girl", girlImg);
 girl.scale = 0.3;
 garbageGroup = new Group()
}


function draw() {
 backgound(200)
if(gameState==="play"){
    if(keyDown("left_arrow")){
      ghost.x= ghost.x-3
    }
}
}