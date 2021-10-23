// 1. Atskiri elementai

// a. Tamsiai žaliai nuspalvinti h1 tagą;
document.querySelector('h1').style.color = 'darkgreen';

// b. Tagui i pridėti klasę small;
document.querySelector('i').classList.add('small');

// c. Iš tago h1 pašalinti klasę main;
document.querySelector('h1').classList.remove('main');

// d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
document.querySelector('h1 + h2').classList.add('first');
document.querySelector('h1 + h2').classList.remove('main');

// e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
document.querySelector('h2 > span:first-of-type').style.fontSize = '10px';
document.querySelector('h2 > span:first-of-type').style.color = 'grey';
