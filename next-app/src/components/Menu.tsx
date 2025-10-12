import React from "react";

export default function Menu({ title }: { title: string }) {
  return (
    <div>
      <button className="bg-green-500 text-white p-4 rounded-xl cursor-pointer">{title}</button>
    </div>
  );
}
