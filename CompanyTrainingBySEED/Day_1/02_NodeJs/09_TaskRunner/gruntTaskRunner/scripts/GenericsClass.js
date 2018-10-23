var Repository = (function () {
    function Repository() {
    }
    Repository.prototype.setValue = function (value) {
        this.value = value;
    };
    Repository.prototype.getValue = function () {
        return this.value;
    };
    return Repository;
}());
var gen1 = new Repository();
gen1.setValue("Hello World");
var result12 = gen1.getValue();
var gen2 = new Repository();
gen2.setValue(1);
var result13 = gen2.getValue();
var gen3 = new Repository();
gen3.setValue(true);
var result34 = gen3.getValue();
console.log(result12);
console.log(result13);
console.log(result34);
//# sourceMappingURL=GenericsClass.js.map