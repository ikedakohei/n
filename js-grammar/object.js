let game = {
  startTime: null,
  displayArea: document.getElementById('display-area'),
  start: () => {
    game.startTime = Date.now();
    document.body.onkeypress = game.stop;
  },
  stop: () => {
    const currentTime = Date.now();
    const seconds = (currentTime - game.startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
      game.displayArea.innerText = seconds.toFixed(1) + '秒でした。すごい。';
    } else {
      game.displayArea.innerText = seconds.toFixed(1) + '秒でした。残念。';
    }
  }
};

if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
  game.start();
}
