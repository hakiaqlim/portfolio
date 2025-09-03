import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {

  const [expandedItems, setExpandedItems] = useState({});

  const toggleReadMore = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const data = [
    {
      id: 1,
      img: ['https://cdn-icons-png.freepik.com/256/16108/16108614.png?semt=ais_hybrid'],
      title: 'Web development',
      desc: 'I provide end-to-end web development services using the MERN stack (MongoDB, Express.js, React.js, Node.js). From building responsive frontends to scalable backends, I deliver full-stack solutions tailored to client needs.',
      read: 'Read More',
      icon: <FaArrowRight />,
    },
    {
      id: 2,
      img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCN30wWvm86Tyv2iLBUMdLFZWPVQCQHTa3g&s'],
      title: 'Ms Office',
      desc: 'I have 3 years of experience teaching Microsoft Office (Word, Excel, PowerPoint, Outlook) to students and professionals. My hands-on approach helped learners gain practical skills in document creation, data analysis, and presentations. This role also strengthened my communication and problem-solving abilities, supporting my work as a developer.',
      read: 'Read More',
      icon: <FaArrowRight />,
    },
    {
      id: 3,
      img: ['https://cdn6.aptoide.com/imgs/4/c/c/4cce940bee05174a3df29207e60a2bbf_icon.png'],
      title: 'CV & Document Designer',
      desc: 'I have 3 years of experience in creating academic papers and professional CVs using MS Word. I am skilled in formatting, layout design, and making documents visually appealing and well-structured.',
      read: 'Read More',
      icon: <FaArrowRight />,
    },
  ]

  return (
    <div id='services' className='text-white md:mx-20 p-6'>
      <h2 className='text-white text-center text-3xl font-semibold mb-4'>My Services</h2>
      <div className='grid text-white sm:grid-cols-2 md:grid-cols-3'>
        {data.map((item) => {
          const isExpanded = expandedItems[item.id];
          const shortDesc = item.desc.length > 100 ? item.desc.slice(0, 100) + '...' : item.desc;

          return (
            <div key={item.id} className='p-8 flex flex-col gap-3 justify-center transition hover:scale-[1.05] hover:bg-[#374151] bg-gray-800 m-2 rounded-lg'>
              <img src={item.img[0]} width={60} className='rounded-full' alt="" />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm mb-4">{isExpanded ? item.desc : shortDesc}</p>
              <div
                onClick={() => toggleReadMore(item.id)}
                className="flex items-center gap-2 text-purple-400 cursor-pointer"
              >
                <span>{isExpanded ? 'Show Less' : item.read}</span>
                {item.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Services
