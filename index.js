const returnFirstTwoDrivers = function(drivers) {
    drivers = drivers.slice(0,2)
    return drivers
}
const returnLastTwoDrivers = function(drivers) {
    drivers = drivers.slice(2,4)
    return drivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => function() {
    return int * 5
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, functions) {
    return functions(arrayOfDrivers)
}