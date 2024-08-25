const form =document.querySelector('.Quizz');
let tableauResultats = [];
const reponces = ['b','a','c','a','a','c'];
const emojis = ['✅','✨','👀','😢','😭','👎'];
const titreResultat = document.querySelector('.résultat h2');
const texteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('article');
let verifTableau = [];

document.addEventListener('DOMContentLoaded', function(){
  let element = document.getElementById('elementId');
  if (element) {
    let value = element.value;
  }
});

form.addEventListener("submit" ,(e) =>{
  e.preventDefault();
  // console.log(document.querySelector('input[name="q1"]:checked').value);
  for(i=1; i < 7; i++){
    tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
  }
  // console.log(tableauResultats);
  verifFunc(tableauResultats);
  tableauResultats = [];
});

function verifFunc(tabResultats){
  for(let a = 0; a < 6; a++){
    if(tabResultats[a] === reponces[a]){
      verifTableau.push(true);
    }else{
      verifTableau.push(false);
    }
  }
  // console.log(verifTableau);
  afficherResultats(verifTableau);
  couleursFonction(verifTableau);
  verifTableau = [];
}

function afficherResultats(tabCheck){
  nbDeFautes = tabCheck.filter(el => el !== true).length;
  console.log(nbDeFautes);

  switch(nbDeFautes){
    case 0:
      titreResultat.innerText = "✅ Bravo, c'est un sans faute ! ✅";
      texteResultat.innerText = "";
      aideResultat.innerText = "note:6/6";
    break;
    case 1:
      titreResultat.innerText = "✨ vous y été presque! ✨";
      texteResultat.innerText = "Retentez une autre partie, puis re-validez !";
      aideResultat.innerText = "note:5/6";
    break;
    case 2:
      titreResultat.innerText = "✨ encore un petit effort ... ! 👀";
      texteResultat.innerText = "Retentez une autre partie, puis re-validez !";
      aideResultat.innerText = "note:4/6";
    break;
    case 3:
      titreResultat.innerText = "👀 encore un effort ... ! 😢";
      texteResultat.innerText = "Retentez une autre partie, puis re-validez !";
      aideResultat.innerText = "note:3/6";
    break;
    case 4:
      titreResultat.innerText = "😢 c'est pas mal pour un début! 😢";
      texteResultat.innerText = "Retentez une autre partie, puis re-validez !";
      aideResultat.innerText = "note:2/6";
    break;
    case 5:
      titreResultat.innerText = "😭 Tu peux mieux faire ! 😭";
      texteResultat.innerText = "Retentez une autre partie, puis re-validez !";
      aideResultat.innerText = "note:1/6";
    break;
    case 0:
      titreResultat.innerText = "👎 Tu peux mieux faire ! 👎";
      texteResultat.innerText = "Retentez une autre partie, puis re-validez !";
      aideResultat.innerText = "note:0/6";
    break;

    default:
      "Woups, cas innatendu.";   
  }
}

function couleursFonction(tabValBool){
  for(let j = 0; j < tabValBool.length;j++){
    if(tabValBool[j] === true){
      toutesLesQuestions[j].style.background = 'rgb(61, 61, 141)';
    }else{
      toutesLesQuestions[j].style.background = '#ffb8b8';
      toutesLesQuestions[j].classList.add('echec');
      
      setTimeout(() =>{
        toutesLesQuestions[j].classList.remove('echec');

      }, 500)
    }
  }
}

toutesLesQuestions.forEach(item=>{
  item.addEventListener('click', ()=>{
    item.style.background = 'rgb(96, 96, 169)';
  })
})