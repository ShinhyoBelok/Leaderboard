const scoreUl = document.querySelector('.scoreBoard');
const displayScores = (scoresList) => {
  scoresList.sort((a, b) => b.score - a.score);
  if (!scoresList) return;
  let color;
  scoreUl.innerHTML = '';
  for (let i = 0; i < scoresList.length; i += 1) {
    if (scoresList[i].score === 'bnbnmbn') {
      i += 1;
    }
    if (i % 2 === 0) {
      color = 'color1';
    } else {
      color = 'color2';
    }
    scoreUl.innerHTML += `<li class="${color}">${scoresList[i].user}: ${scoresList[i].score}</li>`;
  }
};

export default displayScores;