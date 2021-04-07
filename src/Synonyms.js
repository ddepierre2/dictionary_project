import React from "react";
import "./Synonyms.css";


export default function Synonyms(props){
if (props.synonyms) {
  return (
    <div className="Synonyms">
      <h3 className="synonyms-title">Synonyms: </h3>
    {props.synonyms.map(function (synonym, index) {
      return (
      <ul key={index}>
        <li>{synonym}</li>
      </ul>
      )
    })}
  </div>
  );
} else{
  return null;
}










}