const outPass = document.querySelector("#outPass");
const copyButton = document.querySelector("#buttonCopy");
const outPassLength = document.querySelector(".span-pass-length");
const btnMinus = document.querySelector(".minus-button");
const btnPlus = document.querySelector(".plus-button");
const passLengthRange = document.querySelector("#passLength");
const chkUpperCase = document.querySelector("#chkUpperCase");
const chkLowerCase = document.querySelector("#chkLowerCase");
const chkNumbers = document.querySelector("#chkNumbers");
const chkSymbols = document.querySelector("#chkSymbols");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];
const characters = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCaseCharacters = characters.map((item) => String.fromCharCode(item));
const upperCaseCharacters = lowerCaseCharacters.map((item) =>
  item.toUpperCase()
);

btnMinus.addEventListener("click", () => {
  passLengthRange.value = Number(passLengthRange.value) - 1;
  outPassLength.innerHTML = passLengthRange.value;
  generatePassword(
    chkLowerCase.checked,
    chkUpperCase.checked,
    chkNumbers.checked,
    chkSymbols.checked,
    passLengthRange.value
  );
});

btnPlus.addEventListener("click", () => {
  passLengthRange.value = Number(passLengthRange.value) + 1;
  outPassLength.innerHTML = passLengthRange.value;
  generatePassword(
    chkLowerCase.checked,
    chkUpperCase.checked,
    chkNumbers.checked,
    chkSymbols.checked,
    passLengthRange.value
  );
});

passLengthRange.addEventListener("input", () => {
  outPassLength.innerHTML = passLengthRange.value;
  generatePassword(
    chkLowerCase.checked,
    chkUpperCase.checked,
    chkNumbers.checked,
    chkSymbols.checked,
    passLengthRange.value
  );
});

function generatePassword(
  hasLowerCase,
  hasUpperCase,
  hasNumbers,
  hasSymbols,
  length
) {
  const newArray = [
    ...(hasNumbers ? numbers : []),
    ...(hasLowerCase ? lowerCaseCharacters : []),
    ...(hasUpperCase ? upperCaseCharacters : []),
    ...(hasSymbols ? symbols : []),
  ];

  if (newArray.length === 0) return;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    password += newArray[randomIndex];
  }

  outPass.value = password;
}

copyButton.addEventListener("click", () => {
  const copy = outPass.value;
  navigator.clipboard.writeText(copy);
});
