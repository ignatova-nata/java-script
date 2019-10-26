
let a = [-1, 3, -2, 4, 9, 6];
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

