import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [activeKey, setActiveKey] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const letter = event.key.toUpperCase()
      const arr = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
      if(arr.includes(letter)){
        playSound(letter)
      }
    })
  }, [])

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      title: 'Heater 1'
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      title: 'Heater 2'
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      title: 'Heater 3'
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      title: 'Heater 4'
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      title: 'Clap'
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      title: 'Open-HH'
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      title: 'Kick-n-Hat'
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      title: 'Kick'
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      title: 'Closed-HH'
    },
  ];

  function playSound(selector, title) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(title)
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <div
              onClick={() => {
                playSound(drumPad.text, drumPad.title);
              }}
              key={drumPad.keyCode}
              className="drum-pad"
              id={drumPad.src}
            >
              {drumPad.text}
              <audio
                src={drumPad.src}
                id={drumPad.text}
                className="clip"
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
