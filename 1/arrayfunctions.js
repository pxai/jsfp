const numbers = [3, 5, 2, 0, 1, 4];

numbers.filter(number => number < 3);  // [2, 0, 1]
numbers.filter(number => number === 5); // [5]
numbers.filter(number => number === 6); // []

numbers.find(number => number < 3);   // 2
numbers.find(number => number === 5); // 5
numbers.find(number => number === 6); // undefined

// numbers = [3, 5, 2, 0, 1, 4]

numbers.map(number => number++); // [3, 5, 2, 0, 1, 4]
numbers.map(number => ++number); // [4, 6, 3, 1, 2, 5]
numbers.map((number, index) => number + index); // [3, 6, 4, 3, 5, 9]
