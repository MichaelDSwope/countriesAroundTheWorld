// Country class
class Country {
    constructor(name, officialLanguage, helloWorldInLanguage, primaryNationalColors) {
        this.name = name;
        this.officialLanguage = officialLanguage;
        this.helloWorldInLanguage = helloWorldInLanguage;
        this.primaryNationalColors = primaryNationalColors;
    }
    displayColors
};

// Example usage
console.log("Name: " + country.name);
console.log("Official Language: " + country.officialLanguage);
console.log(country.helloWorldInLanguage);

// Call the displayColors method to repaint the DOM
country.displayColors()
// Get the DOM elements you want to repaint
var body = document.body;
var heading = document.getElementById(`heading`); // Example heading element

// Set the background color and text color to the primary national colors
body.style.backgroundColor = this.primaryNationalColors[0];
heading.style.color = this.primaryNationalColors[1];

// Array of countries
const countries = [japan, usa, germany, france, canada];

// Create Country objects
const japan = new Country("Japan", "Japanese", "こんにちは、世界！", ["#FFFFFF", "#FF0000"]);
const usa = new Country("USA", "English", "Hello, World!", ["#FFFFFF", "#0000FF"]);
const germany = new Country("Germany", "German", "Hallo Welt!", ["#000000", "#FF0000", "#FFD700"]);
const france = new Country("France", "French", "Bonjour le monde!", ["#0055A4", "#FFFFFF", "#EF4135"]);
const canada = new Country("Canada", "English/French", "Hello/Bonjour, World!", ["#FF0000", "#FFFFFF"]);



// Function to prompt the user and update the DOM based on the selected country
function displaySelectedCountry() {
    const userInput = prompt("Select a country (Japan, USA, Germany, France, Canada):");
    const selectedCountry = countries.find(country => country.name.toLowerCase() === userInput.toLowerCase());

    if (selectedCountry) {
        selectedCountry.displayColors();
    } else {
        alert("Country not found. Please choose a valid country.");
    }
}

// Call the function to display the selected country's colors
displaySelectedCountry();
