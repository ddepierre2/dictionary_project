import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic (props){
  return(
  <div className="Phonetic">
    <ReactAudioPlayer
  src= {props.phonetic.audio}
  className="audio-player"
  onPlay
  controls
/>
    <p className="pronounce">{props.phonetic.text}</p>

  </div>
  )
}