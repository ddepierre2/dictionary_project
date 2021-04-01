import React from "react";

export default function Definition (props){
if (props.definition){
  return(
    <div className="Definition">
     <h2>{props.definition.word}</h2>
     {props.definition.meanings.map(function(meaning, index){
      return meaning.definitions[0].definition;

     })}

    </div>
  );
} else {
  return null;
}
}