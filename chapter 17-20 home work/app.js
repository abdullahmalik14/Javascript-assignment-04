
//Question No:01

for (let i = 1; i <= 10; i++) {
   document.write(i+", ");
}

document.write("<br>"+"<br>")

//Question No:02
for (var i = 1;i<=12;i++){
    document.write(i+", ")
}
document.write("<br>"+"<br>")



//Question No:03
//for var i = 0 i <= 4 i++
for (var i = 0; i <= 4 ;i++) {

}

//Question No:04
for(var abc = 1;abc<=100;abc++){
    document.write(abc+", ")
}
document.write("<br>"+"<br>")

//Question No:05
for(var i = 3;i >= 1;i--){
    document.write(i+ ", ")
}

document.write("<br>"+"<br>")

//Question No:06

var arr = [1,2,3,4];
var variableNames = arr.length;
document.write(variableNames)
document.write("<br>"+"<br>")

//Question No:07
//var booleanValue= [True,False];

//Question No:08
var pets=["cat","dog","monkey","fluffy"];
for(var i =0;i<pets.length;i++){
    document.write(pets[i]+", ")
}
document.write("<br>"+"<br>")

//Question No:09
for(var i = 0;i <=10;i++){
    if(i===1){
        alert(" The counter is " + i)
        break;
    }
}


//Question No:10

var userNames = ["Ali", "Bobby", "Charles", "David"];
var firstName = prompt("Enter first name");
for (var i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter");
        break; 
    } 
}

if(firstName !== userNames){
    alert("Please write correct user name")
}

//Question No:11
        var list = ["Apple", "Banana", "Cherry", "Orange", "Mango"];
        
        var userInput = prompt("Enter one fruit name:");

        var matchFound = false;
        for (var i = 0; i < list.length; i++) {
          if (userInput === list[i]) {
            alert("Match found");
            matchFound = true;
            break;
          }
        };
        
        if (userInput !== list) {
          alert("Match not found");
        }
        

        //Question No:12
        document.write("<br>"+"<br>")
        var firstArr = ["a", "b", "c", "d", "e", "f"];
        var secondArr = [1, 2, 3, 4, 5, 6];

        for (var i = 0; i < firstArr.length; i++) {
        for (var j = 0; j < secondArr.length; j++) {
        document.write(firstArr[i] + secondArr[j]+"<br>");
        }
        }
















