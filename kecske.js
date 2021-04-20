window.addEventListener("load", init);

var id;
var kozeprePoz;

const kepObjkecske = {
    kep: "kepek/kecske2.png",
    cim: "kecske"
};
const kepObjkaposzta = {
    kep: "kepek/kaposzta.png",
    cim: "kaposzta"
};
const kepObjfarkas = {
    kep: "kepek/farkas.png",
    cim: "farkas"
};

const KepObjTomb = [kepObjkecske, kepObjkaposzta, kepObjfarkas];
const balpart = [kepObjkecske.cim, kepObjkaposzta.cim, kepObjfarkas.cim];
var eleresiUt = [];
var csonak = [];
var jobbpart = [];

function init() {

    for (var i = 0; i < KepObjTomb.length; i++) {
        $(".keptarolo img")[i].addEventListener("click", athelyez);

    }


    function athelyez() {
        var azon = this.id;

        beilleszt(azon);
    }


    function beilleszt(index) {
        eleresiUt.push(KepObjTomb[index].kep);
    }


    for (var i = 0; i < $("#bal img").length; i++) {
        $("#bal img")[i].addEventListener("mouseover", lathato);
        $("#bal img")[i].addEventListener("mouseout", nemLathato);
        $("#bal img")[i].addEventListener("click", JobbrolBalra);
        $("article img")[i].addEventListener("click", Megjelenítes);
        $("article img")[i].addEventListener("mouseover", lathato);
        $("article img")[i].addEventListener("mouseout", nemLathato);
        $("#jobb img")[i].addEventListener("mouseover", lathato);
        $("#jobb img")[i].addEventListener("mouseout", nemLathato);
        $("#jobb img")[i].addEventListener("click", BalrólJobbra);

    }


    function $(nev) {
        return document.querySelectorAll(nev);
    }

    function ID(nev) {
        return document.getElementById(nev);
    }

    function JobbrolBalra() {
        ismetles = true;
        var azon = this.id;
        this.classList.toggle("rejtettIMG");
        $("article img")[azon].classList.toggle("rejtettIMG");
        $("article img")[azon].classList.add("jobbOldalPart");
        $("article img")[azon].classList.remove("balOldalPart");

    }

    function BalrólJobbra() {
        ismetles = false;
        var azon = this.id - 6;
        this.classList.toggle("rejtettIMG");
        $("article img")[azon].classList.toggle("rejtettIMG");
        $("article img")[azon].classList.add("balOldalPart");
        $("article img")[azon].classList.remove("jobbOldalPart");
    }

    function Megjelenítes() {

        var azon = this.id - 3;
        var index = csonak.indexOf(KepObjTomb[azon].cim);
        csonak.splice(index, 1);

        if (ismetles) {
            this.classList.toggle("rejtettIMG");
            $("#jobb img")[azon].classList.toggle("rejtettIMG");
            jobbpart.push(KepObjTomb[azon].cim);
            kozeprePoz = false;
        } else {
            this.classList.toggle("rejtettIMG");
            $("#bal img")[azon].classList.toggle("rejtettIMG");
            balpart.push(KepObjTomb[azon].cim);
            kozeprePoz = true;
        }
    }
    function lathato() {
        this.classList.add("kiemel");
    }

    function nemLathato() {
        this.classList.remove("kiemel");
    }
}