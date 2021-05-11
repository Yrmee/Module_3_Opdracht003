// Deel 1 - Leeftijdsgrens

const age = 17;

if (age >= 18) {
    console.log("This person is 18+! Acces allowed!");
} else if (age < 18) {
    console.log("ERROR! This person is under 18. Acces denied!");
}

// Deel 2 - LadiesNight

const isFemale = true;
const isMale = false;

if (isFemale) {
    console.log("Hey Girl, Welcome to our LadiesNight!");
} else {
    console.log("For Real,Bro?");
}

// Deel 3 - driverStatus

const driverStatus = 'BoB';

if (driverStatus == 'BoB') {
    console.log("Have a safe trip home!");
} else if (driverStatus !== 'BoB') {
    console.log("Uber it is, then!");
}