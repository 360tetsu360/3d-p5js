let angle = 0;
let w = 30;
let ma;
let maxD;

var winwidth=window.innerWidth;
var winheight=window.innerHeight;
function setup() {
    createCanvas(winwidth / 2,winwidth / 2 ,WEBGL);
    maxD = dist(0,0,200,200)
    ma = atan(1/ sqrt(2))
}
function draw(){
    var mousey = mouseX / 100;
    var mousex = mouseY / 100
    var winwidth=window.innerWidth;
    var rotationx = -QUARTER_PI - mousex;
    var elem = document.getElementById("canvas").innerHTML = w;
    background(100);
    ortho( -400, 400, -400,400,0,10000);

    //translate(0, 0, -100)
    rotateX(rotationx);
    rotateY(-mousey);
    //otateX(-PI / 8);
    //translate(width / 2, height / 2);
    //rectMode(CENTER);
    //rotateX(angle * 0.25);

    for (let z = 0; z < height; z += w){
        for (let x = 0; x < width; x += w){
            push();
            let d = dist(x,z,width / 2, height / 2);
            let offset = map(d,0, maxD, -PI,PI);
            let a = angle + offset;
            let h = map(sin(a), -1,1,0,300)
            
            normalMaterial();
            translate(x - width / 2,0, z - height / 2)
            box(w -5, h ,w  -2);
            //rect(x - width / 2 + w / 2,0, w - 2,h);
            
            pop();
        }

    }
    angle += 0.05;
}
function mouseWheel(event) {
    var percent =  event.delta / 100;
    w = w + percent;
    if(w < 15){
        w = 15
    }
    
}
