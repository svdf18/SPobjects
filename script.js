"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("app is running");

  const characters = await getData();
  characters.forEach(addCharacter);
}

async function getData() {
  const response = await fetch("https://cederdorff.github.io/dat-js/05-data/southpark.json");
  console.log(response);
  const data = await response.json();
  console.log("done fetching");
  console.log(data);
  return data;
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
document.querySelector("#characters article:last-child").addEventListener("click", showCharacter);

function showCharacter(){
  document.querySelector("dialog").showModal();
  document.querySelector("#dialogName").textContent = character.name;
  document.querySelector("#dialogNickName").textContent = character.nickname;
  document.querySelector("#dialogImg").setAttribute("src", character.image);
  document.querySelector("#dialogOccupation").textContent = character.occupation;
  document.querySelector("#dialogAge").textContent = character.age;
  document.querySelector("#dialogVoicedBy").textContent = character.voicedby;
  document.querySelector("#dialogGender").textContent = character.gender;
  document.querySelector("#dialogReligion").textContent = character.religion;
  document.querySelector("#dialogCatchPhrase").textContent = character.catchPhrase;
  document.querySelector("#dialogHairColor").textContent = character.hairColor;
  document.querySelector("#dialogSchoolGrade").textContent = character.schoolGrade;
  document.querySelector("#dialogEpisodes").textContent = character.episodes;
  document.querySelector("#dialogAppearances").textContent = character.appearances;
  document.querySelector("#dialogFirstAppearance").textContent = character.firstAppearance;

    closeDialog();
      
}

function closeDialog(){
const dialog = document.querySelector("dialog");
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
}}
