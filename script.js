const country="India";
console.log(country);

const continent="Asia";
console.log(continent);

let population="131001" ;
console.log(population);

const username='Bhuvana';
console.log(typeof username);

const city='Coimbatore';
console.log(typeof city);  


let language="Tamil";
console.log(typeof language)

const island=false;
console.log(island);


console.log(population/2);
console.log(population+1);
console.log(population);
console.log(population >6);
console.log(population<33); 

const description1=
country+
' is in ' +
continent +
'and its ' +
population+
' million people speak '+
language;
console.log(description1);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;




const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);



const description = `${country} is in  ${continent} and its ${population}million people speak ${language}`;




if (population < 33) {
    console.log(`${country}'s population is above average`);
    } else {
    console.log(
    `${country}'s population is ${33 - population} million
    below average`,
    );
    }

// string operators
//console.log(0+6);

//console.log(0-6);

//console.log(0*6);

//console.log(0/6);

//console.log(0**6);

//console.log(0%6);

//let firstname="Bhuvana";
//let lastname="bhuvi";

//const fullname= firstname+''+lastname;

//console.log(fullname);

//comparison operators

//console.log(6>5);
//console.log(6<5);

//console.log(6<=5);
//console.log(6>=5);

//console.log(6==5);
//console.log(6!=5);

//false && false-false

//let result=4>3&& 10<12;
//result=4>3&&10>12;
//result=4>3||10<12;
//result=4>3||10>12;
//result=!(4>3);
//result=!(4<3);
//result=!false;
//result=!(4>3 && 10<12);
//result=!(4<3 && 10>12);
//result=!(4***'4');

