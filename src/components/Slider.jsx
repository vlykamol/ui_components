import React, { useState } from "react";
import ProductCard from "./ProductCard";

const urls = [
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider34s.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Property-267.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider34s.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Property-267.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider34s.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp",
  "https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Property-267.webp",
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-slate-300">
      <div className="flex w-5/6 relative overflow-hidden">
        <div className="absolute w-20 h-full left-0 bg-gradient-to-r from-white via-white/80 to-white/25 flex justify-center items-center z-10">
          <button
            className={`font-bold text-3xl p-8`}
            onClick={() => setIndex(i => (i = (i + 1) % urls.length))}>
            &#60;
          </button>
        </div>
        <div className={`flex -translate-x-${index}/10`}
          style={{'transform': `translateX(${index * (100/urls.length)}%)`}}
        >
        {urls.map((u, i) => {
          return <ProductCard key={i} uri={u} />;
        })}
        </div>
        <div className="absolute w-20 h-full right-0 bg-gradient-to-l from-white via-white/80 to-white/25 flex justify-center items-center">
        <button className="font-bold text-3xl p-8 w-full h-full" onClick={() => setIndex(i => (i = (i - 1) < 0 ? urls.length - 1 : (i-1)))}>
        &#62;
        </button>
        </div>
      </div>
    </div>
  );
}
