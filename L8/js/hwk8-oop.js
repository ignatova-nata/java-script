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

class Player {
    constructor(name){
        this._name = name;
       // this._img = null;
		this._x = 125;
		this._y = 125;
		this._width = 128;
		this._height = 128;
		this.randomX();
		this.randomY();
		this.drawImg();
        }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get x() {
       return this._x;
	}
	set x(value) {
       this._x = value;
	}
	get y() {
       return this._y;
	}
	set y(value) {
       this._y = value;
	}
	randomX() {
		if (this._name === "tiger") {
			this._x = Math.floor(Math.random() * (140 - 20)) + 20;
		} else {this._x = Math.floor(Math.random() * (750 - 20)) + 20;
		}
	}
	randomY() {
		if (this._name === "tiger") {
			this._y = Math.floor(Math.random() * (140 - 20)) + 20;
		} else {this._y = Math.floor(Math.random() * (550 - 20)) + 20;
		}
	}		
	drawImg() {
		let img = new Image();
		img.src = 'img/' + this._name +'.png';
		img.onload = () => {
			ctx.drawImage(
				img,
				this._x, this._y,
				this._width, this._height
			);
		}
	}
	
}

class Tiger extends Player{
    constructor(name){
        super(name);
		this._clk = 0;
		this.move();
	}
	get clk() {
        return this._clk;
    }
    set clk(value) {
        this._name = clk;
    }
		move(event) {
			if (event.code === "KeyD") {
				ctx.fillRect(this._x, this._y, this._width, this._height);
				this._x += 4;
					if (this._x > 773) {
						this._x -= 4;
						drawImg();
						this._clk++;
					} else {drawImg();
							this._clk++;
					}
			} else if (event.code === "KeyA") {
				ctx.fillRect(this._x, this._y, this._width, this._height);
				this._x -= 4;
					if (this._x < 0) {
						this._x += 4;
						drawImg();
						this._clk++;
					} else {drawImg();
						this._clk++;
					}
			} else if (event.code === "KeyW") {
				ctx.fillRect(this._x, this._y, this._width, this._height);
				this._y -= 4;
					if (this._y < 0) {
						this._y += 4;
						drawImg();
						this._clk++;
					} else {drawImg();
							this._clk++;
					}
			} else if (event.code === "KeyS") {
				ctx.fillRect(this._x, this._y, this._width, this._height);
				this._y += 4;
					if (this._y > 573) {
						this._y -= 4;
						drawImg();
						this._clk++;
					} else {drawImg();
							this._clk++;
					}
			}
		}//document.addEventListener("keydown", move.bind(document, tiger));

}

class Rabbits {
    constructor(){
		this._rabbitsNumber = [];
		this._rabbitCount = Math.floor(Math.random() * (5 - 2)) + 2;
		this.drawRabbits();
	}
	get rabbitCount() {
        return this._rabbitCount;
    }
    set rabbitCount(value) {
        this._rabbitCount = value;
    }
	drawRabbits() {
		for (let i=0; i < rabbitCount; i++) {
		this._rabbitsNumber.push(new Player(rabbit));
		}
	}
	get rabbitsNumber() {
		return this._rabbitsNumber;
	}
	
}

class Hunting {
	constructor() {
	this.rabbitHunt();
	this.hunterRabbit();
	}
	rabbitHunt() {
		ctx.fillStyle = "green";
		for (let i = 1; i < tiger.clk; i++){
			for (let j = 0; j < rabbits.rabbitsNumber.length; j++) {
				if ((Math.abs(tiger.x - rabbits[i].x)) < 110 && (Math.abs(tiger.y - rabbits[i].y)) < 110) {
					let img = document.getElementsByTagName("img")[0];
					img.src = 'img/rabbit.png';
					img.style.width = 'auto'
					img.style.height = '50%'
					let p = document.getElementsByTagName("p")[0];
					p.innerText = `Осталось ${--rabbits.rabbitCount} кролика`;
					ctx.fillRect(rabbits[i].x, rabbits[i].y, rabbits[i].width, rabbits[i].height);
					rabbits.splise(i,1);
				} 
			}
		}
	}
	
	hunterRabbit() {
		if ((!(tiger.x%30)) || (!(tiger.y%25))) { 
			rabbitHunt();	
		}else{
			ctx.fillStyle = "midnightblue";
			for (let j = 0; j < rabbits.rabbitsNumber.length; j++) {
				img.src = 'img/rabbitHunter.png';
			} rabbits.rabbitsNumber.push(new Player(rabbit));
		}
	}
		
		
}

let tiger = new Tiger();
let rabbits = new Rabbits();
let play = new Hunting();
play.hunterRabbit();

//document.addEventListener("keydown", move.bind(document, tiger))
/*let div = document.getElementsByTagName("div")[0];
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


let tiger = {
    img: 'tiger.png',
    x: 72,
    y: 15,
    width: 128,
    height: 128
};
let rabbit1 = {
    img: 'rabbit.png',
    x: 228,
    y: 115,
    width: 128,
    height: 128
};

let rabbit2 = {
    img: 'rabbit.png',
    x: 128,
    y: 434,
    width: 128,
    height: 128
};
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
drawImg(tiger);

function move(obj, event) {
     if (event.code === "KeyD") {
        //console.log("перемещение вправо");
        clearImg(obj);
        obj.x += 4;
        drawImg(obj);
		//console.log(Math.abs(obj.x - obj1.x));// не видит переменные
	} else if (event.code === "KeyA") {
       // console.log("перемещение влево");
        clearImg(obj);
        obj.x -= 4;
        drawImg(obj);
    } else if (event.code === "KeyW") {
      //  console.log("перемещение вверх");
        clearImg(obj);
        obj.y -= 4;
        drawImg(obj);
    } else if (event.code === "KeyS") {
       // console.log("перемещение вниз");
        clearImg(obj);
        obj.y += 4;
		drawImg(obj);
    } else if ((Math.abs(obj.x - rabbit.x)) < 78 
			|| (Math.abs(obj.y - rabbit.y)) < 78) {
		chase(obj, obj1, obj2);
	}
}

function clearImg(obj) {
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

		
function chase(obj, obj1, obj2) {
	let n = 0;

	//console.log(Math.abs(obj.x - obj1.x));
	//console.log(Math.abs(obj.x - obj2.x));
	//console.log(Math.abs(obj.y - obj1.y));
	//console.log(Math.abs(obj.y - obj2.y));
    if ((Math.abs(obj.x - obj1.x)) < 78 && (Math.abs(obj.y - obj1.y)) < 78) {
		let img = document.getElementsByTagName("img")[0];
		img.src = 'img/rabbit.png';
		img.style.width = 'auto'
		img.style.height = '50%'
		//console.log(img);
		let p = document.getElementsByTagName("p")[0];
		n+=1;
		p.innerText = ` + ${n}`;
		ctx.fillRect(obj1.x, obj1.y, obj1.width, obj1.height);
	} else if ((Math.abs(obj.x - obj2.x)) < 78 && (Math.abs(obj.y - obj2.y)) < 78) {
		let img = document.getElementsByTagName("img")[0];
		img.src = 'img/rabbit.png';
		img.style.width = 'auto'
		img.style.height = '50%'
		//console.log(img);
		let p = document.getElementsByTagName("p")[0];
		n+=1;
		p.innerText = ` + ${n}`;
		ctx.fillRect(obj2.x, obj2.y, obj2.width, obj2.height);
	}
}
document.addEventListener("keydown",
    move.bind(document, tiger, rabbit1, rabbit2));// ??*/


