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
		this._x = null;//чтобы задать через RandomX
		this._y = null;// чтобы задать через RandomY
		this._width = 128;
		this._height = 128;
		randomX();//ВОПРОС: как задать рандомные координаты, если выводится в консоли hwk8-oop.js:26 Uncaught ReferenceError: randomX is not defined
		randomY();//ВОПРОС: как задать рандомные координаты
		drawImg();
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
		move();
		// move.bind как правильно задавать
		//document.addEventListener("keydown", move.bind(document, tiger));
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

class Rabbits {//массив из кроликов
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
	set rabbitNumber(value) {
        this._rabbitNumber = value;
    }
	
}

class Hunting {
	constructor() {
	this.rabbitHunt();
	}
	rabbitHunt() {
		//ctx.fillStyle = "green";
		for (let i = 1; i < tiger.clk; i++){// проверка после каждого хода
			for (let j = 0; j < rabbits.rabbitsNumber.length; j++) {//пока есть кролики
				if ((Math.abs(tiger.x - rabbits.rabbitsNumber[j].x)) < 120 && (Math.abs(tiger.y - rabbits.rabbitsNumber[j].y)) < 120) {
					let img = document.getElementsByTagName("img")[0];
					img.src = 'img/rabbit.png';
					img.style.width = 'auto'
					img.style.height = '50%'
					let p = document.getElementsByTagName("p")[0];
					p.innerText = `Осталось ${--rabbits.rabbitCount} кролика`;
					ctx.fillRect(rabbits.rabbitsNumber[j].x, rabbits.rabbitsNumber[j].y, rabbits.rabbitsNumber[j].width, rabbits.rabbitsNumber[j].height);
					rabbits.rabbitsNumber.splise(j,1);
				} 
			}
		}
	}
	
			
}

let tiger = new Tiger();
let rabbits = new Rabbits();
let play = new Hunting();


document.addEventListener("keydown", move.bind(document, tiger))
