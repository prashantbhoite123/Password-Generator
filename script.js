const userVal = document.querySelector(".userVal");
const generteCol = document.querySelector("button");
const allinput = document.querySelectorAll("input");
const copyBtn = document.querySelector(".copyBtn");
console.log(copyBtn);

const newInputs = Array.from(allinput);

function checkval(inval) {
  generteCol.addEventListener("click", (e) => {
    e.target.innerHTML = "Change Password";
    const sym = `a%bc!d!e*fh%i%$j%k*lm*n$#`;
    const str = `abcdefghijklmnopqrstuvwxyz`;
    const upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let lowerString = "";
    let SymbolString = "";
    let capital = "";
    for (let i = 0; i < 8; i++) {
      const lowerran = Math.floor(Math.random() * 8 + 1);
      const symbol = Math.floor(Math.random() * 8 + 1);
      const upperVal = Math.floor(Math.random() * 8 + 1);
      capital += upper[upperVal];
      lowerString += str[lowerran];
      SymbolString += sym[symbol];
    }
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Paasword Generated";
    window.speechSynthesis.speak(speech);
    if (inval.target.id === "numberChe") {
      userVal.innerHTML = `<div>${Math.floor(
        Math.random() * 99999999 + 10000000
      )}</div>`;
      copyBtn.innerHTML = ` <i class="fa-regular fa-copy"></i>`;
      speech.text = " Number Paasword Generated";
    } else if (inval.target.id === "lowerChe") {
      userVal.innerHTML = `<div>${lowerString}</div>`;
      copyBtn.innerHTML = ` <i class="fa-regular fa-copy"></i>`;
    } else if (inval.target.id === "UpperChe") {
      userVal.innerHTML = `<div>${capital}</div>`;
      copyBtn.innerHTML = ` <i class="fa-regular fa-copy"></i>`;
    } else if (inval.target.id === "SymbolChe") {
      userVal.innerHTML = `<div>   ${SymbolString}  </div>`;
      copyBtn.innerHTML = ` <i class="fa-regular fa-copy"></i>`;
    }
  });
}

let foundcheked = false;
newInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    checkval(e);
  });
});

copyBtn.addEventListener("click", (e) => {
  console.log("button was click");
  copyBtn.innerHTML === `<i class="fa-solid fa-copy"></i>`
    ? (copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`)
    : (copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`);
});
