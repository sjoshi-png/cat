import React, { useState } from "react";

export default function CatRecords({ duiCats, innocentCats }) {
  const [duiIndex, setDuiIndex] = useState(0);
  const [innocentIndex, setInnocentIndex] = useState(0);
  
  return (
    <div className="gallery">
      <div className="dui-background"></div>
      <div className="innocent-background"></div>
      
      {/* DUI CATS */}
      <div className="gallery-column">
        <h2>DUI Cats</h2>
        {duiCats.length > 0 ? (
          <>
            <div className="record-image-box">
              <img
                src={duiCats[duiIndex]}
                className="record-cat-image"
                alt="DUI Cat"
              />
            </div>
            <div className="arrows">
              <button
                className="arrow-btn"
                onClick={() =>
                  setDuiIndex((duiIndex - 1 + duiCats.length) % duiCats.length)
                }
              >
                ⬅
              </button>
              <button
                className="arrow-btn"
                onClick={() =>
                  setDuiIndex((duiIndex + 1) % duiCats.length)
                }
              >
                ➡
              </button>
            </div>
          </>
        ) : (
          <p>No DUI cats yet!</p>
        )}
      </div>

      {/* INNOCENT CATS */}
      <div className="gallery-column">
        <h2>Innocent Cats</h2>
        {innocentCats.length > 0 ? (
          <>
            <div className="record-image-box">
              <img
                src={innocentCats[innocentIndex]}
                className="record-cat-image"
                alt="Innocent Cat"
              />
            </div>
            <div className="arrows">
              <button
                className="arrow-btn"
                onClick={() =>
                  setInnocentIndex(
                    (innocentIndex - 1 + innocentCats.length) %
                    innocentCats.length
                  )
                }
              >
                ⬅
              </button>
              <button
                className="arrow-btn"
                onClick={() =>
                  setInnocentIndex((innocentIndex + 1) % innocentCats.length)
                }
              >
                ➡
              </button>
            </div>
          </>
        ) : (
          <p>No innocent cats yet!</p>
        )}
      </div>
    </div>
  );
}