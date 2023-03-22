'use strict';

class Pojistenec {

    constructor(jmeno, prijmeni, vek, telefon) {
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
        this.telefon = telefon;
    }

    toString() {
        return `Pojištěnec: ${this.jmeno} ${this.prijmeni}<br>Věk: ${this.vek}<br>Telefon: ${this.telefon}`;
    }
    

}

