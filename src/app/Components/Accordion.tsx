import React from 'react';

interface AccordionProps {
  open: boolean;
  title: string;
  toggle: () => void;
  des: string;
}

const Accordion: React.FC<AccordionProps> = ({ open, title, toggle, des }) => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <div
        onClick={toggle}
        className="flex justify-between items-center cursor-pointer p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-300"
      >
        <p className="text-lg font-semibold text-gray-800">{title}</p>
        <div className="text-xl text-gray-600">{open ? '-' : '+'}</div>
      </div>
      {open && (
        <div className="mt-2 p-4 bg-white rounded-md shadow-md">
          <p className="text-gray-700">{des}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
