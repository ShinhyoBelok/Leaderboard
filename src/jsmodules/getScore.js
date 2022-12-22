import displayScores from './displayScores.js';

const gameId = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WbWpQNfOG6YmK9JMvJlr/scores/';

const getScore = async () => {
  await fetch(gameId, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      displayScores(data.result);
    });
};
export default getScore;