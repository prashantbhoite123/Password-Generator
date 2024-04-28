const userVal = document.querySelector(".userVal");
const generteCol = document.querySelector("button");
const allinput = document.querySelectorAll("input");
const copyBtn = document.querySelector(".copyBtn");
const newInputs = Array.from(allinput);

function checkval(inval) {
  generteCol.addEventListener("click", (e) => {
    e.target.innerHTML = "Change Password";
    const sym = `a%bc!d!e*fh%34i%34$j%3434k*lm*n$#`;
    const str = `abcdefg563hij3kl45mno35pqrstuvwxyz`;
    let lowerString = "";
    
    let SymbolString = "";

    for (let i = 0; i < 8; i++) {
      const lowerran = Math.floor(Math.random() * 8 + 1);
      const symbol = Math.floor(Math.random() * 8 + 1);
      lowerString += str[lowerran];
      SymbolString += sym[symbol];
    }
    let capital = lowerString.toUpperCase();
    const speech = new SpeechSynthesisUtterance();
    speech.text = "number password is generated";
    window.speechSynthesis.speak(speech);
    if (inval.target.id === "numberChe") {
      speech.text = " Number Paasword Generated";
      userVal.innerHTML = `<div>${Math.floor(
        Math.random() * 99999999 + 10000000
      )}</div>`;
      copyBtn.innerHTML = ` <i class="fa-regular fa-copy"></i>`;
    } else if (inval.target.id === "lowerChe") {
      speech.text = " Lowercase Paasword Generated";
      userVal.innerHTML = `<div>${lowerString}</div>`;
      copyBtn.innerHTML = ` <i class="fa-regular fa-copy"></i>`;
    } else if (inval.target.id === "UpperChe") {
      speech.text = " Uppercase Paasword Generated";
      userVal.innerHTML = `<div>${capital}</div>`;
      copyBtn.innerHTML = ` <i class="fa-regular fa-copy"></i>`;
    } else if (inval.target.id === "SymbolChe") {
      speech.text = " Symbol Paasword Generated";
      userVal.innerHTML = `<div>   ${SymbolString}  </div>`;
      copyBtn.innerHTML = ` <i class="fa-regular fa-copy"></i>`;
    }
  });
}
newInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    checkval(e);
  });
});

copyBtn.addEventListener("click", (e) => {
  console.log("button was click");
  const speech = new SpeechSynthesisUtterance();
  speech.text = " your password is copyed";
  window.speechSynthesis.speak(speech);
  copyBtn.innerHTML === `<i class="fa-solid fa-copy"></i>`
    ? (copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`)
    : (copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`);
});
