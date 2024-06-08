"use client";

import React from "react";
import Product_Hunt_Badge from "../../public/Product_Hunt_Badge.svg";

import HeroImg from "../../public/heroimg.svg";

const Hero = () => {
    return (
        <div className="p-4 flex flex-col gap-2 items-center justify-center md:scale-150 text-center overflow-hidden">
            <Product_Hunt_Badge className="mb-4 md:scale-125" />
            <div className="flex flex-col gap-1">
                <h1 className="font-cabinet-grotesk font-bold text-4xl text-brand_black">
                    Build Exceptional User <span>Interfaces, </span>
                    <span className="text-brand">Effortlessly</span>
                </h1>
                <h1 className="font-geist font-medium text-xs text-gray">
                    FlexUI empowers you to create stunning, high-performance UI components
                    with ease. Focus on your unique features while our battle-tested
                    components handle the rest
                </h1>
            </div>

            <HeroImg />
        </div>
    );
};

export default Hero;
