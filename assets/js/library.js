
var module = (function(){

    const isObject = function(obj){
        if (typeof obj === "object" && obj != null) {
          return true;
        } else {
          return false;
        }
    };

    const memo = (fn) => {
        const cache = {};
        return (...args) => {
            if(args[0] + '-' + args[1] in cache){
                console.log("returned cached value");
                return cache[args[0] + '-' + args[1]];
            }
            console.log("returned computed value");
            return cache[args[0] + '-' + args[1]] = fn(...args);
        };
    };

    return {
        isArray: function(obj){
            return Array.isArray(obj);
        },
        isDate: function(obj){
            return obj instanceof Date;
        },
        isNumber: function(obj){
            return typeof obj === 'number';
        },
        isNaN: function(obj){
            if(obj !== obj) return true;
            else return false;
        },
        isString: function(obj){
            return typeof obj === 'string';
        },
        isFunction: function(obj){
            return typeof obj === 'function';
        },
        isBoole: function(obj){
            return typeof obj === 'boolean';
        },
        isUndefined: function(obj){
            return typeof(obj) === 'undefined';
        },
        isNull: function(obj){
            return typeof(obj) === 'object';
        },
        deepEqual: function(firstObj,secondObj){
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
        },
        Developer: class{
            constructor(firstName,lastName,technology){
                if(typeof module.Developer.instance === "object"){
                    return module.Developer.instance;
                }
                module.Developer.instance = this;
                this.firstName = firstName;
                this.lastName = lastName;
                this.technology = technology;
                return this;
            }
        },
        sum: memo((a,b) => {
            result = a + b;
            return result;
        })
    };
})();


