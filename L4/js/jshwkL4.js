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
			return res;
		} else if (str[i].toLowerCase() === str[str.length - 1 - i].toLowerCase()) {
			res = `фраза: "${someStr}" является палиндромом`;
		}
	} return res;
}
let z4 = checkPalindrome("Иди, Сеня, не сиди");
console.log(z4);
