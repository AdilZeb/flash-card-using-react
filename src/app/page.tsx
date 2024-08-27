"use client";
import Image from "next/image";
import { useState } from "react";
const data = [
  {
    id: 1,
    question: "What is the capital of India?",
    answer: "Delhi",
  },
  {
    id: 2,
    question: "What is the capital of pakistan",
    answer: "Islamabad",
  },
  {
    id: 3,
    question: "What is the capital of punjab",
    answer: "lahore",
  },
  {
    id: 4,
    question: "What is the capital of kpk",
    answer: "peshawar",
  },
];
export default function Home() {
  const [selectdId, setSelected] = useState(null);
  return (
    <div className="flex  items-center justify-center min-h-screen py-2">
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <div
            onClick={() => setSelected(item.id !== selectdId ? item.id : null)}
            key={item.id}
            className={`${
              selectdId == item.id ? "bg-red-400" : ""
            } w-[10rem] h-[10rem] border border-slate-200 p-5`}
          >
            <p>{selectdId == item.id ? item.answer : item.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
