"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("app is running");

  document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
  detectUserPreference();
  readUserColorMode();

  const characters = await getData();

  characters.sort(sortByName);

  for (const character of characters) {
    addCharacter(character)
  }

  // forEach works as well:
  // characters.forEach(addCharacter);
}

async function getData() {
  const response = await fetch("https://cederdorff.github.io/dat-js/05-data/southpark.json");
  const data = await response.json();
  return data;
}

function sortByName(characterA, characterB) {
  return characterA.name.localeCompare(characterB.name)
}

function addCharacter(character) {
  console.log(character);
  document.querySelector("#characters").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
          <article class="grid-item">
              <img src="${character.image}">
              <h2>${character.name}</h2>
              <p><i>${character.occupation}</i></p>
              <br/>
              <p><strong>Age:</strong> ${character.age}</p>
              <p><strong>Voiced by:</strong> ${character.voicedBy}</p>
              <p><strong>Catchfrase:</strong> "${character.catchPhrase}"</p>
          </article>
      `
  );
  
document.querySelector("#characters article:last-child").addEventListener("click", clickCharacter);

function clickCharacter(){
  showCharacter(character);
}
}

function showCharacter(character){
  document.querySelector("dialog").showModal();
  document.querySelector("#dialogName").textContent = character.name;
  document.querySelector("#dialogNickName").textContent = character.nickname;
  document.querySelector("#dialogImg").setAttribute("src", character.image);
  document.querySelector("#dialogOccupation").textContent = character.occupation;
  document.querySelector("#dialogAge").textContent = character.age;
  document.querySelector("#dialogVoicedBy").textContent = character.voicedBy;
  document.querySelector("#dialogGender").textContent = character.gender;
  document.querySelector("#dialogReligion").textContent = character.religion;
  document.querySelector("#dialogCatchPhrase").textContent = character.catchPhrase;
  document.querySelector("#dialogHairColor").textContent = character.hairColor;
  document.querySelector("#dialogSchoolGrade").textContent = character.schoolGrade;
  document.querySelector("#dialogEpisodes").textContent = character.episodes;
  document.querySelector("#dialogCharacterDescription").textContent = generateDescription(character);;

    closeDialog();
      
}

// Alternative to close btn in html - instead add click where target is outside dialog

function closeDialog(){
const dialog = document.querySelector("dialog");
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
}

function generateDescription(character) {
  let generalDescription = `${character.name} first appeared in South Park season ${character.firstAppearance.slice(1, 3)}, episode ${character.firstAppearance.slice(4)}. `;
  let specificDescription = "";

  if (character.appearances == 1) {
    specificDescription = `${character.name} was not offered additional appearances.`;
  } else if (character.appearances > 1) {
    specificDescription = `In all, ${character.name} appeared in ${character.appearances} episodes.`;
  } else if (character.appearances == null) {
    specificDescription = "faulty JSON object ¯\_(ツ)_/¯ "
  }

  let generatedDescription = generalDescription + specificDescription;
  return generatedDescription;

}

function detectUserPreference() {
  const modeFromLocalStorage = readUserColorMode();


  if(modeFromLocalStorage) {
    changeMode(modeFromLocalStorage);
    document.querySelector("#select-color-mode").value = modeFromLocalStorage;
  }

  changeMode(modeFromLocalStorage);
  document.querySelector("#select-color-mode").value = modeFromLocalStorage;
}

function readUserColorMode() {
  const userColorMode = localStorage.getItem("userColorMode");
  return userColorMode;
}

function saveUserColorMode(mode) {
  localStorage.setItem("userColorMode", mode);

}

// modeSelected called when #select-color-mode changes value
function modeSelected() {
  const selectedColorMode = this.value;
  changeMode(selectedColorMode);
  saveUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  console.log(mode);

  if (mode == "dark") {
      document.querySelector(":root").classList.add("dark-mode");
  } else
      document.querySelector(":root").classList.remove("dark-mode");
  }

