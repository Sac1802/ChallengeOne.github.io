function code() {
    let cutPhrase = document.getElementById("phrase").value.toLowerCase();
    let text = cutPhrase
        .replaceAll("e" ,"enter")
        .replaceAll( "i" ,"imes")
        .replaceAll("o", "ober")
        .replaceAll( "a" ,"ai")
        .replaceAll( "u" , "ufat");

        let result = '';

        document.getElementById("text2").innerHTML = text;
        document.getElementById("text").innerHTML = result;
        document.getElementById("copy").style.display = "show";
        document.getElementById("copy").style.display = "inherit";

        navigator.clipboard.writeText(text)
        
}

function desencriptar() {
    let textoEncriptado = document.getElementById("phrase").value.toLowerCase();
    let text = textoEncriptado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");

        let result = '';

        document.getElementById("text2").innerHTML = text;
        document.getElementById("text").innerHTML = result;
        document.getElementById("copy").style.display = "show";
        document.getElementById("copy").style.display = "inherit";  

        navigator.clipboard.writeText(text)

}


function copy() {
    alert("El texto se copio correctamente")
}  




