//Задание 1
// через рекурсию 
function getSumm(num) {
    return (num === 0)
        ? 0
        : (num % 10) + getSumm((num - num % 10) / 10);
}
let z1 = getSumm(789);
console.log(z1);
  // через цикл 
function getSumViaWhile(num) {
    let sum = 0;
    do {
        sum += num % 10;
      //console.log(sum);
        num = parseInt((num / 10));
      //console.log(num);
    }
    while (num > 0);
   return sum ;
}
let h = getSumViaWhile(4321);
console.log(h);
//Задание 2
function range(FirstEl, LastEl, Step = 1) {
    let Arr = [];
    Arr[0] = FirstEl;
    let ArrLength = LastEl / Step;
    for (let i = 1; i < ArrLength; i++) {
        Arr[i] = Arr[i-1] + Step;
    }
    return Arr;
}
let z2 = range(1, 10, 2);
console.log(z2);
//Задание 3
function getDay(Num) {
    let stringDay = (Num >= 11 && Num <= 20) ? Num + " дней" 
    : (Num%10 === 0) ?  Num +  " дней" 
    : (Num%10 === 1) ?  Num +  " день"
    : (Num%10 >= 2 && Num%10 <= 4) ?  Num +  " дня"
    : (Num%10 >= 5 && Num%10 <= 9) ?  Num + " дней" : console.log("Необходимо число");
  return stringDay;
} 
let z3 = getDay(125);
console.log(z3);

//Задание 4  
function getFewArr(RandomMin, RandomMax, Length, Amount = 2) {
       let x = new Array(Amount);
			for (let i = 0; i < Amount; i++) {
			x[i] = new Array(Length);
				for (let j = 0; j < Length; j++) {
				x[i][j] = Math.floor(Math.random(RandomMin, RandomMax) * (RandomMax - RandomMin)) + RandomMin;
				}
			} 
    return x;
}
let z41 = getFewArr(-2, 10, 4, 5);
console.log(z41);

function getSumArrEl(arr) {
	let sumX = new Array(arr.length);
		for (let i = 0; i < arr.length; i++) {
			let sumY = 0;
			for (let j = 0; j < arr[i].length; j++) {
					sumY += arr[i][j];
					}
		sumX[i] = sumY + " - это сумма элементов массива " + i ;
			}
    return sumX;
}
let z42 = getSumArrEl(z41);
console.log(z42);

function getBiggerSumArrEl(sumXarr) {
	let bigSum = new Array(sumXarr.length);
		for (let i = 0; i < sumXarr.length; i++) {
			bigSum[i] = parseInt(sumXarr[i]);
		}
		let veryBigSum = bigSum[0] + " - это  максимальная сумма элементов в массиве 0";
		for (let i = 1; i < bigSum.length; i++) {
			if (bigSum[i] > bigSum[i-1]) {
			veryBigSum = bigSum[i] + " - максимальная сумма элементов в массиве " + i;
			}
		}
		return veryBigSum;
}
	
let z43 = getBiggerSumArrEl(z42);
console.log(z43);		
		


  
  
  