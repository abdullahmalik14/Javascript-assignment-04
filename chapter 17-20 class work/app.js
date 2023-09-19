//Arrays and loop
//Question no:03
for(var i=1;i<=10;i++){
    document.write(i +"<br>");
}
document.write("<br>"+"<br>");

//Question no:04
var userNum = prompt("Enter a number to show its multiplication table");
var tableLength = prompt("Enter length multiplication table");

for(var i = 1;i<=tableLength;i++){

    document.write(userNum +"X"+ i +" = "+ userNum*i+"<br>")

}

//Question no:05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0;i<fruits.length;i++){

    document.write(fruits[i]+"<Br>")
}

document.write("<br>"+"<br>");

for(var i = 0;i<fruits.length;i++){

document.write("Element at index",i +" is "+" " + fruits[i]+ "<br>")

}

//Question no:06
//a
document.write("counting:"+ "<br>"+ "<br>");
for(var i = 1;i<=15;i++){

    document.write(i+", ");
}

document.write("<br>"+"<br>");

//b
document.write("Reverse counting:"+ "<br>"+ "<br>");
for(var i = 10;i>=1;i--){

    document.write(i+", ");

}

document.write("<br>"+"<br>");

//c
document.write("Even:"+ "<br>"+ "<br>");
for(var i =0; i<=20 ;i= i + 2){

    document.write(i+", ");

}

document.write("<br>"+"<br>");

//d
document.write("Odd:"+ "<br>"+ "<br>");
for(var i =1; i<=19 ;i= i + 2){

    document.write(i+", ");

}

document.write("<br>"+"<br>");

//e
document.write("Series:"+ "<br>"+ "<br>");
for(var i =2; i<=20 ;i= i + 2){

    document.write(i+"k, ");

}

document.write("<br>"+"<br>");


//Question no:07
var A = ["cake","apple pie","cookie","chips","patties"]
var userInput = prompt("Welcome to our bakery.What do you want to order sir/ma'am?");

for(var i = 0;i<A.length;i++){

    if(userInput === A[i]){

        document.write(userInput+" is available in our bakery");
    }
        
        else if(userInput !== A[i]){
            document.write("We are sorry "+ userInput + " is not available in our bakery")
        }
        }
        document.write("<br>"+"<br>");

//Question no:08
var A = [24, 53, 78, 91, 12];
var largestNumber = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largestNumber) {
        largestNumber = A[i];
    }
}
document.write("Array items: "+ A +"<br>")
document.write(" largest number in the array is: " + largestNumber);


document.write("<br>"+"<br>");

//Question no:09

var A = [24, 53, 78, 91, 12];

var smallestNumber = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i];
    }
}

document.write("Array items: "+ A +"<br>")
document.write(" smallest number in the array is: " + smallestNumber+"<br>");
document.write("<br>"+"<br>");

//Question no:10
for(var i=5;i<=100;i = i + 5){
document.write(i+", ");
}