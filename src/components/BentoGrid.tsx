"use client";
import React from "react";
import BentoCard from "./BentoCard";
import Bento1 from "../../public/assets/bento1.svg";
import Bento2 from "../../public/assets/Bento2.svg";
import Bento3 from "../../public/assets/Bento3.svg";
import Bento4 from "../../public/assets/Bento4.svg";
import Bento5 from "../../public/assets/Bento5.svg";


const BentoGrid = () => {
  return (
    <div className="px-4 flex flex-col gap-4 lg:px-12">
      <div className='flex flex-col gap-0 '>
        <h1 className="font-cabinet-grotesk font-bold text-lg text-brand_black lg:text-4xl">
          Everything you need,
          <span className="text-brand"> ever</span>
        </h1>
        <h1 className="font-geist text-xs text-gray md:text-xl">
          We keep adding new features to meet your needs
        </h1>
      </div>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-4">
        <BentoCard
          image={<Bento1 />}
          theme="ZERO DEPENDANCY"
          heading="Framework Agnostic"
          subheading="Components built with zero dependencies so you can have the framework of your choice"
        />
        <BentoCard
          image={<Bento2 />}
          theme="   built for Development"
          heading="Extensive Code Support"
          subheading="Each component is accompanied by well-documented code snippets and clear instructions on how to implement and customise it according to your needs"
          className="col-span-2"
        />
        <BentoCard
          image={<Bento3 />}
          theme="BUILD FAST"
          heading="Components for Literally Everything"
          subheading="FluxUi helps speed up your development process with our pre-built UI components. Launch faster with ready-to-use, high-quality components"
        />


        <BentoCard
          image={<Bento4 />}
          theme="Good Company"
          heading="Used by Industry Legends"
          subheading="100+ companies ranging from early stage startups have used FluxUI, so don’t worry you are always in good company"
        />
        <BentoCard
          image={<Bento5 />}
          theme="Easy Workflow"
          heading="Figma Plugin"
          subheading=" A plugin built to drag and drop components into your figma workspace"
        />
      </div>


    </div>
  );
};

export default BentoGrid;
