export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  addScore = async () => {
    await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WbWpQNfOG6YmK9JMvJlr/scores/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: this.name,
        score: this.score
      }),
    })
  }
}