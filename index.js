// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    let firstTwoDrivers = drivers.slice(0,2);
    return firstTwoDrivers;
}

function returnLastTwoDrivers() {
    const firstTwoDrivers =drivers.slice(drivers.length-2, drivers.length);
    return firstTwoDrivers;
}

const selectingDrivers = 
[
     returnFirstTwoDrivers,
     returnLastTwoDrivers,
]
 


function createFareMultiplier (x) {
    return (x) => {return x*x}
}

const fareMultiplier = (createFareMultiplier())



function fareDoubler(x) {
    let h = 2*x;
    return h;
}

function fareTripler(x) {
let z = 3*x;
return z;
}


function selectDifferentDrivers(arrayOfDrivers, func) {
    return func (arrayOfDrivers)
}