let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

jokeBtn.onclick = function () {

    spinner.classList.remove("d-none");
    jokeText.classList.add("d-none");

    let options = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/jokes/random", options)

        .then(function (response) {
            return response.json();
        })

        .then(function (jsonData) {

            spinner.classList.add("d-none");
            jokeText.classList.remove("d-none");

            jokeText.textContent = jsonData.value;
        });
};