import { Carousel } from "@material-tailwind/react";
import thecircuit from '../images/thecircuit.jpeg';
import inheritance from '../images/inheritance.jpeg';
import levelup from '../images/levelup.jpg';
 
export default function Home() {
  return (
    <div>
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={thecircuit}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={inheritance}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={levelup}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
  );
}
