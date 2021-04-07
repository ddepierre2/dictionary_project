import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1>Dictionary</h1>
       <h3>Type a word to look up in the dictionary</h3>
      </header>
      <main>
        <Dictionary />
      </main>

      <footer className="signature"><small><a href="https://github.com/ddepierre2/dictionary_project" 
      target="_blank" rel="noreferrer">Open source code</a> created by  
      <a href="https://www.linkedin.com/in/ddepierre/" 
      target="_blank" rel="noreferrer"> Dana De Pierre</a>
      </small></footer>
    </div>
    </div>
  );
}