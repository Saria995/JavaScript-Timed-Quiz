var scoresBtn = document.querySelector("#view-high-scores");

//Put scores in order

function orderHighScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a,b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.name + " - " + score.score;
        var olTag = document.getElementById("highscores");
        olTag.appendChild(liTag);
    });
        
}

//Clear high scores when 'clear' is clicked
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
} document.getElementById("clear").onclick= clearHighscores;

orderHighScores();
