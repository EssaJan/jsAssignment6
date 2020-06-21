// Chapters 21-25//

// Task1//
var firstName = prompt("Please Enter Your First Name")
var lastName = prompt("Please Enter Your LastName")
var fullName = firstName+lastName
alert(fullName)

// Task2//
var favModel = prompt("What is your Favorite mobile model?")
document.write("My favorite phone is:"+" "+favModel)

// Task3//
var text = "pakistan"
var textseg = text.indexOf("n")
document.write(textseg)

//Task4//
var text = "Hello World"
var indexText = text.lastIndexOf("l")
document.write("Last index of 'l' is: "+" "+indexText)

// Task5//
var str = "Pakistani"
document.write("String :" +" "+str +"<br>")
var str1 = str.charAt(3)
document.write("Character at index 3 :"+ " " + str1+" <br>")ftt

// Task6//
var a = "Q1"
var b = a.repeat(20)
document.write(b)

// Task7//
var city = "Hyderabad";
document.write("City:"+" "+city + "<br>");
var repCity =city.replace("Hyder","Islam");
document.write("After Replacement:"+" "+repCity)

// Task8//
var message = "Ali and Sami are best friends. They play cricket and football togather.";
var msg = message.replace(/and/gi, "&");
document.write(msg);

//Task9//
var val = "472";
document.write("Value:"+" "+val +"<br>");
var type = Number(val);
document.write("Type:" +" " + "string"+"<br>");
var val1 ="472";
document.write("Value:"+" "+val +"<br>");
var type1 = val1.toString();
document.write("Type:" +" " + "number"+"<br>");

// Task10//
var userInput = prompt("Enter Your word")
document.write("User input:"+" "+userInput +"<br>");
var uperInp = userInput.toUpperCase();
document.write("Upper case:"+" "+uperInp);


// Task11//
var input = prompt("Please Enter Your Text");
var b = input.valueOf(prompt);
document.write("User input:"+" "+b +"<br>");
var titleCase = input [0].toUpperCase() + input.slice(1).toLowerCase();
document.write("Title case:"+" "+titleCase)

// Task12//
var num = 35.36;
document.write("Number :"+" "+num+"<br>")
var remDot = (num*100)
document.write("Result  :"+"  "+remDot)

// Task13//



// Task14//
var a = prompt("Enter text").toLowerCase();
var b = ["cake", "apple pie", "cookie", "chips", "patties"];
switch(a){
    case "cake":
        alert("cake is availbale at index 0 in our bakery")
        break;
        case "apple pie":
            alert("cake is availbale at index 1 in our bakery")
            break;
        case "cookie":
            alert("cake is availbale at index 2 in our bakery")
            break;
        case "chips":
            alert("cake is availbale at index 3 in our bakery")
            break;
        case "patties":
            alert("cake is availbale at index 4 in our bakery")
            break;
        default:
            alert("we are Sorry"+" "+a.valueOf()+" "+ "is not available in our bakery")


}
// Task15//



// Task16//
var university = "University of Karachi";
var uni = university.split("");
document.write(uni[0]+"<br>");
document.write(uni[1]+"<br>");
document.write(uni[2]+"<br>");
document.write(uni[3]+"<br>");
document.write(uni[4]+"<br>");
document.write(uni[5]+"<br>");
document.write(uni[6]+"<br>");
document.write(uni[7]+"<br>");
document.write(uni[8]+"<br>");
document.write(uni[10]+"<br>");
document.write(uni[11]+"<br>");
document.write(uni[12]+"<br>");
document.write(uni[13]+"<br>");
document.write(uni[14]+"<br>");
document.write(uni[15]+"<br>");
document.write(uni[16]+"<br>");
document.write(uni[17]+"<br>");
document.write(uni[18]+"<br>");
document.write(uni[19]+"<br>");
document.write(uni[20]+"<br>");

//Task17//
var a = prompt("Enter your text to find")
document.write("User input:"+" "+a.valueOf(prompt)+"<br>")
var b = a.charAt(a.length-1);
document.write("Last Character of input: "+" "+b+ "<br>")


// Task18//
var msg = "The quick brown fox jumps over the lazy dog"
var b = msg.toLowerCase().match((/the/g)).length
document.write("Text:"+"The quick brown fox jumps over the lazy dog There are"+" "+b+" "+"occurrence(s) of the 'the'")

// Chapters 26-30//

//Task1//
var posIng = +prompt("Enter Number")
document.write("number:"+" " +posIng+"<br>");
var ronVal = Math.round(posIng)
document.write("round off value:"+" "+ronVal+"<br>")
var floorVal = Math.floor(posIng)
document.write("floor value:"+" "+floorVal+"<br>")
var ceilVal = Math.ceil(posIng);
document.write("ceil value:"+" "+ceilVal+"<br>")

// Task2//
var nagFloat = + prompt("Enter Number")
document.write("number:"+" " +nagFloat+"<br>");
var nagRound = Math.round(nagFloat)
document.write("round off value:"+" "+nagRound+"<br>")
var nagFloor = Math.floor(nagFloat)
document.write("floor value:"+" "+nagFloor+"<br>")
var nagCeil = Math.ceil(nagFloat);
document.write("ceil value:"+" "+nagCeil+"<br>")

// Task3//
var absNum = +prompt("Enter Number");
document.write("number:"+" " +absNum+"<br>");
var absVal = Math.abs(absNum)
document.write("Absoulte number:"+" " +absVal+"<br>");

// Task4//
var randomNumber = Math.random();
var b = (randomNumber*6)+1;
var c =Math.trunc(b)
document.write("random dice value:"+" "+c);

//Task5//
var coin = Math.random();
var coinB =(coin*2)+1;
var coinC = Math.trunc(coinB);
if(coinC == '2'){
    document.write(coinC+"<br>"+"random coin value: Heads" )
}else{
    document.write(coinC+"<br>"+"random coin value: Tails")

}
// Task6//
var ran = Math.random();
var ranA = (ran*100)+1;
var c = Math.trunc(ranA)
document.write("random number between 1 and 100:"+" "+c);

//Task7//
var weight = prompt("Enter Your wright in kilograms");
var weg = weight.valueOf(prompt)
if(weg == "50"){
    document.write("The weight of user is"+" "+weg+" "+"kilograms")
}else if(weg == "50kgs"){
    document.write("The weight of user is"+" "+weg+" "+"kilograms")
}else if(weg == "50.2kgs"){
    document.write("The weight of user is"+" "+weg+" "+"kilograms")
}else if(weg == "50.2kilograms"){
    document.write("The weight of user is"+" "+weg+" "+"kilograms")
}else{
    alert("sorry")
}

// Task8//
var sec = Math.random();
var secA = (sec * 10)+1;
var secC = Math.trunc(secA);
document.write(secC)
if(secC == 3){
    alert("congrastulate")
}else if(secC == 5){
    alert("congrastulate")
}else if(secC==9){
    alert("congrastulate")
}

// Chapter 31-34//

// Task1//
var date = new Date();
document.write(date)

// Task2//
var monthName = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
var d = new Date();
var n = monthName[d.getMonth()];
document.write("Current month:"+" "+n)


// Task3//
var day = ["Sun","Mon","Tue","Wed","Thr","Fri", "Sat"]
var theday = new Date();
var n = day[theday.getDay()];
document.write("Today is"+" "+n)

// Task4//
var funyDay = ["Sun","Mon","Tue","Wed","Thr","Fri", "Sat"];
var theday = new Date();
var n = funyDay[theday.getDay()];
if(n == "Sat"){
    alert("It's Fun day")
}else if(n == "Sun"){
    alert("It's Fun day")
}else{
    alert("It's Not a Fun day")
}

// Task5//
var dayNo = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
var fifDay = new Date();
var mon = fifDay.getMonth()
document.write(mon)

var a = new Date();
var b = a.getHours();
var c = a.getMinutes();
if(b == 12){
    document.write("its pm")
}else{

}
document.write(b)

// Task7//
var hour = new Date();
var status = hour.getHours();
document.write(status)
    if (status<13){
        document.write("It's"+" "+"AM"+"<br>")
    }else(status<24)
        document.write("It's"+" "+"PM"+"<br>")
        
//  Task8//
 var today = new Date();
 var laterDate = new Date("Dec 31, 2020");
 document.write("Later date:"+" "+laterDate)   
    
// Task9//
var today = new Date("Dec 29, 2014");
var firstRamzan = new Date("June 18, 2015");
var diff = firstRamzan-today
var Dif = diff/(1000*60*60*24)
Dif = Math.floor(Dif)
document.write(Dif+" "+ "days passed since 1st Ramadan, 2015")


// Task10//
var today = new Date("Jan 1, 2015")
var refDate = new Date ("Dec 5, 2015")
var dif = refDate-today;
var Dif = dif/(1000*60)
document.write("On reference date"+" "+refDate+","+"<br>"+Dif+" "+ "seconds had passed since begning of 2015")

//Task11//
var today = new Date();
document.write("Current date:"+today)

Task13//


//Chapter 35-38//
//Task1//
function date(){
    var now = new Date()
    document.write(now)
}
date();

//Task2//
function Name(){
    var firstName = prompt("Enter First Name");
    var lastName =  prompt("Enter Last Name");
    var fullName = (firstName+ " "+lastName);
    alert("Your Full Name is:"+" "+fullName);
}
Name();

//Task3//
function add (){
    var num1 = + prompt("Enter First Number");
    var num2 = +prompt("Enter Second Number");
    document.write(num1 + num2)
    return num1+num2
 
}
add();

//Task4//
function calculator(){
    var num1 = +prompt("Enter First number")
    var opr = prompt("Enter operator")
    var num2 = +prompt("Enter Second number")
    if (opr == '+'){
        document.write(num1 + num2)
    }else if(opr === '-'){
        document.write(num1-num2)
    }else if (opr == '*'){
        document.write(num1*num2)
    }else if(opr == '/'){
        document.write(num1/num2)
    }
}
calculator();


//Task5//
function squ(){
    var numSq = +prompt("Enter Number");
    var SquNumber = Math.pow(numSq , 2)
    document.write("Square of:"+numSq+" " +"is"+" "+SquNumber)

}
squ();

//Task6//
function Factorial(n){
   
if(n==0){
    return 1;
}
return n * Factorial(n-1)

}document.write(Factorial(6))

//Task7//
function counting(){
    var stNum = +prompt("Enter Starting Number");
    var endNum = +prompt("Enter End Number");
    var countNumber = (stNum+endNum);
    document.write(countNumber)

}counting();
//Task8//
//Task9//
//Task10//
//Task11//
//Task12//
//Task13//
//Task14//
