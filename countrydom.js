console.log(`Country colors`)

//let name = prompt(`whats your name sir?`)

//console.log(name);

//alert("This is annoying");
const array_Country = [english, german, japanese, canadadian, french]; 

let countryFlags = document.getElementById("");

countryFlags.style.backgroundColor = 'blue';

let cyanThings = document.getElementsByClassName("cyanBackground");

for(let i = 0; i < cyanThings.length; i++){
    cyanThings[i].style.backgroundColor = 'cyan';
}

let clickMeButton=document.getElementById("clickMe")

//event listener
clickMeButton.addEventListener('click',(e)=>{alert('You clicked me!')});
