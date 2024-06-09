"use client";
import React from "react";
import Figma from "../../public/assets/Figma.svg";
const SecondaryButton = () => {
    return (
        <div className=" font-geist shadow-inner-custom-1 px-3.5 py-2 border-[1px] rounded-xl border-zinc-100 flex flex-row gap-2 w-fit justify-center items-center ">
            <Figma />
            Preview
        </div>
    );
};

export default SecondaryButton;
