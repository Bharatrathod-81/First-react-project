import React, { useState } from "react";
import "./styles.css";
var emojiDic = {
  "🤩": "Star-Struck",
  "😗": "Kissing Face",
  "🤥": "Lying Face",
  "😪": "Sleepy Face",
  "🥶": "Cold Face",
  "😫": "Tired Face"
};
var emojiList = Object.keys(emojiDic);

var heading = "inside out";
var color = "blue";
export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeCatch(event) {
    var meaning = emojiDic[event.target.value];
    setMeaning(meaning);
    if (meaning === undefined) {
      setMeaning("this emoji is not in our library");
    }
  }
  function clickCatch(emoji) {
    var meaning = emojiDic[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ background: color }}>{heading}</h1>
      <input onChange={changeCatch}></input>
      <h2>{meaning}</h2>
      <h3>emoji we have</h3>
      {emojiList.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => clickCatch(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
