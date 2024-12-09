function add(a: number, b: number): number {
  return a + b;
}

function addStrict(a: number, b: number): number {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Arguments must be numbers');
  }
  return a + b;
}

let result = add(1, '2'); // Type Error
console.log(result); // NaN
let result2 = addStrict(1,2); //Valid
console.log(result2); // 3
let result3 = addStrict(1, '2'); // Throws Error