"use client";
import React from "react";
import Comp1 from "../../public/assets/comp1.svg";
import Comp2 from "../../public/assets/comp2.svg";
import Comp3 from "../../public/assets/comp3.svg";
import Comp4 from "../../public/assets/comp4.svg";
import Comp5 from "../../public/assets/comp5.svg";
import UIComponent from "./UIComponent";
const UiComponentGrid = () => {
    return (
        <div className="px-4 flex flex-col gap-4 lg:px-12">
            <div className="font-cabinet-grotesk lg:text-4xl font-bold text-lg text-brand_black">
                {" "}
                <span className="inline text-brand">1000+ components </span>for your
                every need
            </div>
            <div className="lg:grid lg:grid-cols-5 lg:gap-4">
                <UIComponent
                    img={<Comp1 />}
                    component={12}
                    variants={8}
                    heading="Button"
                />
                <UIComponent
                    img={<Comp2 />}
                    component={24}
                    variants={4}
                    heading="Card"
                />
                <UIComponent
                    img={<Comp3 />}
                    component={8}
                    variants={12}
                    heading="Chart"
                />
                <UIComponent
                    img={<Comp4 />}
                    component={2}
                    variants={12}
                    heading="Accordion"
                />
                <UIComponent
                    img={<Comp5 />}
                    component={12}
                    variants={8}
                    heading="Badge"
                />
            </div>
        </div>
    );
};

export default UiComponentGrid;
