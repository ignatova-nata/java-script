// для домашнего задания номер 1 и 2
    let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };
console.log(goods);

    // для домашнего задания номер 3
    let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];
	
//Задание 1
	function getGoods(obj, from, to) {
	let newGoods = {};
	for (let key in obj) {
		if (obj[key].price >= from && obj[key].price <= to) {
			newGoods[key] = obj[key];
			}
		}return newGoods;
	}		
	
let z1 = getGoods(goods, 2000, 3000);
console.log(z1);

//Задание 2
function addToCart(obj, title, countToCart) {
	for (let key in obj) {
			if ((obj[key].title === title) && (obj[key].count < countToCart)){
				let res = `В корзине нет необходимого количества товара "${title}"`;
				return res;
				} 
			else if ((obj[key].title === title) && (obj[key].count >= countToCart)){
				obj[key].count = obj[key].count - countToCart;
				return obj;
			} 
		} 		
	}		

let z2 = addToCart(goods, "Арфа", 4);
console.log(z2);

//Задание 3 
function getAlpOrd(someArr) {
  someArr.sort((a, b) => a.title > b.title ? 1 : -1);
}
getAlpOrd(books);
console.log(books);