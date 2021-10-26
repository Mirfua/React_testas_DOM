//------------------------------------------------------------------------- //
// 1. Atskiri elementai
//------------------------------------------------------------------------- //

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

//------------------------------------------------------------------------- //


//------------------------------------------------------------------------- //
//2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//------------------------------------------------------------------------- //

//a. Suskaičiuoti kiek yra h2 tagų;
console.log('Kiek yra h2 tagu: ', document.querySelectorAll('h2').length); 
    
//b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first 
console.log('Kiek h2 be first klases: ', document.querySelectorAll('h2').length - document.querySelectorAll('h2.first').length);

//c. Visus h2 tagus nuspalvinti šviesiai mėlynai  
let h2Tagai = document.querySelectorAll('h2')

h2Tagai.forEach((e) => {
    e.style.color = "lightblue"
});
console.log(h2Tagai);

//d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
let h2Price = document.querySelectorAll('div.price > h2')

h2Price.forEach((e) => {
    e.classList.add("price-tag")
});
console.log(h2Price);

//e. Pabraukti visus tagus su klase new;
let newUnderline = document.querySelectorAll('.new');

newUnderline.forEach(function (element) {
    element.style.textDecoration = 'underline'
});
console.log(newUnderline);

//f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
console.log("Visos gyvunu kategorijos: ", document.querySelectorAll("ul").length);

const zirafos = [];

document.querySelectorAll("li").forEach((e) => {
  if (e.textContent.search("Žirafa") >= 0) zirafos.push(e.textContent);
});
console.log("Is viso zirafu yra: ", zirafos.length);
console.log("Zirafu tipai:");
console.log(zirafos);

// g.Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

let ulStyle = document.querySelectorAll('ul');

ulStyle.forEach(function (x) {
    x.style.border = '1px solid red'
})

ulStyle.forEach(function (x) {
    x.style.padding = '15px 50px';
})
console.log(ulStyle);

// h.Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
let newAnimals = document.querySelectorAll('.new').length;

console.log('Nauji gyvunai su klase ".new" yra: ', newAnimals);

// i.Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;




//------------------------------------------------------------------------- //
//------------------------------------------------------------------------- //