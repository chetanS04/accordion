"use client"
import React, { useState } from 'react';
import Accordion from './Components/Accordion';

const Page = () => {
  
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null); // close the accordion
    }
    // otherwise open the clicked accordion
    setOpen(index);
  };

  const accordion_data = [
    {
      title: "Who is the best frontend designer?",
      des: "RAM RAM RAM RAM RAM ARAM RAM",
    },
    {
      title: "Who is the best frontend designer?",
      des: "RAM RAM RAM RAM RAM ARAM RAM",
    },
    {
      title: "Who is the best frontend designer?",
      des: "RAM RAM RAM RAM RAM ARAM RAM",
    },
  ];

  return (
    <div>
      {accordion_data.map((data, index) => (
        <Accordion
          toggle={() => toggle(index)}
          title={data.title}
          des={data.des}
          key={index}
          open={index === open} // accordion is open if the index matches open
        />
      ))}
    </div>
  );
};

export default Page;
