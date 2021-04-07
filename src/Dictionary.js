import React, { useState } from "react";
import axios from "axios";
import Results from "./Results"
import Photos from "./Photos";
import Loader from "react-loader-spinner";
import "./Dictionary.css";


export default function Dictionary (){
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState (null);
  let [loaded, setLoaded] = useState (false);
  let [photos, setPhotos] = useState (null);
   
function handleResponse(response){
    setResults(response.data[0]);
}
function handleResponsePexels(response){
setPhotos(response.data.photos);
}

function search(){
      let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
       axios.get(apiUrl).then(handleResponse);

     let pexelsApiKey="563492ad6f91700001000001dd3c45dc055d446fb7f442a2aaa200cc";
     let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=15`;
     let headers = {Authorization: `Bearer ${pexelsApiKey}` }
     axios.get(pexelsApiUrl, { headers: headers }).then(handleResponsePexels);
}

  function handleSubmit(event){
    event.preventDefault();
    search();
    }

    
  function keywordSearch(event){
    setKeyword(event.target.value);
    }

   function load (){
      setLoaded(true);
      search();
   } 

if (loaded){
  return (
    <div className="Dictionary">
      <section>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col-6">
                <input type="text" className="form-control" 
                placeholder="Type a word: eg. wine, skiing, camping, etc." onChange={keywordSearch} />
              </div>
              <div className="col-3">
                <button type="button" className="btn">Search</button>
              </div>
            </div>
          </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
  } else {
      load();
        return (
      <Loader
        type="Grid"
        color="#353643"
        height={80}
        width={80}
        timeout={3000}
      />
        )
  }
}         