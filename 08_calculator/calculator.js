const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;

};

const sum = function(a) {
  let sum=0;
  a.forEach(element => {
    sum+=element;
  });
	return sum;
};

const multiply = function(a) {
  let pro=1;
  a.forEach(element => {
    pro*=element;
  });
	return pro;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function fact(a) {
  if (a===0) return 1;
  if (a>0) return a*fact(a-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
