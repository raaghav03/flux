import React from 'react'
import Testimonial from "./Testimonial"
import profile1 from "../../public/assets/profile1.avif";
import profile2 from "../../public/assets/profile2.avif";
import profile3 from "../../public/assets/profile3.avif";
import profile4 from "../../public/assets/profile4.avif";
const TestimonialGrid = () => {
    return (
        <div className='px-4 flex flex-col gap-4'>
            <div className='flex flex-col gap-0'>
                <h1 className="font-cabinet-grotesk font-bold text-lg text-brand_black">
                    People love Flex-Ui
                </h1>
                <h1 className="font-geist  text-md text-gray">
                    But don&apos;t take our word for it
                </h1>
            </div>
            <Testimonial
                name="Sarah Johnson"
                designation="Lead Front-End Developer at TechCorp"
                image={profile1} // Pass the imported image directly
                testimonial="The UI components from FlexUI have significantly streamlined our design process. The customization options are extensive, and the integration into our existing projects was seamless. Highly recommend!"
            />

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
    )
}

export default TestimonialGrid
