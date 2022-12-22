import './style.css';
import Score from './jsmodules/addScore.js';
import getScore from './jsmodules/getScore.js';

const submitBtn = document.querySelector('.submitBtn');
const refreshBtn = document.querySelector('.refresh');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('.name');
  const score = document.querySelector('.score');
  if (!name.value || !score.value) return;
  const newScore = new Score(name.value, score.value);
  newScore.addScore();
  name.value = '';
  score.value = '';
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getScore();
});

window.addEventListener('load', () => {
  getScore();
});