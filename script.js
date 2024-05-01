const userVal = document.querySelector(".userVal");
const generteCol = document.querySelector("button");
const symbolCheck = document.querySelector("#SymbolCheck");
const numberCheck = document.querySelector("#numberCheck");
const copyBtn = document.querySelector(".fa-copy");
const rangeLabel = document.querySelector("#rangeLabel");

function genraePassword() {
  const range = document.querySelector("#range");
  rangeLabel.innerHTML = `Length ${range.value}`;
  const length = range.value;
  let pass = "";
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersAllowed = numberCheck.checked;
  const symbolAllowed = symbolCheck.checked;
  if (numbersAllowed) str += "1234567890";
  if (symbolAllowed) str += "!@#$%^&*";
  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  userVal.innerHTML = pass;
}

generteCol.addEventListener("click", () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "your password Was Generated";
    speechSynthesis.speak(speech);
  console.log();
  genraePassword();
  copyBtn.addEventListener(
    "click",
    (e) => {
      const speech = new SpeechSynthesisUtterance();
      speech.text = "your password is copied";
      speechSynthesis.speak(speech);
      console.log(e.target.classList);
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fa-solid");
      navigator.clipboard.writeText(userVal.innerHTML);
    },
    { once: true }
  );
  copyBtn.classList.remove("fa-solid");
  copyBtn.classList.add("fa-regular");
});
