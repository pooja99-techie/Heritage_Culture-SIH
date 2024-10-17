import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CulturalHeritageSlider.css";

const CulturalHeritageSlider = ({ heritages }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const groupItems = (items, groupSize) => {
    return items.reduce((acc, curr, index) => {
      if (index % groupSize === 0) {
        acc.push([]);
      }
      acc[Math.floor(index / groupSize)].push(curr);
      return acc;
    }, []);
  };

  const groupedHeritages = groupItems(heritages, 5);

  return (
    <div className="slider-container">
      <h1>Highlights</h1>
      <Carousel
        showThumbs={false}
        showArrows={true}
        infiniteLoop
        interval={5000}
        transitionTime={600}
      >
        {groupedHeritages.map((group, groupIndex) => (
          <div key={groupIndex} style={{ display: "flex" }}>
            {group.map((heritage, index) => (
              <div
                key={index}
                className={`card ${flippedIndex === index ? "flipped" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-front">
                  <img
                    className="heritage-image"
                    src={heritage.image}
                    alt={heritage.name}
                  />
                  <h3 className="heading">{heritage.name}</h3>
                </div>
                <div className="card-back">
                  <p>{heritage.info}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CulturalHeritageSlider;
