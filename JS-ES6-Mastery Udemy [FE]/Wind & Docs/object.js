console.log(window);

function getPageUrl(){
    let url = window.location.href;
    // debugger;
    console.log(url);
}


getPageUrl(); 


function add(num1, num2) {
    let result = num1 + num2;
    let emp = JSON.stringify({ "id": 123, "age": 20, });

    //data stored in local storage is available until explicitely deleted
    window.localStorage.setItem("result", result);
    window.localStorage.setItem("name", "Lyon Mike");// data stored inside localstorage is in string format
    window.localStorage.setItem("empOne", emp);
    console.log(result);
}

function getStorageData() {
    let name = localStorage.getItem("name");
    let result = localStorage.getItem("result");
    let e = localStorage.getItem("empOne");

    console.log(typeof(name) + " name is " + name);
    console.log(typeof(result) + " result is " + result);
    console.log(typeof(e) + " emp one data is " + e);

    console.log(name);
    console.log(parseInt(result));
    let empObj = JSON.parse(e); // converts the string form of emp object to Object form
    console.log(empObj);

    const {id, age} = empObj; //Object destructuring another feature of ES6
    console.log(id);
    console.log(age);
}

function clearData() {
    localStorage.clear();
    
}