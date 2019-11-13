

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
		//console.log(arr[i][key]);
		}
   } document.body.appendChild(table);
   
   // Задание 1
   table.rows[0].addEventListener("click", sortArr);

	function sortArr(event) {
		let clickElem = event.target.innerHTML.toLowerCase();
		let newArr = arr.sort((a, b) => a[clickElem] > b[clickElem] ? 1 : a[clickElem] < b[clickElem] ? -1 : 0);
		table.remove();
		generateTable(newArr);
	}
}

generateTable(goods);


//Задание 3 
function removeDisabled() {
	let form = document.forms.hwk7;
		//console.log(form);
	let checkBox = form.elements['check'];
	//console.log(checkBox);
	let inputText = document.getElementById('content');
	//console.log(inputText);
	if (checkBox.checked == true) {
		//inputText.removeAttribute("disabled");
		inputText.disabled = false;
	} else {
		inputText.disabled = true;
		}
}


//Задание2
function getPrizeN(someNumber) {
	
	let section = document.createElement("section");
	section.classList.add("section");
	let div1 = document.createElement("div");
	div1.classList.add("div1");
	let div2 = document.createElement("div");
	div2.classList.add("div2");
	section.append(div1, div2);
	let pDiv2 = document.createElement("p");
	let n = 3;
	pDiv2.innerText = `количество попыток - ${n}`;
	div2.append(pDiv2);
	for (let i = 1; i <= someNumber * someNumber; i++) {
		let p = document.createElement("p");
		p.setAttribute("data-pr",i);
		//console.log(p);
		div1.append(p);
		p.innerText = "Подарок?";
	}document.body.appendChild(section);
	
	let pr1 = pr2 = pr3 = 0;
	do{
	 pr1 = Math.floor(Math.random(1, someNumber*someNumber) * (someNumber*someNumber - 1)) + 1;
	 pr2 =  Math.floor(Math.random(1, someNumber*someNumber) * (someNumber*someNumber - 1)) + 1;
	 pr3 =  Math.floor(Math.random(1, someNumber*someNumber) * (someNumber*someNumber - 1)) + 1;} 
	while (pr1===pr2 || pr2===pr3 || pr1===pr3);
		
	//console.log(pr1, pr2, pr3);
 	div1.addEventListener("click", showPresent);
		function showPresent(event) {
		let clickElem = event.target;
		let present = clickElem.dataset.pr;
			if (present == pr1 || present == pr2 || present == pr3) {
			clickElem.innerText = "Подарок!";
			clickElem.classList.add("present");
			this.removeEventListener("click",showPresent);
			} else { n-=1; 
					pDiv2.innerText = `количество попыток - ${n}`;
					clickElem.innerText = "Нет подарка";
					clickElem.classList.add("error");
					if (n==0) {
						this.removeEventListener("click",showPresent);
					}
			}
		}
		 
 } 
 
 getPrizeN(2) ;
  
 //Задание 4
//i	
let fieldsets = document.getElementsByTagName("fieldset");
//console.log(fieldsets);
let lpInput = fieldsets[1].getElementsByTagName("input");
//console.log(lpInput[0]);
//console.log(lpInput[1]);
lpInput[0].addEventListener("focus", focusOnElem);
lpInput[1].addEventListener("focus", focusOnElem);
function focusOnElem() {
	this.nextElementSibling.classList.add("error");
}
//ii
lpInput[0].addEventListener("blur", focusOutElem1);
function focusOutElem1() {
  	if (this.value.length < 11 && this.value.length > 3 ){
			this.nextElementSibling.classList.remove("error");
			this.nextElementSibling.classList.add("success");
	    }
}
lpInput[1].addEventListener("blur", focusOutElem2);
function focusOutElem2() {
	if (this.value.length > 5 ){
			this.nextElementSibling.classList.remove("error");
			this.nextElementSibling.classList.add("success");
		}
}
	
//iii

let form = document.forms.hwk7;
form.addEventListener("submit", takeForm);
function takeForm(event) {
    event.preventDefault();
	let arr_value = [this.elements.login.value, this.elements.pwd.value, this.elements.text.value];
    console.log(arr_value);
}

//iiii
form.addEventListener("reset", outForm);
function outForm(event) {
	this.elements.login.value = null;
	this.elements.login.nextElementSibling.classList.add("error");
	this.elements.login.nextElementSibling.classList.remove("success");
	
	this.elements.pwd.value = null;
	this.elements.pwd.nextElementSibling.classList.add("error");
	this.elements.pwd.nextElementSibling.classList.remove("success");
	
	this.elements.text.value = null;
	this.elements.text.disabled = true;
	
}


