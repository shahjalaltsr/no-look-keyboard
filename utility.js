function hideelementbyId(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('hidden'); // Fixed classList and parameter name
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
}

function ShowelementbyId(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('hidden'); // Fixed classList and parameter name
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
}
function backgrondcoloroftext(elementId)
{
const element=document.getElementById(elementId);
element.classList.add('bg-orange-400');


}
// random value finding
function getrandomalphabet(){
    const alphabetstring='abcdefghijklmnopqrstuvwxyz'
    const alphabets=alphabetstring.split('');
    //console.log(alphabets);
// ger random value
const randomnumber=Math.random()*26;
const index=Math.floor(randomnumber);
const alphabet=alphabets[index];
//console.log(index);
return alphabet;
}