// Cheking if a number is big 

/*const bigNumber = function(number) {
        return number > 100;
};

console.log(bigNumber(150));
// function produces. Gebruikt geen console.log*/


//Bouncer at a club

/*const bouncer = function(maxNumber, currentNumber, age) {
    if (age <18) {
        return "De club is voor volwassenen";
    }
    if (currentNumber >= maxNumber) {
        return "Het is te druk, kom later terug";
    }
    else {
        return "come in";
    }
};

console.log(bouncer(2000, 2010, 18))*/

// Drie manieren om functions te schrijven 
//2 cijfers, x zichzelf, sum x , 


// function declartion

function add1 (number1, number2) {
    return number1 * number2;
}
console.log(add1(2, 4));


// function expression 

const add2 = function (number1, number2) {
    return number1 * number2;
};
console.log(add2(2, 4));


// function arrow 

const add3 = (number1, number2) => {
    return number1 * number2;
};
console.log(add3(2,4));