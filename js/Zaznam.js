class Zaznam {
    constructor() {
        const pojistenciZeStorage = localStorage.getItem("pojistenci"); //načtení pojištěnců z local storage podle klíče pojištěnci
        this.pojistenci = pojistenciZeStorage ? JSON.parse(pojistenciZeStorage) : []; //existuje li pojištěnec, dostaneme naparsované pole. Pokud ne, bude prázdné pole
        // načtení inputů do proměnných
        this.jmenoInput = document.getElementById("jmeno");
        this.prijmeniInput = document.getElementById("prijmeni");
        this.vekInput = document.getElementById("vek");
        this.telefonInput = document.getElementById("telefon");

        this.ulozitButton = document.getElementById("ulozit");
        this.vypisElement = document.getElementById("seznam-pojistenych");

        this._nastavUdalosti();
        //localStorage.clear(); //odkomentovat pro případ vymazání úložiště
        }
        
        _nastavUdalosti() {
            this.ulozitButton.onclick = () => {
                if (this.jmenoInput.value.length !== 0 && this.prijmeniInput.value.length !== 0 && this.vekInput.value.length !== 0 && this.telefonInput.value.length >= 9) {
                    const pojistenec = new Pojistenec(this.jmenoInput.value, this.prijmeniInput.value, this.vekInput.value, this.telefonInput.value);
                    this.pojistenci.push(pojistenec); //uloží do pole nový záznam
                    this.ulozPojistence();
                    this.vypisPojistence();
                } else
                    alert("Vyplňte prosím všechny údaje ve správném formátu!");
            };
        }
        // metoda pro vypisování pojištěnců do tabulky
        vypisPojistence() {
            this.vypisElement.innerHTML=""; // vymaže obsah elementu
            
            // pomocí cyklu vypíšeme data do řádku a buněk
            for (const pojistenec of this.pojistenci) {
                const radekPojistence = document.createElement("tr");
                radekPojistence.insertAdjacentHTML("beforeend", `<td>${pojistenec.jmeno} ${pojistenec.prijmeni}</td>
                <td>${pojistenec.telefon}</td>
                <td>${pojistenec.vek}</td>`);

                this.vypisElement.appendChild(radekPojistence);
            }
        }

        // metoda pro uložení pojištěnců do Local Storage
        ulozPojistence() {
            localStorage.setItem("pojistenci", JSON.stringify(this.pojistenci)); // uloží pojištěnce do local storage jako řádek stringu JSON
        }
}
