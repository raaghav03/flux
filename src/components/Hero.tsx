"use client";

import React from "react";
import Product_Hunt_Badge from "../../public/assets/Product_Hunt_Badge.svg";
import HeroImg from "../../public/assets/heroimg.svg";
import Grid from "../../public/assets/grid.svg"

const Hero = () => {
    return (
        <>
            <Grid className="bg-auto" />
            <div className="p-4 flex  flex-col gap-8 lg:gap-20 lg:mb-8 items-center justify-center text-center  lg:px-12 ">
                <div className="flex flex-col gap-0 items-center justify-center">
                    <Product_Hunt_Badge className="mb-4 md:scale-150" />
                    <div className="flex flex-col gap-4 md:p-l-12">
                        <div>
                            <h1 className="font-cabinet-grotesk font-bold text-4xl text-brand_black lg:text-6xl ">
                                Build Exceptional User <div>Interfaces,   <span className="text-brand">Effortlessly</span></div>

                            </h1>
                        </div>
                        <div className="">
                            <h1 className="font-geist font-medium text-xs text-gray text-wrap lg:text-xl lg:px-[20px] ">
                                FlexUI empowers you to create stunning, high-performance UI components
                                with ease. Focus on your unique features while our battle-tested
                                components handle the rest
                            </h1>
                        </div>
                    </div>
                </div>
                <HeroImg className="lg:scale-[2] lg:mt-20" />
            </div>
        </>
    );
};

export default Hero;
