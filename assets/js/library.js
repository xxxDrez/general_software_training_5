
function isArray(obj){
    return Array.isArray(obj);
}

function isDate(obj){
    var isValid = obj.split(' To ').every(function(s) {
        return moment(s,'D MMM YYYY').isValid();
    });
    return isValid;
}

function isNumber(obj){
    return Number.isInteger(obj);
}

function isString(obj){
    return typeof obj === 'string';
}

function isFunction(obj){
    return typeof obj === 'function';
}

function isBoole(obj){
    return typeof obj === 'boolean';
}

function isUndefined(obj){
    return typeof(obj) === 'undefined';
}

function isNull(obj){
    return typeof(obj) === 'object'
}

function deepEqual(firstObj, secondObj) {
    if (firstObj === secondObj) {
      return true;
    } else if (isObject(firstObj) && isObject(secondObj)) {
      if (Object.keys(firstObj).length !== Object.keys(secondObj).length) { return false; }
      for (var prop in firstObj) {
        if (!deepEqual(firstObj[prop], secondObj[prop])) {
          return false;
        }
      }
      return true;
    }

    function isObject(obj) {
      if (typeof obj === "object" && obj != null) {
        return true;
      } else {
        return false;
      }
    }
}

class Developer{
    constructor(firstName,lastName,technology){
        if(Developer.exists){
            return Developer.instance;
        }
        Developer.instance = this;
        Developer.exists = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.technology = technology;
    }
}

const memo = (fn) => {
    const cache = {};
    return (...args) => {
        if(args[0] in cache){
            console.log("returned cached value");
            return cache[args[0]];
        }
        console.log("returned computed value")
        return cache[args[0]] = fn(...args);
    };
};

const sum = memo((a,b) => {
    result = a + b;
    return result;
});


