"use client";
import React, { useRef, useEffect, useState } from "react";

const page = () => {
  const userInputRef = useRef(null);
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  useEffect(() => {
    const today = new Date();
    const maxDate = today.toISOString().split("T")[0];
    if (userInputRef.current) {
      userInputRef.current.max = maxDate;
    }
  }, []);

  const calculateAge = () => {
    let birthDate = new Date(userInputRef.current.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDayInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
    console.log(y3, m3, d3);
    setAge({ years: y3, months: m3, days: d3 });
  };

  return (
    <div>
      <div className="cantainer w-[100%] min-h-[100vh] text-[#fff] p-[10px] ">
        <div className="calculator  w-[100%] max-w-[600px] ml-[10%] mt-[10%]">
          <h1 className="text-[60px] font-bold ">
            Next-JS <br />
            <span className="text-[#ffff76]">Age Calculator</span>
          </h1>
          <div className="input-box mt-10 mb-10 p-7 rounded-xl flex  items-center ">
            <input
              className="text-black flex-1 mr-5 px-5 py-3 border-0 outline-0 text-[18px] rounded-[5px] relative "
              type="date"
              id="date"
              ref={userInputRef}
            />
            <button
              onClick={calculateAge}
              className="bg-[#ffff76] hover:bg-yellow-200 duration-300 border-none outline-none py-[15px] px-[30px] rounded-[5px] font-medium text-[#333] cursor-pointer"
            >
              Calculate
            </button>
          </div>
          <p className="text-xl" >Yor are <span>{age.years}</span> Year's <span>{age.months}</span> Months and <span>{age.days}</span> Days old</p>
        </div>
      </div>
    </div>
  )
}

export default page

 