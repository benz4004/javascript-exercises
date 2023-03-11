const findTheOldest = function (people) {

    return people.reduce((oldest, person) => {
        return        (((oldest.yearOfDeath ? oldest.yearOfDeath : new Date().getFullYear()) - oldest.yearOfBirth) >
            ((oldest.yearOfDeath ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth))
            ? oldest : person
    });
};


// Do not edit below this line
module.exports = findTheOldest;
