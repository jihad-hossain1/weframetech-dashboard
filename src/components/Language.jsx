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
      <form className='relative'>
        <select
          value={language}
          className='bg-[#211A75] px-4 py-3  rounded-full outline-none'
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languageList.map(({lebel}, index) => (
            <option className='bg-transparent' key={index} value={lebel}> 
                {lebel}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Language;
