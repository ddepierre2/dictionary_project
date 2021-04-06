import React, { useState } from "react";
import axios from "axios";
import Results from "./Results"
import "./Dictionary.css";


export default function Dictionary (){
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState (null);
   
function handleResponse(response){
    setResults(response.data[0]);
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
   <section>
  <form onSubmit={search}>
    <div className="form-row">
    <div className="col-6">
    <input type="text" className="form-control" placeholder="Type a word" onChange={keywordSearch} />
    </div>
    <div className="col-3">
    <button type="button" className="btn">Search</button>
    </div>
    </div>
  </form>
  </section>
  <Results results={results} />

  </div>
)
}         