


const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// In allegato trovate un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.


const team_cont = document.querySelector(".team-container");
const nameUser = document.getElementById("name");
const roleUser = document.getElementById("role");
const img = document.getElementById("image");
const button = document.getElementById("addMemberButton");

// adding photo 
for (let i = 0; i < team.length; i++) {

  const addTeam = `
<div class="team-card">
  <div class="card-image">
    <img
      src="img/${team[i].image}"
      alt="${team[i].name}"
    />
  </div>
  <div class="card-text">
    <h3>${team[i].name}</h3>
    <p>${team[i].role}</p>
  </div>
</div>
`

  
 team_cont.innerHTML += addTeam 
}


// adding button 
button.addEventListener("click" ,function () {
  team_cont.innerHTML = ""
  const obj = {
    name: nameUser.value,
    role: roleUser.value,
    image: img.value
  }
  team.push(obj)
  
  for (let i = 0; i < team.length; i++) {

    const addTeam = `
  <div class="team-card">
    <div class="card-image">
      <img
        src="img/${team[i].image}"
        alt="${team[i].name}"
      />
    </div>
    <div class="card-text">
      <h3>${team[i].name}</h3>
      <p>${team[i].role}</p>
    </div>
  </div>
  `
  
    
   team_cont.innerHTML += addTeam 
  }
})