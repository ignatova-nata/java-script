class Validator {
    // приватные свойства (свойства недоступны все класса)
    // #prop_name = "Prop value";
    // свойства
    _rules = null;
    _messages = null;
    _successHandler = null;
    _errorHandler = null;
    constructor(form){
        this._form = form;
        this._form.addEventListener("submit", this.validate.bind(this));
    }

    get form(){
        return this._form;
    }
    set form(form){
        this._form = form;
    }
    get rules(){
        return this._rules;
    }
    set rules(value){
        this._rules = value;
    }
    get messages(){
        return this._messages;
    }
    set messages(value){
        this._messages = value;
    }
    get successHandler(){
        return this._successHandler;
    }
    set successHandler(func) {
        this._successHandler = func;
    }
    get errorHandler(){
        return this._errorHandler;
    }
    set errorHandler(func) {
        this._errorHandler = func;
    }


    init(settings){
        rules = settings.rules;
        messages = settings.messages;
        successHandler = settings.successHandler;
        errorHandler = settings.errorHandler;
    }

    minLength(elemValue, ruleValue){
        console.log("метод minLength: ",
            "пользователь ввел: " + elemValue,
            "правило ruleValue: " + ruleValue);
        return elemValue.length >= ruleValue;
    }
    maxLength(elemValue, ruleValue) {
        console.log("метод maxLength:",
            "пользователь ввел: " + elemValue,
            "правило ruleValue: " + ruleValue);
        return elemValue.length <= ruleValue;
    }
    required(elemValue){
        console.log("метод required:",
            "пользователь ввел Имя: " + elemValue);
        return elemValue.length > 0;
    }
    reg_match(elemValue, ruleValue) {
        console.log("метод reg_match:",
            "пользователь ввел Коммент: " + elemValue,
            "правило ruleValue: " + ruleValue);
        return ruleValue.test(elemValue);
    }

    validate(event){
        event.preventDefault();
        let elements = form.elements;
		let errorArr = [];
        for (let elem of elements){
            // console.log(elem.dataset.validate);
            // login
            // password
            // name
            // comment
            // undefined
            if (elem.dataset.validate){
                let rulesValues = rules[elem.dataset.validate];
                // console.log(rulesValues);
                // {
                //     minLength: 4,
                //     maxLength: 18
                // } и тд
                for (let rule in rulesValues){
                    // console.log(rule);
                    // minLength
                    // maxLength и тд
                    if(!this[rule](elem.value, rulesValues[rule])){
                       // console.log('для ' + elem.dataset.validate +' не выполняется правило ' + this[rule])
                        // this["minLength"](val, rule);
                        // this.minLength(val, rule);
                        // TODO: вместо errorHandler и return
                        //  выводить сообщение об ошибке
                        //  и обновлять счетчик ошибок (счетчик может быть переменной,
                        //  массивом, объектов)
							let messagesValues = messages[elem.dataset.validate];
							for (let message in messagesValues){
								if (message === rule) {
								//console.log("Ошибка! " + elem.dataset.validate + ". " + messages[elem.dataset.validate][message]);
								errorArr.push(elem.dataset.validate + ". " + messages[elem.dataset.validate][message]);
								//console.log(errorArr);
								}
							}
                    }
                }
            }
        }
        // TODO: проверять счетчик ошибок,
        //  если ошибок, нет вызывать successHandler(form);
        //  если есть errorHandler(form);
		if (errorArr.length > 0) {
		errorHandler(form);
		console.log(errorArr.join('! '));
		} else {
			successHandler(form)
			}
    }
}

let form = document.forms.validate;

let validator = new Validator(form);

let rules = {
    login: {
       minLength: 4,
       maxLength: 18
    },
    password: {
       minLength: 8
    },
    name: {
        required: true
    },
    comment: {
        reg_match: /comment/
    }
};

let messages = {
    login: {
        minLength: "Минимум 4 символа",
		maxLength: "Максимуи 18 символов"
    },
	password: {
		minLength: "Минимум 8 символов"
	},
    name: {
        required: "Поле обязательно для заполнения"
    },
	 comment: {
        reg_match: "Поле должно содержать только 'comment'"
    }
	
};

let successHandler = (form) => {
    console.log("Форма отправлена");
};

let errorHandler = (form) => {
    console.log("Форма не отправлена. Исправьте ошибки. Отправьте форму заново.");//вопрос errorArr.join('! ')
};

validator.init({
    rules: rules,
    messages: messages,
    successHandler: successHandler,
    errorHandler: errorHandler
});

