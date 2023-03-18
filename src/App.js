import Header from './Components/Header';
import Genre from './Components/Genre';
import List from './Components/List';
import './Style.css';
import { useState } from 'react';

function App() {
  const [keyword,setkeyword] = useState("");
  const handleClick =(event)=>{
    console.log("Filtering by",event.target.name);
    setkeyword(event.target.name);
  }
  return (
    <div className="App">
      <Header/>
      <Genre onClick={handleClick}/>
      <List keyword={keyword}/>
    </div>
  );
}

export default App;
