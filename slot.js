// chapterに章番号，numに問題数
var timer, probs, absent, temp_names, names, count;
count = 0; // 回数がnumに達したらSTART押してもスロット起動しない

probs = new Array(num); // 残ってる問題の配列
for (var i = 0; i < num; i++) {
    probs[i] = i + 1;
}

absent = list.split(","); // 欠席者の配列
temp_names = ['斎藤', '野添', '堀田', '伊藤']; // デフォルトのメンバー
for (var i = 0; i < absent.length; i++) {
    if (absent[i] == 'saito') {
        delete temp_names[0];
    } else if (absent[i] == 'nozoe') {
        delete temp_names[1];
    } else if (absent[i] == 'horita') {
        delete temp_names[2];
    } else if (absent[i] == 'itoh') {
        delete temp_names[3];
    }
}
names = new Array();
for (var i = 0; i < temp_names.length; i++) {
    if (typeof temp_names[i] !== "undefined") {
        names.push(temp_names[i]);
    }
}

document.getElementById('button').onclick = function() {
    if (document.getElementById('button').value === "START") {
        // 全員欠席の場合
        if (names.length == 0) {
            alert("全員欠席って，じゃああなたは誰ですか？");
            return;
        }
        // 残ってる問題があったら
        if (count < num) {
            runSlot();
            count++;
            document.getElementById('button').value = "STOP";
        } else {
            alert("残ってる問題がありません！");
            return;
        }
    } else {
        stopSlot();
        document.getElementById('button').value = "START";
    }
};

function stopSlot() {
    clearTimeout(timer);
    for (var i = 0; i < probs.length; i++) {
        if (probs[i] == document.getElementById('num').innerHTML) {
            delete probs[i];
        }
    }

    document.getElementById('table').rows[0].cells[document.getElementById('num').innerHTML].innerHTML = "";
    // TODO ストップ後の処理，php呼び出してDBにデータ追加
}

function runSlot() {
    // 解いた問題を取り除く処理
    var temp_probs = new Array();
    for (var i = 0; i < probs.length; i++) {
        if (typeof probs[i] !== "undefined") {
            temp_probs.push(probs[i]);
        }
    }

    document.getElementById('num').innerHTML = temp_probs[Math.floor(Math.random() * temp_probs.length)];
    document.getElementById('people').innerHTML = names[Math.floor(Math.random() * names.length)];

    timer = setTimeout(function() {
        runSlot();
    }, 1000);
}
