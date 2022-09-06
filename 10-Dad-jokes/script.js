const button = document.getElementById("jokeBtn")
const jokeText= document.getElementById("joke")


const fetchAndDisplayJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    const joke = await response.json("")
    jokeText.innerText= joke.joke
}

button.addEventListener("click", async () => {
    fetchAndDisplayJoke()
})

fetchAndDisplayJoke()




