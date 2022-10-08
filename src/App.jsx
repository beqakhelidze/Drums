import { useState, useCallback } from "react";
import React from "react";
import { SoundObject } from "./public";
import MemoizedButton from "./Components/Button";
import MemoizedController from "./Components/Controller";
import "./App.scss";

const App = () => {
  const [SoundType, SetSoundType] = useState("Drum");

  const [Turned, setPosition] = useState(true);

  const [Action, setAction] = useState("");

  const [Volume, setVolume] = useState(0.5);

  const Sound = (url) => {
    const audio = new Audio(url);
    audio.volume = Volume;
    audio.play();
  };

  const KeyUpVoid = (event, SoundType, callback) => {
    const Key = event.key.toUpperCase();
  
    const value = SoundObject[SoundType].find((x) => {
      return x.name === Key;
    });
  
    if (value) {
      Sound(value.url);
      callback(value.id);
    }
  };

  const ChangeSoundType = () => {
    if (SoundType === "Drum") {
      document.removeEventListener("keydown", Listener, true);
      if (Turned) {
        setAction("Piano");
      }
      SetSoundType("Piano");
    } else {
      document.removeEventListener("keydown", Listener, true);
      if (Turned) {
        setAction("Drum");
      }
      SetSoundType("Drum");
    }
  };

  const ChangePosition = () => {
    if (Turned) {
      setPosition(false);
      setAction("Powered Off");
    } else {
      setAction("Powered On");
      setPosition(true);
    }
  };

  const Listener = useCallback(
    (event) => {
      KeyUpVoid(event, SoundType, setAction);
    },[SoundType]
  );

  if (Turned) {
    document.addEventListener("keydown", Listener, true);
  } else {
    document.removeEventListener("keydown", Listener, true);
  }

  return (
    <div id="drum-machine">
      <div id="DrumSounds">
        {SoundObject[SoundType].map((x) => (
          <MemoizedButton
            key={x.id}
            obj={x}
            Turned={Turned}
            setAction={setAction}
            Sound={Sound}
          />
        ))}
      </div>

      <MemoizedController
        ChangeSoundType={ChangeSoundType}
        setAction={setAction}
        Action={Action}
        Turned={Turned}
        ChangePosition={ChangePosition}
        setVolume={setVolume}
      />
    </div>
  );
};
export default App
