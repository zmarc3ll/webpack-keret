import 'bootstrap/dist/js/bootstrap.bundle.js';
import  'bootstrap/dist/css/bootstrap.css';

import './style.css';

document.getElementById('darkModeButton').addEventListener('click',darkMode);

function darkMode(){
    if(document.getElementById('darkMode').style.backgroundColor=="white"){
        document.getElementById('darkMode').style.backgroundColor="black";
        document.getElementById('darkMode').style.color="white"
    } else{
        document.getElementById('darkMode').style.backgroundColor="white";
        document.getElementById('darkMode').style.color="black"
    }
}
document.getElementById('image')

function init() {
}
console.log('loaded')
document.addEventListener('DOMContentLoaded', init);