function calculateAverage(...numbers) {
    var sum = numbers.reduce((total, num) => total + num, 0);
    var average = sum / numbers.length;
    return average;
}
console.log(calculateAverage(9, 8, 6, 3));


function dataType(data) {
    console.log(typeof data);
}
dataType(2435);
dataType(null);