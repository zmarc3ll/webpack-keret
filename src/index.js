import 'bootstrap/dist/js/bootstrap.bundle.js';
import  'bootstrap/dist/css/bootstrap.css';

import './style.css';

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
    let url=document.getElementById('urlInput').value;
    document.getElementById('image').src=url;
}

function kepSzelesseg(){
    let imageWidth = document.getElementById('widthInput').value;
    document.getElementById('image').style.width=imageWidth+ "px";
}

function keretVastagsag(){
    let vastagsag=document.getElementById('borderInput').value;
    document.getElementById('image').style.border=vastagsag+ "px solid";
}

function keretSzin(){
    let color=document.getElementById('colorInput').value;
    document.getElementById('image').style.borderColor=color;
} 

function init(){

    document.getElementById('darkModeButton').addEventListener('click',darkMode);
    document.getElementById('urlInput').addEventListener('change', kepMegjelenit);
    document.getElementById('widthInput').addEventListener('change',kepSzelesseg);
    document.getElementById('borderInput').addEventListener('change',keretVastagsag);
    document.getElementById("colorInput").addEventListener('change',keretSzin);
}

console.log('loaded');
document.addEventListener('DOMContentLoaded',init);