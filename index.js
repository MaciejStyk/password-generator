let chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "Ee",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  ":",
  ";",
  "'",
  "|",
  "?",
  "/",
];

let password = "";

let password1 = document.getElementById("one");
let password2 = document.getElementById("two");
let password3 = document.getElementById("three");
let password4 = document.getElementById("four");

function randomValue() {
  return Math.floor(Math.random() * chars.length);
}

function generatePassword() {
  password = "";
  for (let i = 0; i < 12; i++) {
    password += chars[randomValue()];
  }
}

function generateAllPasswords() {
  const boxes = document.querySelectorAll(".boxes");
  boxes.forEach((box) => {
    box.style.background = "#273549";
  });

  document.documentElement.style.setProperty("--visibility", 1);

  generatePassword();
  password1.value = password;
  generatePassword();
  password2.value = password;
  generatePassword();
  password3.value = password;
  generatePassword();
  password4.value = password;
}

function copyToClipboard1() {
  password1.select();
  password1.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(password1.value);

  let tooltip = document.getElementById("myTooltip1");
  tooltip.innerHTML = "Copied: " + password1.value;
}

function outFunc1() {
  let tooltip = document.getElementById("myTooltip1");
  tooltip.innerHTML = "Copy to clipboard";
}

function copyToClipboard2() {
  password2.select();
  password2.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(password2.value);

  let tooltip = document.getElementById("myTooltip2");
  tooltip.innerHTML = "Copied: " + password2.value;
}

function outFunc2() {
  let tooltip = document.getElementById("myTooltip2");
  tooltip.innerHTML = "Copy to clipboard";
}

function copyToClipboard3() {
  password3.select();
  password3.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(password3.value);

  let tooltip = document.getElementById("myTooltip3");
  tooltip.innerHTML = "Copied: " + password3.value;
}

function outFunc3() {
  let tooltip = document.getElementById("myTooltip3");
  tooltip.innerHTML = "Copy to clipboard";
}

function copyToClipboard4() {
  password4.select();
  password4.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(password4.value);

  let tooltip = document.getElementById("myTooltip4");
  tooltip.innerHTML = "Copied: " + password4.value;
}

function outFunc4() {
  let tooltip = document.getElementById("myTooltip4");
  tooltip.innerHTML = "Copy to clipboard";
}
