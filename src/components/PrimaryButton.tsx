"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

const PrimaryButton = () => {
    return (
        <div className=" shadow-inner-custom-2 bg-brand items-center justify-center text-white font-geist px-3.5 py-2 border-[1px] rounded-xl border-zinc-100 flex flex-row gap-1.5 w-fit">
            Buy Now
            <ChevronRight />
        </div>
    );
};

export default PrimaryButton;
