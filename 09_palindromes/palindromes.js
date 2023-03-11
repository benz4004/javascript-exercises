const palindromes = function (str) {
    str = str.toLowerCase();
    let arr = str.split('');
    let arr2 = [];
    let arr3=[];
    arr.forEach(element => {
        if (element.charCodeAt(0) > 96 && element.charCodeAt(0) < 123) {
            arr2.push(element);
            arr3.unshift(element);
        }
    });
return arr2.join('')===arr3.join('') ;
};

// Do not edit below this line
module.exports = palindromes;
