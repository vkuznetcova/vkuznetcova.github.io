function myFirstApp(name, age) {

    alert("Привет, меня зовут " + name + " и это моя первая программа!");

    function showSkills() {
        let skills = ["html", "css", "js", "php", "c++"];

        for (let i = 0; i < skills.length; i++) {
            document.write("Я владею " + skills[i] + "<br>");
        }
    }

    showSkills();

    function checkAge() {
        if (age > 18) {
            alert("Добро пожаловать! Вам больше 18.");
        } else {
            alert("До свидания! Вам еще нет 18.");
        }
    }

    checkAge();

    let number = prompt("Введите число: ");

    function calcPow(num) {
        return num * num;
    }

    document.write("<hr>" + number + "^2 = " + calcPow(number));


}

let myName = prompt("Введите ваше имя:"),
    myAge = prompt("Введите ваш возраст:");

myFirstApp(myName, myAge);