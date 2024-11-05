const objekti = {avain: "arvo", ikä: 123, videotykki: "toimii"};

const lista = ["asdf", "asdfg", 1234];

const nimi = "juha"//prompt("Anna nimi");


console.log(nimi);
console.log(nimi, "Hei maailma, example.js puhuu", lista, objekti);
console.log(lista);

const nimenSisältö2 = `Hei, ${nimi}!`

// muita tapoja luoda merkkijonoja ja merkkijonoyhdistelmiä
// const nimenSisältö1 = "Hei, " + nimi + "!"
// const kolmas = 'yksinkertaiset hipsut, ' + nimi + '!'
const neljäs = String(1234)
const viides = (1234).toString()

//document.querySelector("#nimi").innerHTML = nimenSisältö2;

// näin voidaan hakea monta saman selectorin takaa löytyvää elementtiä
document
  .querySelectorAll("p")
  .forEach((element) =>
    element.innerHTML = 'haloo'
)

// Array(3).fill("Hello").join(" ")
// sama kuin pythonin
// "Hello" * 3

