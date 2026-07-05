import { useMemo } from "react";
import Card from "./Card";

const CardCarousel = ({ cards, speed = 80 }) => {
  const duplicatedCards = [...cards, ...cards, ...cards];

  const yOffsets = useMemo(
    () => cards.map(() => (Math.random() * 120 - 60).toFixed(0)),
    [],
  );

  return (
    <section id="events" className="hero-gradient-bg flex overflow-hidden h-screen items-center">
      <div
        className="carousel-track"
        style={{ animation: `carousel-scroll ${speed}s linear infinite` }}
      >
        {duplicatedCards.map((card, index) => (
          <Card
            key={index}
            {...card}
            style={{ transform: `translateY(${yOffsets[index % cards.length]}px)` }}
          />
        ))}
      </div>
    </section>
  );
};

export default CardCarousel;
