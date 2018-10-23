function processData(arg) {
    return arg;
}
//var result=processData(34);
//console.log(result);
function processAnyData(arg) {
    return arg;
}
//var result=processData("Ravi Tambade");
//console.log("Any Data" +result);
function processGenericsData(arg) {
    return arg;
}
//let result = processGenericsData<string>("Ravi Tambade");  // type of output will be 'string'
//let result=processGenericsData<number>(45);
var result = processGenericsData("Ravi Tambade");
console.log("Generics Data  :" + result);
