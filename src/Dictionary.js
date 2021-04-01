import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition"
import "./Dictionary.css";


export default function Dictionary (){
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState (null);
   
function handleResponse(response){
console.log(response.data[0]);
setDefinition(response.data[0]);
}

  function search(event){
     event.preventDefault();
      let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
       axios.get(apiUrl).then(handleResponse);
    }

    
  function keywordSearch(event){
    setKeyword(event.target.value);
    }

  return (
  <div className="Dictionary">
   
  <form onSubmit={search}>
    <input type="search" placeholder="Type a word" onChange={keywordSearch} />
  </form>

  <Definition result={definition} />

  </div>
)
}