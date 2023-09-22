var tempo = 3000;

function slide01(){
    document.getElementById("banner").scr="banner2.jpg";
    setTimeout("slide02", tempo)
}
function slide02(){
    document.getElementById("banner").src="banner3.jpg";
    setTimeout("slide03", tempo)
}
function slide03(){
    document.getElementById("banner").src="banner1.jpg";
    setTimeout("slide01", tempo)
}