// Extending Array prototype for custom methods
Array.prototype.customSlice = function(start, end) {
    const result = [];
    for (let i = start; i < (end || this.length); i++) {
        result.push(this[i]);
    }
    return result;
};

Array.prototype.customSplice = function(start, deleteCount, ...items) {
    const result = this.slice();
    result.splice(start, deleteCount, ...items);
    return result;
};

Array.prototype.customPush = function(...elements) {
    let length = this.length;
    for (const element of elements) {
        this[length++] = element;
    }
    return length;
};

Array.prototype.customPop = function() {
    if (this.length === 0) return undefined;
    const element = this[this.length - 1];
    this.length--;
    return element;
};

Array.prototype.customMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

Array.prototype.customFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;
    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Testing custom methods
const arr = [1, 2, 3, 4, 5];

console.log(arr.customSlice(1, 3)); // Output: [2, 3]
console.log(arr.customSplice(2, 0, 6)); // Output: [1, 2, 6, 3, 4, 5]
console.log(arr.customPush(6, 7)); // Output: 7 (new length of the array)
console.log(arr.customPop()); // Output: 7 (removed element)

console.log(arr.customMap(x => x * 2)); // Output: [2, 4, 6, 8, 10]
console.log(arr.customFilter(x => x % 2 === 0)); // Output: [2, 4]
console.log(arr.customReduce((acc, cur) => acc + cur, 0)); // Output: 15