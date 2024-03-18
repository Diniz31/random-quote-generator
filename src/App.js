import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({}); 


  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = () => {
    fetch('https://api.quotable.io/random') // fetching random quotes from the api 
    .then((response)=> {return response.json()})
    .then((data)=> {
      setQuoteInfo({
        // go to inspect - console - see the Object keys
        text: data.content, // content key - quote
        author: data.author, // author key - author of the quote
      })
      
    })
  }

  return (
    <div className="App">
      <div id="quote-box">
        
        <p id="text"><i class="fa fa-quote-left"> </i>{quoteInfo.text}</p>
        
        <p id="author">- {quoteInfo.author}</p>

        <a href={'https://twitter.com/intent/tweet'} title="Tweet this quote!" target="_blank" rel="noreferrer"
        id="tweet-quote"><i class="fa fa-twitter"></i></a>
       
        <button id="new-quote" onClick={getQuote}>New Quote</button>
      </div>
      
      <div id="footer">by <a href="https://github.com/Diniz31" target="_blank" rel="noreferrer" >Diniz31</a></div>
    </div>
  );
}

export default App;
