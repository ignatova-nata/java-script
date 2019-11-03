//Задание 2
function getNumCity() {
let str = prompt("Введите города через пробел");
let arr = str.split(" ");
let array = [];
for (let i = 0; i < arr.length; i++) {
	array[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}
return array.sort();
}
let z2 = getNumCity();
console.log(z2);


//Задание 3
function getAllIndexes() {
let str = prompt("Введите строку");
//console.log(str);
let subStr = prompt("Введите подстроку");
//console.log(subStr);
let arr = [];
for (let i = 0; i < str.length; i++) {
		if ((str.substr(i, subStr.length)).includes(subStr) === true) {
			arr.push(i);
		}
	} return arr;
}
let z3 = getAllIndexes();
console.log(z3);

//Задание 4
function checkPalindrome(someStr) {
	let newStr = someStr.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
	let str = newStr.replace(/\s/g, '');
	//console.log(str);
	for (let i = 0; i < str.length; i++) {
	if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
			let res = `фраза: "${someStr}" не является палиндромом`;
		} else if (str[i].toLowerCase() === str[str.length - 1 - i].toLowerCase()) {
			res = `фраза: "${someStr}" является палиндромом`;
			}
	} return res;
}
let z4 = checkPalindrome("Иди, Сеня, не сиди");
console.log(z4);

//Задание 5 - для палиндрома из нечетного числа букв, вывод без учета знаков препинания
function checkBigPalinStr(someStr) {
	console.log(someStr);
	let newStr = someStr.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
	let secStr = newStr.replace(/\s/g, '');
	let str = secStr.toLowerCase();
	//console.log(str);
	let arr = [];
	let newArr = [];
	for (let i = 1; i < str.length; i++) {
		for (let n = 1; i - n >= 0; n++) {
			if (str[i-n] === str[i+n]) {
				arr.push(i-n);
				arr.push(i+n);
			}
			else if (str[i-n] !== str[i+n]) {
			break;
			}
		} 
	} //console.log(arr);
	for (let y = 0; y < arr.length; y+=2) {
		newArr[y+1] =  arr[y+1] - arr[y];
		} //console.log(newArr);
		let d = 0;
		let index = 0;
		for (let q = 1; q < newArr.length; q+=2) {
			if (newArr[q] >= d) {
				d = newArr[q];
				//console.log(d);
				index = q;
				//console.log(index);
			}
		} let begin = arr[index - 1];
			let end = arr[index + 1];
			let subPal = secStr.slice(begin, end);
			return subPal;
}

let z5 = checkBigPalinStr("Иди ты, Лёша, дукуда шёл");
console.log(z5);

