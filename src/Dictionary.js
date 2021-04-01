import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary (){
  let [keyword, setKeyword] = useState("");
   
  function search(event){
     event.preventDefault();
      alert(`Searching for ${keyword}`)
    }
  function keywordSearch(event){
    setKeyword(event.target.value);
    }

  return (
  <div className="Dictionary">
   
  <form onSubmit={search}>
    <input type="search" placeholder="Type a word" onChange={keywordSearch} />
  </form>

  </div>
)
}