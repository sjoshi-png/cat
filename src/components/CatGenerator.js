import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function CatGenerator({ addDuiCat, addInnocentCat }) {
  const [catUrl, setCatUrl] = useState("");

  async function getNewCat() {
    const response = await fetch("https://cataas.com/cat/gif");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setCatUrl(url);
  }

  function handleDuiClick(url) {
    addDuiCat(url);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Continuous fireworks
  useEffect(() => {
    console.log("Confetti effect started");
    
    const interval = setInterval(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 800);

    return () => {
      console.log("Confetti effect cleaned up");
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hello">
      <div>
        <button className="button" onClick={getNewCat}>
          Next Cat
        </button>
        {catUrl && (
          <div>
            <img
              src={catUrl}
              alt="Random Cat"
              style={{ width: "300px", marginTop: "20px", borderRadius: "20px" }}
            />
            <div className="buttons">
              <button className="button" onClick={() => handleDuiClick(catUrl)}>
                Issue DUI!
              </button>
              <button className="button" onClick={() => addInnocentCat(catUrl)}>
                Seems Innocent
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}