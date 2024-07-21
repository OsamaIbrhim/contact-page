'use client'

import { useState } from 'react'

export default function Accordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const items = [
    {
      id: 1,
      title: 'How does the implementation of 3D look?',
      content: "There are multiple 3D model uses. Creating CGI images for your product showcase requires no implementation; we will deliver the final, ready-to-use image for you. As for the Augmented Reality experience, the process is simple: we will generate an embeddable link or a QR code of your 3D product model, which you'll be able to add to your website or offline media. No additional coding, software, or extensions are needed."
    },
    {
      id: 2,
      title: 'How will I know how many views my 3D viewers have generated?',
      content: "You can see statistics regarding the view count on each 3D viewer in your Modelry dashboard."
    },
    {
      id: 3,
      title: 'How AR and 3D Models can benefit your business?',
      content: "The convergence rate increases by 35-65% when you use AR and 3D Modeling in your business"
    },
    {
      id: 4,
      title: 'What do I need to have a 3D model created?',
      content: "To have your 3D model created, you need to send us your product images or URLs showing your products in many different angles and product dimensions. We will take it from there."
    }
  ];

  const handleClick = (index: number) => {
    setOpenIndexes(prevState =>
      prevState.includes(index) 
        ? prevState.filter(i => i !== index)
        : [...prevState, index]
    );
  };

  return (
    <div className="bg-[#151329] border border-[#282545] rounded-[20px]">
      {items.map((item, index) => (
        <div key={item.id} className="bg-[#151329] p-4">
          <h2>
            <button
              className="flex items-center justify-between w-full text-left font-semibold text-white py-2"
              onClick={() => handleClick(index)}
              aria-expanded={openIndexes.includes(index)}
              aria-controls={`accordion-text-${item.id}`}
            >
              <svg className={`fill-indigo-500 shrink-0 mr-4 transition-transform duration-300 ${openIndexes.includes(index) ? 'rotate-45' : 'rotate-0'}`} width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="7" width="14" height="2" rx="1" />
                <rect x="7" y="1" width="2" height="14" rx="1" />
              </svg>
              <span className=''>{item.title}</span>
            </button>
          </h2>
          <div
            id={`accordion-text-${item.id}`}
            role="region"
            aria-labelledby={`accordion-title-${item.id}`}
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndexes.includes(index) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="overflow-hidden text-[#2A2A1B7]">
              <p className="text-slate-400 text-sm mt-2">
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}