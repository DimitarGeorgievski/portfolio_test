const pozadina = document.querySelector('.pozadina');
const boxIsh = document.querySelector('.box-ish');
const krug = document.querySelector('.krug');
const naslov = document.querySelector('.naslov');
const dolgoto = document.querySelector('.dolgoto');
const kontaktBox = document.querySelector('.kontakt-box');
const ime = document.querySelector('.ime');
const input = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const kopce = document.querySelector('button');
const button = document.querySelector("#refresh-button");
function handleRefresh() {
  window.location.reload();
  window.scrollTo(0, 0);
}

button.addEventListener("click", handleRefresh);
pozadina.style.backgroundImage = 'url("background-image.jpg")';
boxIsh.style.backgroundColor = '#fff';
krug.style.backgroundColor = '#000';
naslov.style.fontSize = '24px';
dolgoto.style.color = '#555';
kontaktBox.style.backgroundColor = '#f7f7f7';
ime.style.textTransform = 'uppercase';
input.forEach(input => input.style.border = 'none');
textarea.style.border = 'none';
kopce.style.backgroundColor = '#000';
kopce.style.color = '#fff';