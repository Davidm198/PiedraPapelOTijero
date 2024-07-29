const Tijera = document.getElementById('tijera');  
const Papel =  document.getElementById('papel');
const Piedra = document.getElementById('piedra');
const boton = document.getElementById('juega');
const PiedraHtml = document.createElement('img');
const TijeraHtml = document.createElement('img');
const PapelHtml = document.createElement('img');
const H2 = document.createElement("div");
const WeaMaq = document.querySelector('.choicePC');
const ChoicePlayer = document.querySelector('.choiceWeapon')
const H1 = document.createElement("h1");
const GanasteHtml = document.createTextNode("GANASTE WEY!!!!!!!");
const PerdisteHtml = document.createTextNode("PERDISTE CABRON!!!!!!");
const EmpatasteHtml = document.createTextNode("NO MAMES... EMPATASTE WEY!!!");
const ButtonReloed = document.querySelector('.Actualizador')

PiedraHtml.src = 'Piedra.png';
PapelHtml.src = 'Papel.png';
TijeraHtml.src = 'Tijera.png';




var opciones = ["piedra", "papel", "tijera"];

  

let message
function choice() {
     if (Tijera.checked == true) {
                per = "tijera";
          } 
          else if (Papel.checked == true) {
                 per = "papel";
      } 
          else if (Piedra.checked == true) {
               per = "piedra";
      }
    }

function juega (per, maq) {
   
    if (per == maq) {

        H1.append(EmpatasteHtml);
        WeaMaq.appendChild(H1);
    
}

else if ( per == 'piedra' && maq == 'papel' || per =='papel' && maq == 'tijera' || per == 'tijera' && maq == 'piedra') {
      
        H1.append(PerdisteHtml);
        WeaMaq.appendChild(H1);
    }

else if ( per == 'papel' && maq == 'piedra' || per =='tijera' && maq == 'papel' || per == 'piedra' && maq == 'tijera') {
        
    H1.append(GanasteHtml);
    WeaMaq.appendChild(H1);
    
}
}

function Declara (maq){
     
    if (maq =='piedra') {
       H2.append(PiedraHtml);
       WeaMaq.appendChild(H2);
    }

    else if (maq =='papel') {
       H2.append(PapelHtml);
       WeaMaq.appendChild(H2);
    }

    else if (maq =='tijera') {
       H2.append(TijeraHtml);
       WeaMaq.appendChild(H2);
    }

}

function partida() {
    
    var maq = opciones[Math.floor(Math.random() * opciones.length)];
    Declara(maq);
   
    
    choice ();
    juega (per, maq);
    console.log(message);
    console.log("la Maquina Eligió " + maq);
    WeaMaq.classList.toggle('inactive');
    ChoicePlayer.classList.add('inactive');
}


function Reloed() {

    location.reload();

}


boton.addEventListener('click', partida);

ButtonReloed.addEventListener('click', Reloed);

