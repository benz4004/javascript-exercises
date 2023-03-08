const reverseString = function (str) {
    //return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0); //method 1: by recurssion

    return str.split("").reverse().join("");//method 2: by chaining methods

    //  let arr=   str.split("");  //method 3: 
    //  let revArr=[];
    //  for (item of arr) revArr.unshift(item);
    //  let res=revArr.join("");
    //  return res;
};

// Do not edit below this line
module.exports = reverseString;
