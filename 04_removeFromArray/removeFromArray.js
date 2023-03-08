const removeFromArray = function () {
    let arr = arguments[0];
    //console.log(arr);
    //let elements=arguments.shift();
    for (let i = 1; i < arguments.length; i++) {
        let index = arr.indexOf(arguments[i]);
        if (index > -1) arr.splice(index,1);
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
