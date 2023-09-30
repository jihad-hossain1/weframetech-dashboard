"use client";

import React, { useState } from "react";


const Language = () => {
  const [language, setLanguage] = useState("");
  const languageList = [
    {
      lebel: "ENGLISH",
      
    },
    {
      lebel: "HINDI",
      
    },
    {
      lebel: "BANGLA",
      
    },
    {
      lebel: "SPANISH",
     
    },
  ];
  return (
    <>
      <form className='relative '>
        <select
          value={language}
          className='bg-[#211A75] p-1 md:px-4 md:py-3  rounded-full outline-none text-xs md:text-md'
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languageList.map(({lebel}, index) => (
            <option className='bg-transparent text-sm md:text-md' key={index} value={lebel}> 
                {lebel}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Language;
