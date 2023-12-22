const accountId = 1234
let accountEmail = "shivanisajjan@mail.com"
var accountPassword = "123456"
accountCity = "banglore"
let accountState;

// accountId = 2 // not allowed
/*prefer not to use var because of issue in block scope and functional sscop */


accountEmail = "shwetha@gmail.com"
accountPassword = "7890"
accountCity = "jaipure"

console.log(accountId);

console.log([accountEmail,accountPassword,accountCity,accountState]);
