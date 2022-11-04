import React from "react";

export default function ProductCard(props) {
  const {uri} = props
  return (
    <div className="w-80 h-auto flex flex-col p-4">
      <img
        src={uri}
        alt="chalet"
        className="rounded-lg"
      />
      <div className="">
        <h2 className="text-lg font-medium">
          Chalet in Pocono for family Reunions & Parties (109)
        </h2>
        <div className="flex gap-2 justify-start items-baseline pt-6">
          <div className="flex justify-center items-center gap-1">
            <span className="material-symbols-outlined text-black">work</span>
            <p>14+</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <span className="material-symbols-outlined">night_shelter</span>
            <p>4</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <span className="material-symbols-outlined">bathtub</span>
            <p>2</p>
          </div>
        </div>
        <h3 className="py-1 ">FROM</h3>
        <div className="flex gap-1 items-baseline">
          <div className="font-bold">$ 850.00</div>
          <p>per night</p>
        </div>
      </div>
    </div>
  );
}
