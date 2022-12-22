const scoreUl = document.querySelector('.scoreBoard');
const displayScores = (scoresList) => {
  scoreUl.innerHTML = '';
  scoresList.forEach(score => {
    scoreUl.innerHTML += `<li>${score.user}: ${score.score}</li>`
  });
}

export default displayScores;