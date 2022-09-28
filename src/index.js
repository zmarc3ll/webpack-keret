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
function kepMegjelenit(){
    let url=document.getElementById('urlInput').url;
    document.getElementById('image').src=url;
}
document.getElementById('urlInput').onchange=kepMegjelenit();

function kepSzelesseg(){
    let imageWidth = document.getElementById('widthInput').value;
    document.getElementById('image').style.width=imageWidth;
}
document.getElementById('widthInput').onchange=kepSzelesseg();


function init(){

}

console.log('loaded')
document.addEventListener('DOMContentLoaded',init);