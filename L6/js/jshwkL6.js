let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
        {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        {
            title: "Флейта",
            price: 900,
            count: 50
        },
        {
            title: "Арфа",
            price: 3400,
            count: 5
        }
];

function generateTable(arr) {
  let table = document.createElement("table");
  table.style.cssText = `
border-spacing: 0 5px;
font-family: 'Open Sans', sans-serif;
vertical-align: middle;
font-size: 14px;
text-align: center;
                        `;
let caption = table.createCaption();
caption.innerText = "Склад";
  let row = table.insertRow(0);
  let n=0;
  //console.log(Object.keys(arr[0]).reverse());
  for (let item of Object.keys(arr[0])) {
        let cell = row.insertCell(n);
		cell.style.cssText = `
				border-spacing: 10px 10px;
				border: 2px solid black;
				padding: 5px;
                        `;
		cell.innerText = (Object.keys(arr[0]).reverse())[n].toUpperCase();
        n+=1;           
}
   for (let i=0; i < arr.length; i++) {
	    row = table.insertRow(i+1);
		for (let key in arr[i]) {
			let q=0;
        let cell = row.insertCell(q);
		cell.style.cssText = `
				border-spacing: 10px 10px;
				border: 2px solid black;
				padding: 5px;
                        `;
		q+=1;
        cell.innerText = arr[i][key];   
		console.log(arr[i][key]);
		}
   } document.body.appendChild(table);
}

generateTable(goods);