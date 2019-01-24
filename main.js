// Your code will go here

var form = document.createElement('form')
form.setAttribute('style', 'background: red')
form.setAttribute('class', 'b1 b2 b3')

var nameInput = document.createElement('input')
form.appendChild(nameInput)

var emailInput = document.createElement('input')
emailInput.type = 'email'
form.appendChild(emailInput)


var formBtn = document.createElement('button')
formBtn.type = 'submit'
formBtn.innerText = 'Submit'
form.appendChild(formBtn)

document.body.appendChild(form)



// var log = console.log

// function changeText(id, property, value) {
//    var field = document.getElementById(id);
//    field[property] = value;
// }

// // Scopes
// function fn1() {
//    return ' i am return fn1';
// }

// function fn2() {
//    return 'return from fn2';
// }

// function fn3() {
//    return 'return from fn3';
// }


// // var varFn1 = fn1();

// // var myFunction = function () { //scope 1
// //    var varFn2 = fn2();
// //    var myFunction2 = function () { //scope 2
// //       var varFn3 = fn3();

// //       console.table({ varFn1, varFn2, varFn3 })
// //    }//scope 2 end

// //    myFunction2()
// //    myFunction2()
// // } //scope 1 end

// // myFunction()

// // myFunction()

// // Closures

// // var arrayOne = [];


// // var varFn1 = fn1();

// // var myFunction = function () {
// //    var varFn2 = fn2();
// //    arrayOne.push(function () {
// //       var varFn3 = fn3();
// //       console.log({ varFn1, varFn2, varFn3 })
// //    })
// // }

// // myFunction()
// // arrayOne[0]()
// // arrayOne[0]()
// // myFunction()

// // log(arrayOne.length)
// // arrayOne[1]()

// // This

// // var obj = {
// //    fn: function (a, b) {
// //       console.log(this);
// //    }
// // }

// // obj.fn(3, 4);

// // var fn = function (one, two) {
// //    console.log(one, two);
// // };

// // var r = {}, g = {}, b = {};
// // fn(g, b);


// // var fn = function (one, two) {
// //    console.log(this, one, two);
// // };
// // var r = { r: "red" }, g = { g: "green" }, b = { b: "blue" };

// // r.method = fn;
// // r.method(g, b);
