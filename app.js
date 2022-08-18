console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
        if (count>0) {
            for(let num = 1; num <= count; num++) {
            if (num % 2 == 1) {
                console.log(num);
        }}
    } else {for (let num = 1; num <= count; num--) {
            if (num % 2 == -1) {
                console.log(num);
            }
        }
        }
    }
    
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge (userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}
checkAge("Kiki", 17);
checkAge("Peanut", 2);

// // Exercise 3 Section 
console.log("EXERCISE 3:\n==========\n");

function locateQuadrant (x,y) {
    if (x>0 && y>0) {
        console.log("Quadrant 1")
    } else if (x<0 && y>0) {
        console.log("Quadrant 2")
    } else if (x<0 && y<0) {
        console.log("Quadrant 3")
    } else if (x>0 && y<0) {
        console.log("Quadrant 4")
    } else if (x == 0 && y != 0){
            console.log("x axis");
    } else if (x != 0 && y == 0) {
        console.log("y axis")
    } else {
        console.log ("Origin")
    }
};
locateQuadrant(1, 1);
locateQuadrant(-56, -12);
locateQuadrant(0, 1);



// // // Exercise 4 Section 
console.log("EXERCISE 4:\n==========\n");

const isValidTriangle = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
};

const determineTriangle = (a, b, c) => {
    let isValid = isValidTriangle(a, b, c);

if (isValid) {
    if (a == b && b == c) {
        console.log("Equilateral");
    } else if (a == b || b == c || a == c) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
} else {
    console.log("Not a valid triangle");
}
}
determineTriangle(5, 4, 3)
determineTriangle(1, 2, 2)
determineTriangle(2, 2, 2)
determineTriangle(4, 2, 3)




// // Exercise 5 Section 
console.log("EXERCISE 5:\n==========\n");

const getUsageFeedback = (planLimit, day, usage) => {
    const cycleLength = 30;
    const projectedAvg = planLimit/ cycleLength;
    const currentAvg = usage / day;
    const projectedUsage = currentAvg * cycleLength;
    const adjustedAvg = (planLimit - usage) / (cycleLength - day);

    if (currentAvg > adjustedAvg) {
        console.log (`${day} days used, ${cycleLength - day} days remaining.
Average daily use: ${currentAvg}GB/day. 
You are Exceeding your average daily use (${projectedAvg} GB/day),
continuing this usage, you'll exceed by ${projectedUsage - planLimit} GB.
To stay below your data plan, use no more than ${adjustedAvg} GB/day.`)

    } else if (currentAvg > adjustedAvg) {
        console.log (`${day} days used, ${cycleLength - day} days remaining.
Average daily use: ${currentAvg}GB/day.
You are UNDER your average daily use (${projectedAvg} GB/day),
continuing this usage, you'll lose out on ${planLimit - projectedUsage} GB.
To use all of your data plan, use on average ${adjustAvg} GB/day.`);
    
    } else { 
        console.log (`${day} days used, ${cycleLength - day} days remaining.
Average daily use: ${currentAvg}GB/day.
You are AT your average daily use (${projectedAvg} GB/day),
continuing this usage, you will exactly use your remaining usage.
To stay below your data plan, keep doing what you're doing.`);
    }
}

getUsageFeedback (100, 15, 56)