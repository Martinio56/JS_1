//Oppgave 1----------------------------------------------------------------------------------------------------

const tall1 = window.prompt('Skriv et tall')

if (tall1 > 0) {
    console.log('Tallet er Positivt');
} else if (tall1 < 0) {
    console.log('Tallet er Negativt');
} else {
    console.log('Tallet er Null');
}

//Oppgave 2----------------------------------------------------------------------------------------------------

// const tall1 = window.prompt('Skriv et tall')

// let tall2 = tall1 % 2

// if (tall2 == 0) {
//     console.log(`${tall1} er partall`);
// } else if (tall2 == 1) {
//     console.log(`${tall1} er oddetall`);
// }

//Oppgave 3----------------------------------------------------------------------------------------------------

// const poeng = window.prompt('Hvor mange poeng fikk du på Eksamen?')

// if (poeng >= 50) {
//     console.log('Gratulerer du har bestått eksamen!!');
// } else if (poeng < 50) {
//     console.log('Sorry, du besto ikke eksamen.');
// }

//Oppgave 4----------------------------------------------------------------------------------------------------

// const poeng = window.prompt('Hvor mange poeng fikk du på Eksamen?')

// if (poeng > 100) {
//     console.log('Det er ikke mulig å få mere enn 100');
// } else if (poeng >= 50) {
//     console.log('Gratulerer, du har bestått eksamen!!');
// } else if (poeng < 0) {
//     console.log('Hvordan i helvete fikk du minus poeng på eksamen!!');
// } else if (poeng < 50) {
//     console.log('Sorry, du besto ikke eksamen.');
// }

//Oppgave 5----------------------------------------------------------------------------------------------------

// const tall = window.prompt('Skriv et tall fra 1-7')

// if (tall == 1) {
//     console.log('Det er Mandag');
// } else if (tall == 2) {
//     console.log('Det er Tirsdag');
// } else if (tall == 3) {
//     console.log('Det er Onsdag');
// } else if (tall == 4) {
//     console.log('Det er Torsdag');
// } else if (tall == 5) {
//     console.log('Det er Fredag');
// } else if (tall == 6) {
//     console.log('Det er Lørdag');
// } else if (tall == 7) {
//     console.log('Det er Søndag');
// } else if (tall > 7) {
//     console.log('Det er bare 7 dager i uken');
// } else {
//     console.log('Jeg sa skriv et tall');
// }

//Oppgave 6----------------------------------------------------------------------------------------------------

// const tall = window.prompt('Skriv et tall fra 1-7')

// switch (tall) {
//     case '1':
//         console.log('Det er Mandag');
//         break;
//     case '2':
//         console.log('Det er Tirsdag');
//         break;
//     case '3':
//         console.log('Det er Onsdag');
//         break;    
//     case '4':
//         console.log('Det er Torsdag');
//         break;        
//     case '5':
//         console.log('Det er Fredag');
//         break;
//     case '6':
//         console.log('Det er Lørdag');
//         break;    
//     case '7':
//         console.log('Det er Søndag');
//         break;
//     default:
//         console.log('Jeg sa skriv et tall fra 1-7');
// }

//Oppgave 7----------------------------------------------------------------------------------------------------
 
// const tall1 = Number(window.prompt('Skriv et tall'))
// const tall2 = Number(window.prompt('Skriv enda et tall'))
// const tegn = window.prompt("Skriv +, -, * eller /")

// switch (tegn) {
//     case "+":
//         console.log(tall1+tall2);
//         break;
//     case '-':
//         console.log(tall1-tall2);
//         break;
//     case '*':
//         console.log(tall1*tall2);
//         break;
//     case '/':
//         console.log(tall1/tall2);
//         break;        
//     default:
//         console.log('Et annet tegn ble brukt');
// }

//Oppgave 8----------------------------------------------------------------------------------------------------

// const a = window.prompt('Skriv et tall')
// const b = window.prompt('Skrive enda et tall')

// if (a > b) {
//     console.log(`a = ${a} er større enn b = ${b}`);
// } else if (a < b) {
//     console.log(`a = ${a} er mindre enn b = ${b}`);
// } else if (a == b) {
//     console.log(`a = ${a} er der samme som b = ${b}`);
// }

//Oppgave 9----------------------------------------------------------------------------------------------------

// const tall1 = Number(window.prompt('Skriv hvor mange poeng du fikk på den første eksamen'))
// const tall2 = Number(window.prompt('Skriv hvor mange poeng du fikk på den andre eksamen'))

// const tall3 = (tall1+tall2)/2

// if (tall3 >= 50) {
//     console.log('Gratulerer Du har bestått!!');
// } else {
//     console.log('Sorry, du besto ikke.');
// }

//Oppgave 10---------------------------------------------------------------------------------------------------

// const a = window.prompt('Skriv et tall')

// if (a%3 == 0) {
//     console.log("Tallet kan deles i 3");
// } else {
//     console.log("Tallet kan ikke deles i 3");
// }

//Oppgave 11---------------------------------------------------------------------------------------------------

// const a = window.prompt('Skriv et tall')

// if (a%5 == 0) {
//     console.log('Tallet kan deles i 5');
// } else {
//     console.log('Tallet kan ikke deles i 5');
// }

//Oppgave 12---------------------------------------------------------------------------------------------------

// const a = window.prompt('Skriv et tall')

// if (a%3 == 0 && a%5 ==0) {
//     console.log('Tallet kan deles i 3 og 5');
// } else {
//     console.log('Tallet kan ikke deles i 3 og 5');
// }

//Oppgave 13---------------------------------------------------------------------------------------------------

// const a = window.prompt('Skriv et tall')

// if (a%3 == 0 && a%5 ==0) {
//     console.log('Tallet kan deles i 3 og 5');
// } else if (a%3 == 0) {
//     console.log('Tallet kan deles i 3');
// } else if (a%5 == 0) {
//     console.log('Tallet kan deles i 5');
// } else {
//     console.log('Tallet kan ikke deles i 3 eller 5');
// }

//Oppgave 14---------------------------------------------------------------------------------------------------

// const tall1 = window.prompt('Skriv et tall')
// const tall2 = window.prompt('Skriv enda et tall')
// const tall3 = window.prompt('Skriv et tredje tall')

//                    // if (tall1 < tall2) {
//                    //     if (tall1 < tall3) {
//                    //     console.log(`tall1 (${tall1}) er minst`)
//                    //     }
//                    // } else if (tall2 < tall1) {
//                    //     if (tall2 < tall3) {
// Første gamle koden //         console.log(`tall2 (${tall2}) er minst`);
//                    //     }
//                    // } else if (tall3 < tall1) {
//                    //     if (tall3 < tall2) {
//                    //         console.log(`tall3 (${tall3}) er minst`);
//                    //     }
//                    // }

// if (tall1 < tall2 && tall1 < tall3) {
//     console.log(`Tall 1 (${tall1}) er minst`);
// } else if (tall2 < tall1 && tall2 < tall3) {
//     console.log(`Tall 2 (${tall2}) er minst`);
// } else if (tall3 < tall1 && tall3 < tall2) {
//     console.log(`Tall 3 (${tall3}) er minst`);
// }

//Oppgave 15---------------------------------------------------------------------------------------------------

// const bokstav = window.prompt('Skriv en bokstav')

// switch (bokstav) {
//     case 'a':
//         console.log('a er en vokal');
//         break;
//     case 'e':
//         console.log('e er en vokal');
//         break;
//     case 'i':
//         console.log('i er en vokal');
//         break;
//     case 'o':
//         console.log('o er en vokal');
//         break;
//     case 'u':
//         console.log('u er en vokal');
//         break;
//     case 'y':
//         console.log('y er en vokal');
//         break;
//     case 'æ':
//         console.log('æ er en vokal');   
//         break;     
//     case 'ø':
//         console.log('ø er en vokal');
//         break;
//     case 'å':
//         console.log('å er en vokal'); 
//         break;       
//     default:
//         console.log('Dette er ikke en vokal');
// }

//Oppgave 16---------------------------------------------------------------------------------------------------

// const farge = window.prompt('Skriv en farge')

// switch (farge) {
//     case 'rød':
//         console.log('%crød','color:red;');
//         break;
//     case 'oransj':
//         console.log('%coransj','color:orange;');
//         break;
//     case 'gul':
//         console.log('%cgul','color:yellow;');
//         break;
//     case 'grønn':
//         console.log('%cgrønn','color:green;');
//         break;
//     case 'blå':
//         console.log('%cblå','color:blue;');
//         break;
//     case 'lilla':  
//         console.log('%clilla','color:purple;');  
//         break;        
//     default:
//         console.log('Har ikke den fargen');
// }

//-------------------------------------------------------------------------------------------------------------