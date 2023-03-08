console.log('Eureka')
// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-1_length ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ 

let firstName = "Maik";
let lastName = "Tao";

console.log("firstName-length: ".concat(firstName.length));
console.log("lastName-length: ".concat(lastName.length));
console.log("fullName-length: ".concat((firstName.length + lastName.length)));

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-2_indexOf ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ 

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log("h ".concat(txt.indexOf("h")));
console.log("Earth ".concat(txt.indexOf("Earth")));
console.log("Moon ".concat(txt.indexOf("Moon")));


// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-4_slice ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const A = 'Susi is going to codingschool';

let B = (A.slice(0,4));
let C = (A.slice(5,7));
let D = (A.slice(5,16).concat(" ").concat(A.slice(23,29)));
let E = (A.slice(23,29));
let F = (A.slice(0,7).concat(" ").concat)(A.slice(23,29));

document.querySelector("body h1").innerHTML = document.write(B.concat("<br>").concat(C).concat("<br>").concat(D).concat("<br>").concat(E).concat("<br>").concat(F).concat("<br>").concat("<br>"));

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-5_substring ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const text = 'Susi is back from codingschool';

let G = (text.substring(0,4));
let H = (text.substring(5,7));
let I = (text.substring(24,30));
let J = (text.substring(0,4)).concat(" ").concat(text.substring(5,7)).concat(" ").concat(text.substring(24,30));

document.querySelector("body h1").innerHTML = document.write(G + "<br>" + H + "<br>" + I + "<br>" + J);

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-7_replace ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const teXt = "Sam is good at codingschool";

let K = (teXt.replace("good", "bad").replace("coding", " "));
let L = (teXt.replace("Sam", "Susi").replace("coding", " "));
let M = (teXt.replace("codingschool", "tennis"));


document.querySelector("body h1").innerHTML = document.write("<br>" + "<br>" + K + "<br>" + L + "<br>" + M + "<br>");

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-8_toLowerCase-toUpperCase ≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const texT = "Sam is going to codingschool";

let N = (texT.replace("coding", " ").toUpperCase());
let O = (texT.replace("coding", " ").toLowerCase());
let P = (texT.replace("coding", " ").slice(0,3)).toUpperCase().concat(texT.slice(3,16).toLowerCase().concat(texT.slice(17,22).toUpperCase()));
let Q = (texT.replace("coding", " ").slice(4,15).toUpperCase());
let R = (texT.replace("coding", " "));

document.querySelector("body h1").innerHTML = document.write("<br>" + "<br>" + N + "<br>" + O + "<br>" + P + "<br>" + Q + "<br>" + R + "<br>");

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-9_concat ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and";

let S = (text1.replace("coding", " ")).concat(" ").concat(text3).concat(" to the movie theater.");
let T = (text1.replace("codingschool", "movie theater."));
let U = (text2.concat(" ").concat(text3).concat(" ").concat(text1.replace("coding", " ")).replace("is", "are").concat("."));
let V = (text2.concat(" ").concat(text3).concat(" ").concat(text1.replace("codingschool", "gym")).concat(" ").concat(text3).concat(" to the movie theater."));
let W = (text2.concat(" ").concat(text1.replace("Sam" , " ")).replace("coding", " ")).concat(" ").concat(text3).concat(" to the movie theater.");

document.querySelector("body h1").innerHTML = document.write("<br>".concat("<br>").concat(S).concat("<br>").concat(T).concat("<br>").concat(U).concat("<br>").concat(V).concat("<br>").concat(W).concat("<br>").concat("<br>"));

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-1_template-literals ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const vorName = "Jens";
const nachName = "Kötschau";
const alTer = "35";
const geburtsOrt = "Potsdam";
const koerperGroesse = "1.89m";
const geWicht = "85";
const hoBby = "Fussball spielen";
const computerSpiele = "Horizon Zero Dawn";
const eSsen = "Sußkartoffel-Chili";
const sPort = "Calisthenics";
const modeMarke = "Patagonia";
const jahresZeit = "Herbst";
const urlaubsOrt = "Thailand";

document.querySelector("body h1").innerHTML = document.write(`Mein Name ist ${vorName} ${nachName} und bin ${alTer} Jahre alt, ich bin in ${geburtsOrt} geboren. Meine Größe ist ${koerperGroesse} und ich bin ${geWicht} schwer. Mein Lieblingshobby ist ${hoBby} und ich spiele gerne auf meiner Konsole ${computerSpiele}. Mein Lieblingsessen ist ${eSsen} und als Sport mache ich ${sPort}. Wenn ich mir Klamotten kaufe, kaufe ich von der Marke ${modeMarke}. Meine Lieblingsjahreszeit ist der ${jahresZeit} und ich mache gerne Urlaub in ${urlaubsOrt}. `);

console.log(`Mein Name ist ${vorName} ${nachName} und bin ${alTer} Jahre alt, ich bin in ${geburtsOrt} geboren. Meine Größe ist ${koerperGroesse} und ich bin ${geWicht} schwer. Mein Lieblingshobby ist ${hoBby} und ich spiele gerne auf meiner Konsole ${computerSpiele}. Mein Lieblingsessen ist ${eSsen} und als Sport mache ich ${sPort}. Wenn ich mir Klamotten kaufe, kaufe ich von der Marke ${modeMarke}. Meine Lieblingsjahreszeit ist der ${jahresZeit} und ich mache gerne Urlaub in ${urlaubsOrt}. `);