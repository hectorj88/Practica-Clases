function esPalindromo(texto){
    var texto1 = document.getElementById('texto').value;
    if(texto1.split('').reverse().join('')==texto1){
        return alert("El texto introducido es palíndromo");
    }else{
        return alert("El texto introducido NO es palíndromo");
    }    
}

function numeroMayor(texto2,texto3){
    var txt2 = parseFloat(document.getElementById('texto2').value);
    var txt3 = parseFloat(document.getElementById('texto3').value);
    if( txt2 == txt3 ){
        return alert("Ambos numeros son iguales");
    }else if( txt2 > txt3 ){
        return alert("El numero " + txt2 + " es mayor que el numero " + txt3);
    }else {
        return alert("El numero " + txt3 + " es mayor que el numero " + txt2);
    }
}

function vocaless(texto4){
    var txt4 = document.getElementById('texto4').value;
    /*const vocales = "aáeéiíoóuúAÁEÉIÍOÓUÚ";*/
    const vocales = ['a','á','e','é','i','í','o','ó','u','ú','A','Á','E','É','I','Í','O','Ó','U','Ú'];
    let cantidadVocales = 0;
    let letraA=0;
    let letraE=0;
    let letraI=0;
    let letraO=0;
    let letraU=0;
    
    for (const letra of txt4) {
        if("a"==letra || "A" == letra || "á" == letra || "Á" == letra){
            letraA++;
        }else if("e"==letra || "E" == letra || "é" == letra || "É" == letra){
            letraE++
        }else if("i"==letra || "I" == letra || "í" == letra || "Í" == letra){
            letraI++
        }else if("o"==letra || "O" == letra || "ó" == letra || "Ó" == letra){
            letraO++
        }else if("u"==letra || "U" == letra || "ú" == letra || "Ú" == letra){
            letraU++
        }
    }
    cantidadVocales = letraA+letraE+letraI+letraO+letraU;
    return alert("la cantidad de vocales es: " + cantidadVocales + " \ny son las siguientes: \nA=" + letraA + ", E=" + letraE + ", I=" + letraI + ", O=" + letraO + ", U=" + letraU)
}

