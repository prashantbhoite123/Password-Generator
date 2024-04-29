const userVal = document.querySelector(".userVal");
const generteCol = document.querySelector("button");
const allinput = document.querySelectorAll("input");
const copyBtn = document.querySelector(".copyBtn");
const newInputs = Array.from(allinput);

let speech = new SpeechSynthesisUtterance();
let key = "";
newInputs.forEach((input) => {
  input.addEventListener("click", (inval) => {
    genraePassword(inval);
  });
});

function genraePassword(e) {
  e.target.innerHTML = "Change Password";
  const sym = `a%bc!d!e*fh%34i%34$j%3434k*lm*n$#`;
  const str = `abcdefg563hij3kl45mno35pqrstuvwxyz`;
  lowerString = "";
  SymbolString = "";
  for (let i = 0; i < 8; i++) {
    const lowerran = Math.floor(Math.random() * 8 + 1);
    const symbol = Math.floor(Math.random() * 8 + 1);
    lowerString += str[lowerran];
    SymbolString += sym[symbol];
  }
  capital = lowerString.toUpperCase();
  key = e.target.id;
}

generteCol.addEventListener("click", () => {
  // console.log(userVal.innerHTM);
  if (key == "numberChe") {
    userVal.innerHTML = `${Math.floor(Math.random() * 99999999 + 10000000)}`;
    speech.text = "number password is generated";
    // console.log(userVal.innerHTML);
  } else if (key == "lowerChe") {
    userVal.innerHTML = `${lowerString}`;
    speech.text = "lowercase password is generated";
    // console.log(userVal.innerHTML);
  } else if (key == "UpperChe") {
    userVal.innerHTML = `${capital}`;
    speech.text = "upperCase password is generated";
    // console.log(userVal.innerHTML);
  } else {
    userVal.innerHTML = ` ${SymbolString}`;
    speech.text = "symbol password is generated";
  }
  window.speechSynthesis.speak(speech);

  console.log(userVal.innerHTML);
  copyBtn.addEventListener("click", (e) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = " your password is copyed";
    window.speechSynthesis.speak(speech);
    copyBtn.innerHTML === `<i class="fa-solid fa-copy"></i>`
      ? (copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`)
      : (copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`);
    navigator.clipboard.writeText(userVal.innerHTML);
  });
});

// copyBtn.addEventListener("click", (e) => {
//   const speech = new SpeechSynthesisUtterance();
//   speech.text = " your password is copyed";
//   window.speechSynthesis.speak(speech);
//   copyBtn.innerHTML === `<i class="fa-solid fa-copy"></i>`
//     ? (copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`)
//     : (copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`);
// navigator.clipboard.writeText(color);
// });
