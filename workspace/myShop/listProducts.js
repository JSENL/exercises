console.log('WELCOME TO MY SHOP!!!!');
console.log('Would you like some garbage?');

var faker = require('faker');

var randomProduct = faker.commerce.productName(); 
var randomPrice = faker.commerce.price(); 
var randomCard = faker.helpers.createCard();

for (var counter = 1; counter <= 10; counter++){ 
console.log(faker.fake("{{commerce.productName}}, {{commerce.price}}"));
}