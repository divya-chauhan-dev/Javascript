const accountId = 214339
let accountEmail = "divya@yahoo.com"
var accountPassword = "23456789"
accountName = "Delhi"

//accountId = 2
console.log(accountId)

accountEmail="Divya@google.com"
accountPassword="222222222"
accountName="Bengluru"

/*prefer not to use var
because of issue in block scope and functional scope*/


let accountPurpose;


console.table([accountId, accountEmail, accountPassword, accountName,accountPurpose])