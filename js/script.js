const canvasElement = document.querySelector('canvas');

const game = new Game(canvasElement);

const triggerPlayElement = document.getElementById('trigger-play');
const triggerPlayAgainElement = document.getElementById('trigger-play-again');

const screenStartElement = document.getElementById('screen-start');
const screenGameOverElement = document.getElementById('screen-game-over');
const screenPlayElement = document.getElementById('screen-play');

triggerPlayElement.addEventListener('click', () => {
  screenStartElement.style.display = 'none';
  screenPlayElement.style.display = 'initial';

  game.loop();
});

triggerPlayAgainElement.addEventListener('click', () => {
  debugger;
  screenGameOverElement.style.display = 'none';
  screenPlayElement.style.display = 'initial';

  game.reset();
  game.loop();
});
