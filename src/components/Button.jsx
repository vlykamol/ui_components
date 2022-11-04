import React from 'react';

const types = {
  primary : 'bg-green-500 text-white',
  secondary : 'bg-slate-500 text-white',
  transparent: 'bg-transparent text-black border-2 border-black' 
}

export const Button = ({ type, backgroundColor, size, label, ...props }) => {
  const mode = types[type]

  return (
    <button
      type="button"
      className={`p-2 w-min rounded-sm font-mono font-extrabold cursor-pointer ${size} ${mode} ${backgroundColor}`}
      {...props}
    >
      {label}
    </button>
  );
};

