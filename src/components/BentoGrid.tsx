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
    <div className="px-4 flex flex-col gap-4">
      <h1 className="font-cabinet-grotesk font-bold text-lg text-brand_black">
        Everything you need,
        <span className="text-brand"> ever</span>
      </h1>
      <BentoCard
        image={<Bento1 />}
        theme="ZERO DEPENDANCY"
        heading="Framework Agnostic"
        subheading="FlexUi helps speed up your development process with our pre-built UI components. Launch faster with ready-to-use, high-quality components"
      />
      <BentoCard
        image={<Bento2 />}
        theme="   built for Development"
        heading="Extensive Code Support"
        subheading="Each component is accompanied by well-documented code snippets and clear instructions on how to implement and customise it according to your needs"
      />
      <BentoCard
        image={<Bento3 />}
        theme="BUILD FAST"
        heading="Components for Literally Everything"
        subheading="FlexUi helps speed up your development process with our pre-built UI components. Launch faster with ready-to-use, high-quality components"
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
        subheading=" 100+ companies ranging from early stage startups have used FluxUI, so don’t worry you are always in good company"
      />



    </div>
  );
};

export default BentoGrid;
