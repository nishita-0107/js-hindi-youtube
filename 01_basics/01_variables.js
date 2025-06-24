const accountId =144553  //no change
let accountEmail = "abc@123"
var accountPass = "12344"
accountCity="jaipur"
let accountState;

// prefer not to use var as it doesn't define the scope

// accountId=2
accountEmail ="abc@abc"
accountPassword="abcd"
accountCity="ahmedabad"
// console.log(accountId); will show error as constant can't be changed

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//account state = undefined

