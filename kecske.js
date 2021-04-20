window.addEventListener("load", init);

var kepObj1 = {
    kep: "kepek/kecske2.png",
    cim: "kecske"
};
var kepObj2 = {
    kep: "kepek/kaposzta.png",
    cim: "kaposzta"
};
var kepObj3 = {
    kep: "kepek/farkas.png",
    cim: "farkas"
};

var KepObjTomb = [kepObj1, kepObj2, kepObj3];
var balpart = [kepObj1.cim, kepObj2.cim, kepObj3.cim ];
var eleresiUt = [];
var hajo = [];
var jobbpart = [];
var id = 0;
var voltmar;
var hajohelyzet;

function init() {
    ID("labjegyzet").innerHTML = "Kelemen Kevin, Nagy Domonkos, Labanc Dániel, Joó Edvárd";
    ID("labjegyzet").className = "footerFormaz";

    for (var i = 0; i < KepObjTomb.length; i++) {
        $(".keptarolo img")[i].addEventListener("click", Hozzaad);

    }


    function Hozzaad() {
        var azon = this.id;

        feltolt(azon);
    }


    function feltolt(index) {
        eleresiUt.push(KepObjTomb[index].kep);
        //console.log(eleresiUt);
    }


    for (var i = 0; i < $("#bal img").length; i++) {
        $("#bal img")[i].addEventListener("mouseover", kiemel);
        $("#bal img")[i].addEventListener("mouseout", levesz);
        $("#bal img")[i].addEventListener("click", balrolberak);
        $("article img")[i].addEventListener("click", kirak);
        $("article img")[i].addEventListener("mouseover", kiemel);
        $("article img")[i].addEventListener("mouseout", levesz);
        $("#jobb img")[i].addEventListener("mouseover", kiemel);
        $("#jobb img")[i].addEventListener("mouseout", levesz);
        $("#jobb img")[i].addEventListener("click", jobbrolberak);

    }


    function $(nev) {
        return document.querySelectorAll(nev);
    }

    function ID(nev) {
        return document.getElementById(nev);
    }

    function kiemel() {
        this.classList.add("kiemel");
    }

    function levesz() {
        this.classList.remove("kiemel");
    }

    function balrolberak() {

        if (!hiba()) {
            voltmar = true;
            var azon = this.id;
            this.classList.toggle("nemlatszik");
            $("article img")[azon].classList.toggle("nemlatszik");
            $("article img")[azon].classList.add("jobbpozicio");
            $("article img")[azon].classList.remove("balOldalPart");
            
            hajo.push(KepObjTomb[azon].cim);
            var index = balpart.indexOf(KepObjTomb[azon].cim);
            balpart.splice(index, 1);
            hajohelyzet = true;
        }

        hajoPozicio(hajohelyzet);
        proba(balpart, !(hajohelyzet));
        proba(jobbpart, hajohelyzet);
        console.log(hajohelyzet);

    }

    function jobbrolberak() {
        if (!hiba()) {
            voltmar = false;
            var azon = this.id - 6;
            this.classList.toggle("nemlatszik");
            $("article img")[azon].classList.toggle("rejtettIMG");
            $("article img")[azon].classList.add("balOldalPart");
            $("article img")[azon].classList.remove("jobbpozicio");
            hajo.push(KepObjTomb[azon].cim);
            var index = jobbpart.indexOf(KepObjTomb[azon].cim);
            jobbpart.splice(index, 1);
            hajohelyzet = false;
        }

        hajoPozicio(hajohelyzet);
        proba(jobbpart, hajohelyzet);
        proba(balpart, !(hajohelyzet));
        console.log(hajohelyzet);
    }

    function kirak() {

        var azon = this.id - 3;
        var index = hajo.indexOf(KepObjTomb[azon].cim);
        hajo.splice(index, 1);

        if (voltmar) {
            this.classList.toggle("rejtettIMG");
            $("#jobb img")[azon].classList.toggle("rejtettIMG");
            jobbpart.push(KepObjTomb[azon].cim);
            hajohelyzet = false;
            if (jobbpart.includes(KepObjTomb[1].cim) && jobbpart.includes(KepObjTomb[0].cim) && jobbpart.includes(KepObjTomb[2].cim)) {
                alert("NYERT!");
            }
        } else {
            this.classList.toggle("rejtettIMG");
            $("#bal img")[azon].classList.toggle("rejtettIMG");
            balpart.push(KepObjTomb[azon].cim);
            hajohelyzet = true;
        }

        hajoPozicio(hajohelyzet);
        proba(jobbpart, hajohelyzet);
        proba(balpart, !(hajohelyzet));
        console.log(hajohelyzet);
    }

    function ellenorzes() {
        console.log("Bal part elemei: " + balpart);
        console.log("Hajó elemei: " + hajo);
        console.log("Jobb part elemei: " + jobbpart);
    }


    function hiba() {
        var igaz = false;
        if (hajo.length > 0) {
            igaz = true;
            alert("Nem lehet a hajóban a révész mellett 1-nél több karakter!");
        }

        return igaz;
    }

    function proba(tomb = [], boolean) {
        if (tomb.includes(KepObjTomb[0].cim) && tomb.includes(KepObjTomb[2].cim) && !(tomb.includes(KepObjTomb[1].cim)) && boolean) {
            alert("Ó, jaj! A farkas megette a kecskét!");
            window.location.reload();
        }
        if (tomb.includes(KepObjTomb[1].cim) && tomb.includes(KepObjTomb[0].cim) && !(tomb.includes(KepObjTomb[2].cim)) && boolean) {
            alert("Jaj ne! A kecske megette a káposztát!");
            window.location.reload();
    }

    }

    function hajoPozicio(boolean) {
        if (boolean === true) {
            ID("csonak").style.backgroundPosition = "left";
            ID("csonak").style.transition = "all 2s";
        } else {
            ID("csonak").style.backgroundPosition = "right";
            ID("csonak").style.transition = "all 2s";
        }
    }
//ha balról vesszük fel, vagy tesszük le = true
//ha jobbról vesszük fel, vagy tesszük le = false

}