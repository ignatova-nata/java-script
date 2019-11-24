//Задание 2
let moscowTime = moment("2019-12-28 22:15").tz("Europe/Moscow");
console.log("Вылет рейса из Москвы по местному времени: " + moscowTime.format("YYYY MMMM DD HH:mm"));
let flightTime = moscowTime.add(10, "hours");
//console.log(flightTime.format("YYYY MMMM DD HH:mm"));
let nyTime = flightTime.clone().tz("America/New_York")
console.log("Прилёт рейса в Нью-Йорк по местному времени: " + nyTime.format("YYYY MMMM DD HH:mm"));

