class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Hello world!", ["red", "white", "blue"]);
let germany = new Country("Germany", "Deutsch", "Hallo welt", ["black", "red", "yellow"]);
let japan = new Country("Japan", "Haro world", ["red", "white"])


function SwitchCountry() {
    let input = "USA";
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Germany") {
        country = germany;
    }
    else if (input === "Japan") {
        country = japan;
    }

}