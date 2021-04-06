import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic (props){
  console.log(props.phonetic);
  return(
  <div className="Phonetic">
    <ReactAudioPlayer
  src= {props.phonetic.audio}
  onPlay
  controls
/>
    <p>{props.phonetic.text}</p>

  </div>
  )
}