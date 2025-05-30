const joke = document.getElementById("joke");
const newJoke = document.getElementById("newJoke");

async function fetchJoke () {   // create an async function to fetch a joke
    try {
        joke.innerText = "Loading..."; // show "Loading..." while the joke is being fetched
        
        // wait for the joke data to come from the API
        const response = await fetch("https://official-joke-api.appspot.com/random_joke"); 

        const jokeInput = await response.json();  // wait for the response to be converted to JSON format

        
        // take the joke setup and punchline and show it on the screen
        joke.innerText = `${jokeInput.setup} - ${jokeInput.punchline}`;
    }
    catch (error) {
    joke.innerText = `Error: ${error.message}`;//show that message if there's an error 
}}

newJoke.addEventListener("click", fetchJoke);