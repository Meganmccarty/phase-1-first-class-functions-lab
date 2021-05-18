const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (drivers) => { return drivers.slice(0, 2) };

//console.log(returnFirstTwoDrivers(drivers));
//console.log(drivers);

const returnLastTwoDrivers = (drivers) => { return drivers.slice(2) };

//console.log(returnLastTwoDrivers(drivers));
//console.log(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    return (value) => { return multiplier * value };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driversArray, driverFunction) => { return driverFunction(driversArray) };

//console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));