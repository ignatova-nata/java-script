//Задание 1
let arrX = [1, 3, -2, 4, 9, 6];
//console.log(arrX);
m = 0;
while (arrX.length > 1) {
	for (let i = 1; i < arrX.length; i++ ) {
			if (arrX[0] + arrX[i] === 7 ) {
			console.log("7 в сумме от порядковых элементов массива arrX -", m," и ",i+m);
		}  
	} arrX.shift();
	//console.log(arrX);
		m += 1;
}

/*let a = [-1, 3, -2, 4, 9, 6];
	for (let i = 0; i < a.length; i++) {
		if (a[0] + a[i] === 7) {
			console.log("7 в сумме от порядковых элементов массива а - 0 и ",i);
			break;
		} else if (a[1] + a[i] === 7) {
			console.log("7 в сумме от порядковых элементов массива а - 1 и ",i);
			break;
		} else if (a[2] + a[i] === 7) {
			console.log("7 в сумме от порядковых элементов массива а - 2 и ",i);
			break;
		} else if (a[3] + a[i] === 7) {
			console.log("7 в сумме от порядковых элементов массива а - 3 и ",i);
			break;
		} else if (a[4] + a[i] === 7) {
			console.log("7 в сумме от порядковых элементов массива а - 4 и ",i);
			break;
		} else if (a[5] + a[i] === 7) {
			console.log("7 в сумме от порядковых элементов массива а - 5 и ",i);
			break;
		}
	}

let d = [-1, 3, -2, 4, 9, 6];

for (let b of d) {
	for (let i = 0; i < d.length; i++) {
		if (b + d[i] === 7) {
			let n = d.indexOf(b);
			console.log("7 в сумме от порядковых элементов массива d -", n," и ",i);
		} 
	}

}

let arrQ = [-1, 3, -2, 4, 9, 6];
for (let k = 0; k < arrQ.length; k++) {
	for (let i = 1; i < arrQ.length; i++ ) {
			if (arrQ[k] + arrQ[i] === 7 ) {
			console.log("7 в сумме от порядковых элементов массива arrQ -", k," и ",i);
		}  
		
	}
}
let arrX = [1, 3, -2, 4, 9, 6];
console.log(arrX);
let arrY = arrX.concat();
m = 0;
while (arrY.length > 0) {
	for (let i = 1; i < arrX.length; i++ ) {
			if (arrY[0] + arrX[i] === 7 ) {
			console.log("7 в сумме от порядковых элементов массива arrX -", m," и ",i);
		}  
	} arrY.shift();
	console.log(arrY);
		m += 1;
}*/
		

//Задание 2
for (let i = 1; i <= 100; i++) {
	if (i%3 === 0) {
		console.log("Three -",i);
	} else if (i%5 === 0 && i%3 !== 0) {
		console.log("Five -",i);
	}
}

for (let i = 1; i <= 100; i++) {
	if (i%5 === 0 && i%3 === 0) {
		console.log("ThreeFive -",i);
	} 
}

//Задание 3
let soap = 80;
let plate = 15;
let n = Math.max(soap, plate);
for (let i = 1; i <= n; i++) {
	if (soap > 0 && plate > 0) {
    plate -= 1;
	soap -= 0.5;
	console.log ("Осталось тарелок: ", plate,", моющего средства: ", soap);
    } else if (soap === 0 && plate > 0) {
	console.log ("Моющее средство закончилось, осталось тарелок: ", plate);
    }
    else if (plate === 0 && soap > 0) {
    console.log ("Тарелки чисты, осталось моющего средства: ", soap);
    }
}

//Задание 4
let arr1 = [];
let arr2 = [];
let randomLength = Math.floor(Math.random(2,10) * (10 - 2)) + 2;
for (let i = 0; i < randomLength; i++) {
	arr1[i] = Math.floor(Math.random(-10,10) * (10 +10)) -10;
	arr2[i] = Math.floor(Math.random(-10,10) * (10 +10)) -10;
}
console.log(arr1);
console.log(arr2);
let summ1 = 0;
let summ2 = 0;
for (let i = 0; i < randomLength; i++) {
	summ1 += arr1[i];
	summ2 += arr2[i];
}
//console.log(summ1);
//console.log(summ2);
	let Mean1 = summ1 / randomLength;
	let Mean2 = summ2 / randomLength;
//console.log(Mean1);
//console.log(Mean2);
	/*if (Mean1 > Mean2) {
    console.log ("Среднее арифметическое arr1 больше");
    } else if (Mean2 > Mean1) {
    console.log ("Среднее арифметическое arr2 больше");
    } else if (Mean2 === Mean1) {
    console.log ("Средние арифметичесие arr1 и arr2 равны");
    }*/
console.log(Mean1 > Mean2 ? "Среднее арифметическое arr1 больше" : (Mean2 > Mean1 ? "Среднее арифметическое arr2 больше" : "Средние арифметичесие arr1 и arr2 равны"));

//Задание 5.1
/*
do {
	let numb = prompt ("Введите целое положительное число");
} while (parseInt(numb) === NaN)*/
let numb = prompt ("Введите целое положительное число");
let ArrLength = parseInt(numb);
let Arr = [];
//console.log(parseInt(numb));
for (let i = 0; i < ArrLength; i++) { 
	Arr[i] = Math.floor(Math.random(2,10) * (10 - 2)) +2;
	}
//console.log(Arr);
console.log(Arr.reverse());