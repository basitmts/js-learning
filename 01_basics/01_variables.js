const accountId = '12345'
let accountPassword=23456
accountCity='karachi'
let accountState;
/*
prefer do not use var
because of problem in block and functional scope
*/
accountPassword=36789
accountCity='quetta'

console.table([accountId, accountPassword, accountCity,accountState])
