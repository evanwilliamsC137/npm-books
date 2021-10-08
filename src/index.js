function sayHello() {
    console.log("Hello my name is Evan")
}

sayHello()

const $ = require('jquery');

function getBooks() {
    fetch('https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters')
        .then(res => res.json())
}

console.log(getBooks.data())