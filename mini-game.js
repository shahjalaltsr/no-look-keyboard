//function playNow()
//{
    //const homescreen=document.getElementById('home-hidden');
    //homescreen.classList.add('hidden');

    //const playing=document.getElementById('play')
  //  playing.classList.remove('hidden');
//}

function continuegame(){
const alphabet=getrandomalphabet();
console.log('yoour alpabet is',alphabet);
const randomvalue=document.getElementById('current-alpha');
randomvalue.innerText =alphabet;
backgrondcoloroftext(alphabet);

}


function playNow() {
  hideelementbyId('home-hidden'); // Hides the home section
  ShowelementbyId('play');
  continuegame();       // Shows the play section
}
