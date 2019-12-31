const chars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

chars.forEach(char1 => {
  chars.forEach(char2 => {
    document.write(`<p>${char1}${char2}</p>`)
  });
});
