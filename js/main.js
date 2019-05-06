var dataBase = {}
function reg(){
	var login = document.getElementById('regLog').value;
	var password = document.getElementById('regPass').value;
	var repPass = document.getElementById('regPassRep').value;
	var autho = document.getElementById('authorization');
	var registr= document.getElementById('registration');

	login = login.toString();
	password = password.toString();
	if(login.length == 0 || password.length == 0){
		alert("Заполните все поля")
	} else {
		if (login.indexOf('@') > -1){
			if(password != repPass){
				alert("Пароли не совпадают");
			} else {
				dataBase.login = login;
				dataBase.password = password;
				autho.style.display="block";
				registr.style.display="none";
			}
		} else {
			alert("Не коректный логин");
		}
	}
}
function autho() {
	var login = document.getElementById('authoLog').value;
	var password = document.getElementById('authoPass').value;
	var autho = document.getElementById('authorization');
	var finished = document.getElementById('wrapper');

	login = login.toString();
	password = password.toString();
	if(login.length == 0 || password.length == 0){
		alert("Заполните все поля")
	} else {
		if (login.indexOf('@') > -1){
			if (dataBase.login === login && dataBase.password === password){
				autho.style.display="none";
				finished.style.display="block";
			} else {
				alert("Не правильный логин или пароль")
			}
		}
	}
}











//https://learn.javascript.ru/ajax-xmlhttprequest

// var myObj = new Object(),
//     str = "myString",
//     rand = Math.random(),
//     obj = new Object();
// myObj.type              = "Dot syntax";
// myObj["date created"]   = "String with space";
// myObj[str]              = "String value";
// myObj[rand]             = "Random Number";
// myObj[obj]              = "Object";
// myObj[""]               = "Even an empty string";
// console.log(myObj)  
// ///////////////////////////////////
// var myCar = new Object();
// var propertyName = "make";
// myCar[propertyName] = "Ford";

// propertyName = "model";
// myCar[propertyName] = "Mustang";

// function showProps(obj, objName) {
//   var result = "";
//   for (var i in obj) {
//     if (obj.hasOwnProperty(i)) {
//         result += objName + "." + i + " = " + obj[i] + "\n";
//     }
//   }
//   return result;
// }
// console.log(showProps(myCar, 'myCar'));

// gulp
//видео курс: https://www.youtube.com/watch?v=dsHWWuWnuMA&list=PL0lO_mIqDDFWXtolicDTX67zBRuXZk72x&index=1
//Официальный сайт Gulp: https://gulpjs.com/
//Официальный сайт Node JS: https://nodejs.org/