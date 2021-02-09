//creating submit input and button  
function submitScore() {

    var enterScore = document.getElementById("enterScore");
    var createInitials = document.createElement("input");
    createInitials.setAttribute("id", "text");
    createInitials.placeholder = "Enter your initials";

    enterScore.appendChild(createInitials);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    enterScore.appendChild(createSubmit);

    startScreenDiv.appendChild(enterScore);

    //adding eventlistner to submit button to return final scores into local storage

    createSubmit.addEventListener("click", function () {
        var initials = createInitials.value.trim()

        if (initials !== "") {

            var highscores = JSON.parse(window.localStorage.getItem("highscores") || "[]");

            var newScore = {
                score: timeRemaining,
                initials: initials
            };

            highscores.push(newScore);

            window.localStorage.setItem("highscores", JSON.stringify(highscores));

            window.location.replace("./highscores.html");
        }

    })

};




