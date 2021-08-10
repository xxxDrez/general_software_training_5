console.log(isArray(['1','2','3']));
console.log(isDate('1 May 2010'));
console.log(isNumber(1));
console.log(isString('Test'));
console.log(isFunction(function(){}));
console.log(isBoole(true));
console.log(isUndefined(undefined));
console.log(isNull(null));
console.log(deepEqual(Object,Object));


var Sam = new Developer('Sam', 'Winchester', 'Front-End');
var Din = new Developer('Din', 'Winchester', 'Back-End');

console.log(Sam === Din);
console.log(Sam);
console.log(Din);