// 15 歳以下は 800 円、ポイント会員の場合には 1000 円、 そうではない場合には 1800 円の映画のチケットがあります。
// 年齢と会員であるかどうかを変数に代入すると、チケットの値段を教えてくれるプログラムを書いてみましょう。
// なお、15 歳以下かつ会員の場合には、 800 円 になるものとします。
// 例として、16 歳の会員のチケットの値段を出して下さい。

const age = 16;
const isMember = true;
let price = null;

if (age <= 15) {
  price = 800;
} else if (isMember == true) {
  price = 1000;
} else {
  price = 1800;
}

document.write(price);
