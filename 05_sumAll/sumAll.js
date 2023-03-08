const sumAll = function(num1,num2) {
    let bigger,smaller;
//if (typeof num1 !== 'number' || typeof num2 !== 'number' ) return "ERROR";
if (!Number.isInteger (num1)  || !Number.isInteger (num2) ) return "ERROR";
if (num1<0 || num2<0) return "ERROR";
if (num1<num2) {smaller=num1;bigger=num2;}
else {smaller=num2;bigger=num1;}
let sum=0;
for (let i=smaller;i<=bigger;i++)
sum+=i;
return sum;
};

// Do not edit below this line
module.exports = sumAll;
