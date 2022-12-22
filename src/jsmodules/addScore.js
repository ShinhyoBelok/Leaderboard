import getScore from './getScore.js';

const gameId = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WbWpQNfOG6YmK9JMvJlr/scores/';
export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  addScore = async () => {
    await fetch(gameId, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: this.name,
        score: this.score,
      }),
    });
    await getScore();
  }
}
