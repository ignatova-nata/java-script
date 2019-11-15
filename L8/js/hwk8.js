let div = document.getElementsByTagName("div")[0];
console.log(div);

div.style.cssText = `
width: 900px;
background: green;
height: 100px;
`;
let canvas = document.getElementsByTagName("canvas")[0];

canvas.width = 900;
canvas.height = 600;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0,0,900, 600);

let n=0;
let img = document.getElementsByTagName("img")[0];
		img.src = 'img/rabbit.png';
		img.style.width = 'auto'
		img.style.height = '50%'
		let p = document.getElementsByTagName("p")[0];
		p.innerText = ` ${n} кроликов`;

let tiger = {
    img: 'tiger.png',
    x: 72,
    y: 15,
    width: 128,
    height: 128
};
let rabbit1 = {
    img: 'rabbit.png',
    x: Math.floor(Math.random() * (700 - 140)) + 140,
	y: Math.floor(Math.random() * (450 - 140)) + 140,
    width: 128,
    height: 128
};
//console.log(rabbit1);
let rabbit2 = {
    img: 'rabbit.png',
    x: Math.floor(Math.random() * (700 - 120)) + 120,
    y: Math.floor(Math.random() * (450 - 120)) + 120,
    width: 128,
    height: 128
};
let rabbit3 = {
    img: 'rabbitHunter.png',
    x: Math.floor(Math.random() * (700 - 120)) + 120,
    y: Math.floor(Math.random() * (450 - 120)) + 120,
    width: 128,
    height: 128
};

//console.log(rabbit2);
function drawImg(obj) {
    let img = new Image();
    img.src = 'img/' + obj.img;
    img.onload = () => {
        ctx.drawImage(
            img,
            obj.x, obj.y,
            obj.width, obj.height
        );
    }
}
drawImg(rabbit1);
drawImg(rabbit2);
//drawImg(rabbit3);
drawImg(tiger);

function move(obj, event) {
     if (event.code === "KeyD") {
       
        clearImg(obj);
		chaseEnd(obj);
		
        obj.x += 4;
		drawImg(obj);
		} else if (event.code === "KeyA") {

        clearImg(obj);
		chaseEnd(obj);
		
        obj.x -= 4;
		
        drawImg(obj);
    } else if (event.code === "KeyW") {
    
        clearImg(obj);
		chaseEnd(obj);
		
        obj.y -= 4;
		drawImg(obj);
    } 	else if (event.code === "KeyS") {
      
		clearImg(obj);
		chaseEnd(obj);
		
        obj.y += 4;
		drawImg(obj);
		} 
	}

function clearImg(obj) {
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}
		function chaseEnd(obj) {
	if (((Math.abs(obj.x - rabbit1.x)) < 120) 	&& ((Math.abs(obj.y - rabbit1.y)) < 120))  {
		if (n===0) {
		p.innerText = `+ ${++n}`;
		n-=1;
		} else if (n===1) {
			p.innerText = `+ ${n+2}`;
			n-=1;
		} else if (n===2) {
			p.innerText = `+ ${n+2}`;
			n-=1;
		}
		ctx.fillRect(rabbit1.x, rabbit1.y, rabbit1.width, rabbit1.height);
		ctx.fillRect(rabbit2.x, rabbit2.y, rabbit2.width, rabbit2.height);
		drawImg(rabbit3);
	} else if (((Math.abs(obj.x - rabbit2.x)) < 120) 	&& ((Math.abs(obj.y - rabbit2.y)) < 120))  {
		if (n===0) {
		p.innerText = `+ ${++n}`;
		n-=1;
		} else if (n===1) {
			p.innerText = `+ ${n+2}`;
			n-=1;
		} else if (n===2) {
			p.innerText = `+ ${n+2}`;
			n-=1;
		}
		ctx.fillRect(rabbit2.x, rabbit2.y, rabbit2.width, rabbit2.height);
		ctx.fillRect(rabbit1.x, rabbit1.y, rabbit1.width, rabbit1.height);
		drawImg(rabbit3);
		} 
	}
	
document.addEventListener("keydown",
    move.bind(document, tiger));

