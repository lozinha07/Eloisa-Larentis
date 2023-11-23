
//ariana
function tocaSomariana(){
    document.querySelector("#som_tecla_ariana").play();
}
document.querySelector(".tecla_ariana").onclick = tocaSomariana;
//ashnikko
function tocaSomashnikko(){
    document.querySelector("#som_tecla_ashnikko").play();
}
document.querySelector(".tecla_ashnikko").onclick = tocaSomashnikko;

//eminem
function tocaSomEminem(){
    document.querySelector("#som_tecla_eminem").play();
}
document.querySelector(".tecla_flash").onclick = tocaSomEminem;

//gianegiovani
function tocaSomgianegiovani(){
    document.querySelector("#som_tecla_gianegiovani").play();
}
document.querySelector(".tecla_gianegiovani").onclick = tocaSomgianegiovani;

//hariel
function tocaSomhariel(){
    document.querySelector("#som_tecla_hariel").play();
}
document.querySelector(".tecla_hariel").onclick = tocaSomhariel;

//hulk
function tocaSomHulk(){
    document.querySelector("#som_tecla_hulk").play();
}
document.querySelector(".tecla_hulk").onclick = tocaSomHulk;

//batman
function tocaSomBatman(){
    document.querySelector("#som_tecla_batman").play();
}
document.querySelector(".tecla_batman").onclick = tocaSomBatman;

//ferro
function tocaSomFerro(){
    document.querySelector("#som_tecla_ferro").play();
}
document.querySelector(".tecla_ferro").onclick = tocaSomFerro;

//america
function tocaSomAmerica(){
    document.querySelector("#som_tecla_america").play();
}
document.querySelector(".tecla_america").onclick = tocaSomAmerica;
/*

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
let lista = document.querySelectorAll(".tecla");
let contador = 0;
while(contador< lista.length){
    const efeito = lista[contador].classList[1];
    const idAudio = "#som_"+efeito;
    lista(contador).onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
}*/