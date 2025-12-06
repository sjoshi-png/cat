import React, { useState } from "react";
import CatGenerator from "./components/CatGenerator";
import CatRecords from "./components/CatRecords";
import CursorFollower from "./components/CursorFollower";
import './App.css';

export default function App() {
  const [currentTab, setCurrentTab] = useState("generate");
  const [duiCats, setDuiCats] = useState([]);
  const [innocentCats, setInnocentCats] = useState([]);

  return (
    <div className="app-container">
      <CursorFollower cursorImage="/images/my-cursor.png" />

      <header>
        <h1>Cat DUI System 😼</h1>
      </header>

      <div className="buttons">
        <button className="generate_button" onClick={() => setCurrentTab("generate")}>
          Generate Cats
        </button>
        <button className="records_button" onClick={() => setCurrentTab("records")}>
          Cat Records
        </button>
      </div>

      {currentTab === "generate" && (
        <CatGenerator
          addDuiCat={(cat) => setDuiCats([...duiCats, cat])}
          addInnocentCat={(cat) => setInnocentCats([...innocentCats, cat])}
        />
      )}

      {currentTab === "records" && (
        <CatRecords duiCats={duiCats} innocentCats={innocentCats} />
      )}
    </div>
  );
}
