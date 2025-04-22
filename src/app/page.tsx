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
      des: "What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Who is the best frontend designer?",
      des: "What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
