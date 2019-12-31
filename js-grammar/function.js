// 「JavaScriptでの計算」における練習問題 では、 「半径 12 cmの円の面積が何平方cmかを HTML に出力するプログラム」を書いてみました。

// 今回は、どのような半径に対しても面積を求められる関数を作りましょう。そして、その関数を用いて半径 5cm, 10cm, 15cm の円の面積をHTML に出力するプログラムを書いてみましょう。
// （円の面積は 半径 × 半径 × 3.14 で求められます。）

const pi = 3.14;

function area(radius) {
  return radius * radius * pi;
}

document.write(`<p>半径5cmの円の面積は${area(5)}cm<sup>2</sup></p>`);
document.write(`<p>半径10cmの円の面積は${area(10)}cm<sup>2</sup></p>`);
document.write(`<p>半径15cmの円の面積は${area(15)}cm<sup>2</sup></p>`);
