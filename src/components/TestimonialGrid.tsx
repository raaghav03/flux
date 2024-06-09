import React from "react";
import Testimonial from "./Testimonial";
import profile1 from "../../public/assets/profile1.avif";
import profile2 from "../../public/assets/profile2.avif";
import profile3 from "../../public/assets/profile3.avif";
import profile4 from "../../public/assets/profile4.avif";
const TestimonialGrid = () => {
    return (
        <div className="px-4 flex flex-col gap-4 lg:px-12 ">
            <div className="flex flex-col gap-0">
                <h1 className="lg:text-4xl font-cabinet-grotesk font-bold text-lg text-brand_black">
                    Hundrds of people love{" "}
                    <span className="inline text-brand">Flex-Ui</span>
                </h1>
                <h1 className="font-geist  md:text-xl text-xs text-gray">
                    But don&apos;t take our word for it
                </h1>
            </div>
            <div className="lg:grid grid-cols-3 lg:gap-x-12 flex flex-col gap-4 ">
                <Testimonial
                    name="Sophia Lee"
                    designation="Lead Product Designer at Digital Innovations"
                    image={profile1} // Pass the imported image directly
                    testimonial="As a designer, I'm always looking for tools that enhance my workflow. FlexUI has been a game-changer for us. The variety of components and the ease of customization have allowed us to iterate quickly and deliver high-quality designs to our clients."
                />

                <Testimonial
                    name="Daniel Rodriguez"
                    designation="Senior Developer at TechSavvy Solutions"
                    image={profile2} // Pass the imported image directly
                    testimonial="FlexUI has become our go-to resource for UI components. The seamless integration into our projects has saved us valuable time and effort. Plus, the flexibility to tweak and fine-tune every detail ensures that our applications stand out in terms of both functionality and aesthetics."
                />

                <Testimonial
                    name="Sarah Johnson"
                    designation="Lead Front-End Developer at TechCorp"
                    image={profile1} // Pass the imported image directly
                    testimonial="The UI components from FlexUI have significantly streamlined our design process. The customization options are extensive, and the integration into our existing projects was seamless. Highly recommend!
"                />

                <Testimonial
                    name="Michael Brown"
                    designation="UI/UX Designer at Creative Solutions"
                    image={profile2} // Pass the imported image directly
                    testimonial="FlexUI's marketplace has saved us countless hours. The components are visually stunning and adaptable to our specific needs. It's a must-have resource for any design team."
                />

                <Testimonial
                    name="Emily Davis"
                    designation="Product Manager at InnovateTech"
                    image={profile3} // Pass the imported image directly
                    testimonial="Using FlexUI has allowed our team to focus on building unique features rather than reinventing the wheel. The quality and variety of components are unmatched, making our development process more efficient."
                />

                <Testimonial
                    name="James Wilson"
                    designation="CTO at NextGen Apps"
                    image={profile4} // Pass the imported image directly
                    testimonial="FlexUI has revolutionized how we approach UI development. The pre-built components are not only easy to customize but also enhance our overall project speed. It's a valuable asset to our toolkit."
                />
            </div>
        </div>
    );
};

export default TestimonialGrid;
