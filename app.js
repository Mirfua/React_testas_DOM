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



//2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
    
//a. Suskaičiuoti kiek yra h2 tagų;
console.log('Kiek yra h2 tagu: ', document.querySelectorAll('h2').length); 
    
//b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first 
//c. Visus h2 tagus nuspalvinti šviesiai mėlynai  
//d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
//e. Pabraukti visus tagus su klase new;
//f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
// g.Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
// h.Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
// i.Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;