---
title: "猫とタピオカ"
linkTitle: "Nekotapi"
date: 2019-09-05T12:42:56+09:00
draft: false
---

### 概要
個人で作ったゲームです。猫とタピオカを大量に集めることを目指します。最大1000個くらい集めることができるかと思います。<br>
<a href="https://game.tanikawaichi.work/nekotapi/title">こちら</a>から遊べます。

プレイ動画↓(ファイルサイズを小さくするため、画質が悪くなっています)


<video src="nekotapimovie1.mov" controls></video>

### なぜ作ったか
吉田が開催したイベント{{% static_a href="/event/pyxel" %}}「初心者のためのレトロゲームを作ってみようの会」{{% /static_a %}}にて{{% static_a href="/program/pyxelgame" %}}吉田が制作しかけたゲーム{{% /static_a %}}が好評でした。せっかくなので完成させることにしました。

### 一番工夫した点
- 遊んで面白いための、適度な猫とタピオカが出てくるペースの調整に、一番苦心しました。
    - 面白いためには遊んでいてハラハラすることが大事と考えた。なので、だんだんと難易度を上げていくようにしたかった。そのため、終盤になる程、猫とタピオカの登場ペースをあげようと考えた。
    - が、増える度合いを適切に調整することが難しかった。少なすぎると見た目にも迫力がないし、増加の度合いを大きくしすぎると、CPUの処理能力の限界を簡単に超えてしまう。また、速度の調整にも難儀した。
    - 失敗した際の動画を以下に載せます<br><br>
    増加が早すぎたバージョン<br>
    <video src="nekotapimovie2.mov" controls></video><br>
    さらに増加を早くしてしまったバージョン<br>
    <video src="nekotapimovie3.mov" controls></video><br>
    動くスピードの調整を誤ったバージョン<br>
    <video src="nekotapimovie4.mov" controls></video><br>

### 技術的なエピソード
- railsでスコアサーバを作りました。
    - なんども遊びたくなるためには、スコアを保存して人と比較し、順位をあげようと思うことが重要ではと考えた。そのため、周囲に詳しい人の多かったrailsでスコアサーバを作りました。
- JavaScriptのゲームフレームワーク"Phina.js"を用いています
