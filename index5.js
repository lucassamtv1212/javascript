let varA = `A`; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varAtemp = varA;
varA = varB; // B
varB = varC; // C
varC = varA; // A

console.log(varA, varB, varC);