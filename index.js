// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    
    if (number < 42) {
        
        return 42 - number  
    } else {
        return number - 42
    }
}

function distanceFromHqInFeet(number) {

    return distanceFromHqInBlocks(number) * 264
}

function distanceTravelledInFeet(num1, num2) {
    
    if (num1-num2) {
        return Math.abs(num1-num2) * 264
    } 
    
}

// function calculatesFarePrice(num1, num2) {
//     if (distanceTravelledInFeet(num1,num2) <= 400) {
//         return 0
//     } else if (distanceTravelledInFeet(num1,num2) >= 400) {
//         return 2.56
//     } else if (distanceTravelledInFeet(num1, num2) >= 2000) {
//         return 25
//     } else if (distanceTravelledInFeet(num1,num2) < 2500) {
//         return 'cannot travel that far'
//     }
    
// }

function calculatesFarePrice(num1,num2){
    let distance = distanceTravelledInFeet(num1,num2);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);

    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}
