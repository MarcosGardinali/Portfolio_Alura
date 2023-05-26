console.log("Teste conexão do JavaScript...");
console.log("JavaScript conectado!!");
document.querySelector("main").addEventListener("dblclick", geraAlertaDeClick());

function geraAlertaDeClick(){
    alert("A página foi clicada!!");
    console.log("Clicou!!");
}

