var obj1 = new Object();
var obj2 = obj1;

obj1.myProperty = "All the power is within me";

document.write(obj2.myProperty);


// nullify the Objs
obj1 = null;
obj2 = null;


var product = new Array();
var data = new Date();
var error = new Error("Something went wrong");
var myFunc = new Function("document.write('Hello')");
var regEx = new RegExp("\\d+");

//Objects


var student = {
    name: "Lyon Mike",
    class: 3,

    //or you can wrap the key and the value in qoutes just like JSONstringify
    "city": "Lagos",
    "age": 12
};
document.write(student.city);

// another way of writting OBJ

var Stdn = new Object();
 Stdn.name = "Mike Titi";
 Stdn.class = 2;
 Stdn.age = 10;

 document.write(Stdn.name);


 //Array

 var studentNames = ["John", "Bob", "Harry"];

 var stuNme = new Array("John", "Bob", "Harry");

 document.write(studentNames[1]);
 document.write(stuNme[1] + "<br/>");

 //Function



 function hello(name){
     return "Hello " + name;
 }

 var myFunc = new Function("name", "return 'Hello ' + name");

 
 //Regular Expression


 var regEx = /\d+/;



 // Reference types
// objects are values of references


 document.write(typeof studentNames + "<br/>");
 document.write(typeof stuNme + "<br/>");
 document.write(typeof hello + "<br/>");

// to know the specific types of the data and it will return boolen value as answer
// id use Object as comparison on the right side of the instanceof it will return 
// true cus all the reference types are derived from object literals
//in other words Object is the parent of all reference types

 document.write((student instanceof Object) + "<br/>");
 document.write((stuNme instanceof Array) + "<br/>");
 document.write((hello instanceof Function)+ "<br/>");


 //Wrapper Types

 var quote = "Arise awake and stop not till the goal is reached";

 var s = quote.substring(4,8);

 document.write(s);