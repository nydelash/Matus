document.getElementById("titulo").onclick = function(){
    document.getElementById("titulo-msg").select();
    document.execCommand('copy');
}

document.getElementById("11").onclick = function(){
    document.getElementById("11-msg").select();
    document.execCommand('copy');
}

document.getElementById("12").onclick = function(){
    document.getElementById("12-msg").select();
    document.execCommand('copy');
}

document.getElementById("13").onclick = function(){
    document.getElementById("13-msg").select();
    document.execCommand('copy');
}

document.getElementById("21").onclick = function(){
    document.getElementById("21-msg").select();
    document.execCommand('copy');
}

document.getElementById("31").onclick = function(){
    document.getElementById("31-msg").select();
    document.execCommand('copy');
}

document.getElementById("32").onclick = function(){
    document.getElementById("32-msg").select();
    document.execCommand('copy');
}

document.getElementById("41").onclick = function(){
    document.getElementById("41-msg").select();
    document.execCommand('copy');
}

document.getElementById("51").onclick = function(){
    document.getElementById("51-msg").select();
    document.execCommand('copy');
}

document.getElementById("52").onclick = function(){
    document.getElementById("52-msg").select();
    document.execCommand('copy');
}

document.getElementById("53").onclick = function(){
    document.getElementById("53-msg").select();
    document.execCommand('copy');
}

document.getElementById("61").onclick = function(){
    document.getElementById("61-msg").select();
    document.execCommand('copy');
}

document.getElementById("71").onclick = function(){
    document.getElementById("71-msg").select();
    document.execCommand('copy');
}

document.getElementById("72").onclick = function(){
    document.getElementById("72-msg").select();
    document.execCommand('copy');
}

document.getElementById("73").onclick = function(){
    document.getElementById("73-msg").select();
    document.execCommand('copy');
}


document.getElementById("generar").onclick = function() {
    var x = document.getElementById("opciones").value;
    var value1 = document.querySelector(".value1");
    var value2 = document.querySelector(".value2");
    var value3 = document.querySelector(".value3");
    var value4 = document.querySelector(".value4");
    var value5 = document.querySelector(".value5");
    var value6 = document.querySelector(".value6");
    var value7 = document.querySelector(".value7");

    if (x === "1") {
        value1.style.display = "inline-block"
        value2.style.display = "none"
        value3.style.display = "none"
        value4.style.display = "none"
        value5.style.display = "none"
        value6.style.display = "none"
        value7.style.display = "none"
    } else if (x === "2") {
        value2.style.display = "inline-block"
        value1.style.display = "none"
        value3.style.display = "none"
        value4.style.display = "none"
        value5.style.display = "none"
        value6.style.display = "none"
        value7.style.display = "none"
    } else if (x === "3") {
        value3.style.display = "inline-block"
        value1.style.display = "none"
        value2.style.display = "none"
        value4.style.display = "none"
        value5.style.display = "none"
        value6.style.display = "none"
        value7.style.display = "none"
    } else if (x === "4") {
        value4.style.display = "inline-block"
        value1.style.display = "none"
        value2.style.display = "none"
        value3.style.display = "none"
        value5.style.display = "none"
        value6.style.display = "none"
        value7.style.display = "none"
    } else if (x === "5") {
        value5.style.display = "inline-block"
        value1.style.display = "none"
        value2.style.display = "none"
        value4.style.display = "none"
        value3.style.display = "none"
        value6.style.display = "none"
        value7.style.display = "none"
    } else if (x === "6") {
        value6.style.display = "inline-block"
        value1.style.display = "none"
        value2.style.display = "none"
        value4.style.display = "none"
        value5.style.display = "none"
        value3.style.display = "none"
        value7.style.display = "none"
    } else if (x === "7") {
        value7.style.display = "inline-block"
        value1.style.display = "none"
        value2.style.display = "none"
        value4.style.display = "none"
        value5.style.display = "none"
        value6.style.display = "none"
        value3.style.display = "none"
    }
    
}

