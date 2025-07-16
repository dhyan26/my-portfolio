console.log("ID : DV05WD00044")
function checkAge(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible");
  }
}
checkAge(20); // Output: Eligible to vote
checkAge(16); // Output: Not eligible
checkAge(37); // Output: Eligible to vote
function tableOf(n) {
  console.log("Multiplication Table of", n);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
tableOf(2);
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("Odd numbers from 1 to 9:");
let i = 1;
while (i <= 9) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
console.log("Even or Odd from 1 to 10:");
for (let j = 1; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(j + " is Even");
  } else {
    console.log(j + " is Odd");
  }
}
