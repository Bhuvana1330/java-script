
//values and variables

// let country = 'Portugal';
// let continent = 'Europe';
// let population = 10;
// console.log(country);
// console.log(continent);
// console.log(population);


//Data Types

// const country="India";
// console.log(country);

// const continent="Asia";
// console.log(continent);

// let population="131001" ;
// console.log(population);

// const username='Bhuvana';
// console.log(typeof username);

// const city='Coimbatore';
// console.log(typeof city);  

//let const and var 

// let language="Tamil";
// console.log(typeof language)

// const island=false;
// console.log(island);

//Basic Operators

// console.log(population/2);
// console.log(population+1);
// console.log(population);
// console.log(population >6);
// console.log(population<33); 

// const description1=
// country+
// ' is in ' +
// continent +
// 'and its ' +
// population+
// ' million people speak '+
// language;
// console.log(description1);

//challenge 1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;




// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

//strings and template literals

//  const description = `${country} is in  ${continent} and its 
// ${population}million people speak ${language}`;


// taking decisions: if/else statements

// if (population < 33) {
//     console.log(`${country}'s population is above average`);
//     } else {
//     console.log(
//     `${country}'s population is ${33 - population} million
//     below average`,
//     );
//     } 

//challenge 2



// Type conversion and coercion

// console.log('9' - '5'); 
// console.log('19' - '13' + '17'); 
// console.log('19' - '13' + 17); 
// console.log('123' < 57); 
// console.log(5 + 6 + '4' + 9 - 4 - 2); 

//Equality Operators == vs===

// const numNeighbours = prompt(
//     'How many neighbour countries does your country have?',
//     );
//     // LATER : This helps us prevent bugs
//     const numNeighbours = Number(
//     prompt('How many neighbour countries does your country
//     have?'),
//     );
//     if (numNeighbours === 1) {
//     console.log('Only 1 border!');
//     } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
//     } else {
//     console.log('No borders');

    // Logical operators

//     if (language === 'english' && population < 50 && !isIsland)
// {
// console.log(`You should live in ${country} :)`);
// } else {
// console.log(`${country} does not meet your criteria :(`);
// }

//Coding Challenge #3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy ');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy ');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy ');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy ');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy!');
// } else {
//     console.log('No one wins the trophy ');
// }

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//     case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//     case 'english':
//     console.log('3rd place');
//     break;
//     case 'hindi':
//     console.log('Number 4');
//     break;
//     case 'arabic':
//     console.log('5th most spoken language');
//     break;
//     default:
//     console.log('Great language too :D');
//     }


    //challenge #4

    // const bill = 430;
    // const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



//function
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and
//     its capital city is ${capitalCity}`;
//     }
//     const descPortugal = describeCountry('Portugal', 10,
//     'Lisbon');
//     const descGermany = describeCountry('Germany', 83,
//     'Berlin');
//     const descFinland = describeCountry('Finland', 6,
//     'Helsinki');
//     console.log(descPortugal);
//     console.log(descGermany);
//     console.log (descFinland);

//function Declaration vs.expression
    // function percentageOfWorld1(population) {
    //     return (population / 7900) * 100;
    //     }
    //     const percentageOfWorld2 = function (population) {
    //     return (population / 7900) * 100;
    //     };
    //     const percPortugal1 = percentageOfWorld1(10);
    //     const percChina1 = percentageOfWorld1(14);
    //     const percUSA1 = percentageOfWorld1(33);
    //     console.log(percPortugal1);
    //     console.log(percChina1);
    //     console.log(percUSA1);

        //arrow function
//         const percentageOfWorld3 = population => (population / 7900)
// * 100;
// const percPortugal3 = percentageOfWorld3(10);
// const percChina3 = percentageOfWorld3(13);
// const percUSA3 = percentageOfWorld3(30);
// console.log(percPortugal3);
// console.log(percChina3);
// console.log(percUSA3);


//function calling other function

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million
//     people, which is about ${percentage}% of the world.`;
//     console.log(description);
//     };
//     describePopulation('Portugal', 13);
//     describePopulation('China', 30);

    //chanllenge 5

//     const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins wins ${avgDolphins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log(`No one wins!`);
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// const calcAverage1 = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// const scoreDolphins1 = calcAverage1(85, 54, 41);
// const scoreKoalas1 = calcAverage1(23, 34, 27);

// function checkWinner1(avgDolhins1, avgKoalas1) {
//   if (avgDolhins1 >= avgKoalas1 * 2) {
//     console.log(`Dolphins wins (${avgdolphins1} vs ${avgKoalas1}).`);
//   } else if (avgKoalas1 >= avgDolhins1 * 2) {
//     console.log(`Koalas win (${avgKoalas1} vs ${avgDolhins1}).`);
//   } else {
//     console.log(`No one wins!`);
//   }
// }


   // introduction to arrays

//     const populations = [10, 1441, 332, 83];
// console.log(populations.length === 4);
// const percentages = [
// percentageOfWorld1(populations[0]),
// percentageOfWorld1(populations[1]),
// percentageOfWorld1(populations[2]),
// percentageOfWorld1(populations[3])
// ];
// console.log(percentages);


//basic array operation (methods)

// const neighbours = ['India','Russia','Sweden'];
// neighbours.push('Utopia');
// console.log( neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes('China'));{
// console.log('probably not a central European country:D');
// }
// neighbours[neighbours.indexOf('India')] = 'Republic of India';
// console.log(neighbours);

//challenge 6

// function calcTip(bill){
//     if (bill >= 50 && bill <=300){
//         return bill * 0.15;
// }else{
//     return bill *0.2;
//     }
// }

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//     console.log('bills:',bills);
//     console.log('tips:',tips);

//     const totals =[];
//     totals.push(bills[0]+ tips[0]);
//     totals.push(bills[1]+ tips[1]);
//     totals.push(bills[2]+ tips[2]);

//     console.log('totals:',totals);


    //introduction to objects

//     const myCountry =  {
//         country :'India',
//         captial :'New delhi',
//         language :'Hindi',
//         population :13,
//         neighbours:['China','Nepal','Bangladesh']
//     };
// console.log(myCountry.country);
// console.log(myCountry.captial);
// console.log(myCountry.language);
// console.log(myCountry.population);
// console.log(myCountry.neighbours);

//DOT vs BRACKET Notation

// console.log(
//     `${myCountry.country} has ${myCountry.population} million
//     ${myCountry.language}-speaking people,
//     ${myCountry.neighbours.length} neighbouring countries and
//     a capital called ${myCountry.capital}.`
//     );
//     myCountry.population += 4;
//     console.log(myCountry.population);
//     myCountry['population'] -= 4;
//     console.log(myCountry.population);


//Object Methods

// const myCountrytwo = {
//     country: 'USA',
//     capital: 'Washington',
//     language: 'English',
//     population: 13,
//     neighbours: ['Canda', 'Mexico', 'Russia'],
//     describe: function () {
//     console.log(
//     `${this.country} has ${this.population} million
//     ${this.language}-speaking people,
//     ${this.neighbours.length} neighbouring countries and a
//     capital called ${this.capital}.`
//     );
//     },
//     checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true :
//     false;
//     }
//     };
//     myCountrytwo.describe();
//     myCountrytwo.checkIsland();
//     console.log(myCountrytwo);
    

    //challenge 8
    // const calcTip = function (bill) {
    //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    //     };
    //     const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    //     const tips = [];
    //     const totals = [];
    //     for (let i = 0; i < bills.length; i++) {
    //     const tip = calcTip(bills[i]);
    //     tips.push(tip);
    //     totals.push(tip + bills[i]);
    //     }
    //     console.log(bills, tips, totals);
    //     const calcAverage = function (arr) {
    //     let sum = 0;
    //     for (let i = 0; i < arr.length; i++) {
        
    //     sum += arr[i];
    //     }
    //     return sum / arr.length;
    //     };
    //     console.log(calcAverage([2,3,7]));
    //     console.log(calcAverage(totals));
    //     console.log(calcAverage(tips));

        //for loops
        // for (let i = 1; i <= 50; i++) {
        //     console.log(`Voter number ${i} is currently voting`);
        //   }
          
        
// looping arrays,braking and continuing
// const populations = [1441, 1393, 331, 272];
// const percentages2 = [];

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// for (let i = 0; i < populations.length; i++) {
//   const percentage = percentageOfWorld1(populations[i]);
//   percentages2.push(percentage);
// }

// console.log(percentages2);


        
        //looping backward and loops in loops
        // const listOfNeighbours = [
        //     ['Canada', 'Mexico'],
        //     ['Spain'],
        //     ['Norway', 'Sweden', 'Russia']
        // ];
        
        // for (let i = 0; i < listOfNeighbours[0].length; i++) {
        //     for (let y = 0; y < listOfNeighbours.length; y++) {
        //         console.log(` ${listOfNeighbours[y]}`);
        //     }
        // }
        
    