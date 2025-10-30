"use client"
import React from 'react';
import Image from 'next/image';
import ModelLogo from "@/../public/logo.png"

export default function LoadingModal() {
  return (
    <div className="top-0 left-0 z-50 fixed flex bg-black/80 w-screen md:w-full h-full min-h-screen">
      <div className='flex justify-center items-center bg-cover backdrop-blur-md px-8 py-20 w-full h-screen'>
        <div className='top-0 left-0 relative bg-[#526fff] shadow-lg mx-auto rounded-2xl w-32 h-32 rotate-45 skew-y-0 transform'>
          <Image src={ModelLogo} alt="ModelLogo" className='top-8 left-0 z-10 relative mx-auto rounded-full w-16 -rotate-45' />
          <div
            className={`inline-block h-[74px] w-[74px] animate-spin text-text_color-200 rounded-full border-8 border-solid border-[#f33eea] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] -mt-[35.5px] ml-[26.5px]`}
            role="status">
            <span
              className="!absolute !-m-px !p-0 !border-0 !w-px !h-px !overflow-hidden !whitespace-nowrap ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

