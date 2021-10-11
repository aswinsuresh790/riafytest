let password = "W$fskdjfs@@4429";
let userCheck =  /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
let result = userCheck.test(password);
console.log(result)