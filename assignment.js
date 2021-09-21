// KilometerToMeter

function KilometerToMeter(input) {
    var kilo = input;
    var meter = kilo * 1000;
    return meter;
}
var result1 = KilometerToMeter(12);
console.log(result1);

// budgeCalculator

function budgetCalculator(watchinp, mobileinp, laptopinp) {
    if (watchinp > 0 && mobileinp > 0 && laptopinp > 0) {
        var watch = watchinp * 50;
        var mobile = mobileinp * 100;
        var laptop = laptopinp * 500;
        var resulttemp = watch + mobile + laptop;
        return resulttemp;
    }
    else {
        var warning = "u have to add something";
        return warning;
    }
}
var result2 = budgetCalculator(5, 5, 5);
console.log(result2);

// hotalCost

function hotalCost(days) {
    var daysstore = days;
    var cost = 0;
    if (daysstore <= 10) {
        cost = daysstore * 50;
    }
    else if (daysstore <= 20) {
        var first10 = 10 * 50;
        var remaining = daysstore - 10;
        var first20 = remaining * 100;
        var cost = first10 + first20;
    }
    else {
        var first10 = 10 * 50;
        var first20 = 10 * 100;
        remaining = daysstore - 20;
        restdays = remaining * 20;
        cost = first10 + first20 + restdays;
    }
    return cost;
}
var result3 = hotalCost(33);
console.log(result3);

// megaFriend

function megaFriend(receive) {
    var arr = receive;

    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }

    return longest;
}
var result4 = megaFriend(['Habib','labib','Abdul Kalam Azad']);
console.log(result4);
