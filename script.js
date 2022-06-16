// 1.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
// a.
console.log(ages[ages.length - 1] - ages[0]);
// b.
ages.push(42);
console.log(ages[ages.length - 1] - ages[0]);
// c.
var sumOfAges = 0;
for(var age of ages) {
    sumOfAges += age;

    var avgAge = sumOfAges / ages.length;
}
console.log(avgAge);

// 2.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// a.
var sumOfNameLengths = 0;
for(var name of names) {
    sumOfNameLengths += name.length;

    var avgNameLength = sumOfNameLengths / names.length;
}
console.log(avgNameLength);
// b.
console.log(names.join(' '));

// 3.
// To access the last element in an array, we use the following syntax:
// <array name>[<array name>.length - 1]

// 4.
// To access the first element in an array, we use the following syntax:
// <array name>[0]

// 5.
var nameLengths = [];
for(var name of names) {
    nameLengths.push(name.length);
}
console.log(nameLengths);

// 6.
var x = 0;  // placeholder for sum of nameLengths values -- 'sumOfNameLengths' was already used above
for(var length of nameLengths) {
    x += length;
}
console.log(x);

// 7.
var concatenator = function(word, n) {
    var concatenatedWords = '';

    for(var i = 0; i < n; i++) {
        concatenatedWords += word;
    }

    return concatenatedWords;
}
console.log(concatenator('Hi', 5));

// 8.
var createFullName = function(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(createFullName('Davante', 'Adams'));

// 9.
var checkSum = function(arr) {
    var sumOfNumbers = arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });

    return sumOfNumbers > 100;
}
console.log(checkSum([30, 50, 10, 80]));

// 10.
var getAvg = function(arr) {
    var sumOfNumbers = arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });

    return sumOfNumbers / arr.length;
}
console.log(getAvg([2, 7, 9, 3, 6]));

// 11.
var compareAvgs = function(arr1, arr2) {
    var arr1Sum = arr1.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
    var arr1Avg = arr1Sum / arr1.length;

    var arr2Sum = arr2.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
    var arr2Avg = arr2Sum / arr2.length;

    return arr1Avg > arr2Avg;
}
var a = [5, 6, 7, 8];
var b = [1, 2, 3, 4];
console.log(compareAvgs(a, b));

// 12.
var willBuyDrink = function(isHotOutside, moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 12.00));

// 13.
var getInitials = function(firstName, lastName) {
    var firstInitial = firstName.charAt(0);
    var lastInitial = lastName.charAt(0);

    return firstInitial + lastInitial;
}  // the function takes a first and last name, and returns the initials
console.log(getInitials('Lautaro', 'Martinez'));