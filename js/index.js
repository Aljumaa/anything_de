var x = ""; //Math.floor(Math.random() * 100) + 1;
var versuch = "";
var maxVersuch = "";
var spieler = {};
var name = "";
var arrayText = document.getElementById("versuche");

function ergebnis() {
    var y = document.getElementById("raten").value;
    y = parseInt(y); // String zur Zahl
    var ms = document.getElementById("ms");
    var foto = document.getElementById("foto");
    if (y === "" || y < 1 || y === "0" || isNaN(y)) {
        ms.innerHTML = "<span class='col-md-4 text-danger fs-4 mt-4 border border-danger p-3 px-5'>Nummer eingeben</span>";
        // alert("Passt nicht");
    } else {
        versuch++;
        if (x === y) {
            erstelleRunde()
            ergebnisSchleife();
            document.getElementById("nav").style.display = "none";
            ms.innerHTML = "<div class='fs-4'> <span class=' fs-1 text-success'> Gratuliere! </span> <br> Du hast die richtige Zahl in <span class='text-danger'>" + versuch + "</span> Versuchen erraten</div>";
            foto.innerHTML = " <br> <img src='img/gewonnen.png' alt='Girl in a jacket' width='300' height='auto'> ";
            neuButton();
            buttonClassA(0)
            versuch = 0;
            namespieler.innerHTML = "";
        } else if (x < y) {
            ms.innerHTML = "<div class='fs-4'>Die gesuchte Zahl ist <span class='text-info'> kleiner </span>  als dein Wert! <br> Du hast noch <span class='text-danger'>" + (maxVersuch - versuch) + "</span> Versuche übrig.</div>";
            pruefeVersuche();
        } else {
            ms.innerHTML = "<div class='fs-4'>Die gesuchte Zahl ist <span class='text-warning'> größer </span> als dein Wert! <br> Du hast noch <span class='text-danger'>" + (maxVersuch - versuch) + "</span> Versuche übrig.</div>";

            // "Die gesuchte Zahl ist größer als dein Wert! Du hast noch " +
            (maxVersuch - versuch) + " Versuche übrig.";
            pruefeVersuche();
        }
    }
}

function erstelleRunde() {
    var runde = {
        versuche: versuch,
        zahl: x
    };
    spieler[name].runden.push(runde);
}

function pruefeVersuche() {
    if (versuch === maxVersuch) {
        erstelleRunde()
        buttonClassA(0);
        ms.innerHTML = "<div class='fs-5'><span class='text-danger fs-2'> Verlierer! </span> <br>Du hast keine Versuche mehr übrig.<br>Die gesuchte Zahl war: <span class='text-success' >" + x + "</span> </div>";
        //neuButtonSpeichern();
        neuButton();
        ergebnisSchleife();
        namespieler.innerHTML = "";
        document.getElementById("nav").style.display = "none";
        // document.body.style.backgroundImage = "url('img/verloren.jpg')";
        foto.innerHTML = " <br> <img src='img/verloren.png' alt='Girl in a jacket' width='200' height='auto'> ";

    }
}

function neuButton() {
    document.getElementById("neuspiel").style.display = "inline-block";
    document.getElementById("weiterspielen").style.display = "inline-block";
}

function neuSpiel() {
    document.getElementById("nav").style.display = "flex";
    document.getElementById("neuspiel").style.display = "none";
    document.getElementById("weiterspielen").style.display = "none";
    document.getElementById("raten").value = "";
    document.getElementById("name").value = "";
    ms.innerHTML = "";
    versuche.innerHTML = "";
    namespieler.innerHTML = "";
    neuButtonSpeichern();
    foto.innerHTML = "";
    // document.body.style.backgroundImage = "";
    //buttonKeineAhnung(1);
}

function weiterSpielen() {
    document.getElementById("nav").style.display = "flex";
    document.getElementById("neuspiel").style.display = "none";
    document.getElementById("weiterspielen").style.display = "none";
    document.getElementById("raten").value = "";
    ms.innerHTML = "";
    //neuButtonSpeichern();
    buttonKeineAhnung(1);
    foto.innerHTML = "";
}

function ergebnisSchleife() {
    var text = "";
    for (var i = 0; i < spieler[name].runden.length; i++) {
        text += "Die Zahl war  <span class='text-success'>" + spieler[name]["runden"][i].zahl + "</span>. in <span class='text-danger'>" + spieler[name]["runden"][i].versuche + "</span> Versuch/e. <br>";
    }
    arrayText.innerHTML = "<hr>" + name + "<br>" + text + "<br>";
}

function hundert() {
    x = Math.floor(Math.random() * 100) + 1;
    versuch = 0;
    maxVersuch = 5;
    buttonKeineAhnung(0);
    buttonClassA(1);
    ms.innerHTML = "";
}

function tausend() {
    x = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    console.log(x);
    versuch = 0;
    maxVersuch = 10;
    buttonKeineAhnung(0);
    buttonClassA(1);
    ms.innerHTML = "";
}

function zehnTausend() {
    x = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    versuch = 0;
    maxVersuch = 15;
    buttonKeineAhnung(0);
    buttonClassA(1);
    ms.innerHTML = "";
}

function buttonKeineAhnung(zeigenClassE) {
    var elemente = document.getElementsByClassName("e");
    for (var i = 0; i < elemente.length; i++) {
        if (zeigenClassE === 1) {
            elemente[i].style.display = "inline-block";
        } else {
            elemente[i].style.display = "none";
        }
    }
}

function buttonClassA(zeigenClassA) {
    var elemente = document.getElementsByClassName("a");
    for (var i = 0; i < elemente.length; i++) {
        if (zeigenClassA === 1) {
            elemente[i].style.display = "inline-block";
        } else {
            elemente[i].style.display = "none";
        }
    }
}

function neuButtonSpeichern() {
    document.getElementById("speicher").style.display = "inline-block";
    document.getElementById("name").style.display = "inline-block";
}

function speichern() {
    var Name = document.getElementById("name").value;
    if (Name === "") {
        ms.innerHTML = "<div class='text-danger fs-5 text-center'>Deinen Namen eingeben. <br> ohne schummeln, ich sehe dich</div>";
    } else {
        document.getElementById("speicher").style.display = "none";
        document.getElementById("name").style.display = "none";
        name = document.getElementById("name").value;
        if (spieler.hasOwnProperty(name) === false) {
            spieler[name] = {
                runden: []
            };
        };
        buttonKeineAhnung(1);
        nameSpieler();
        ms.innerHTML = "";
    };
}

function nameSpieler() {
    document.getElementById("namespieler").innerHTML = "<span class='text-dark'>Viel Spaß </span>" + name + "!";
}

var input = document.getElementById("name");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("speicher").click();
    }
});
var input2 = document.getElementById("raten");
input2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("disbutten").click();
    }
});