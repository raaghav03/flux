import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"


const FAQ = () => {
    return (
        <div className='p-4 lg:px-12 px-4 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <h1 className=" lg:text-4xl font-cabinet-grotesk font-bold text-lg text-brand_black">
                    Frequently Asked Questions
                </h1>
                <h1 className=" md:text-xl font-geist text-xs text-gray">
                    Get answers to common queries about our components
                </h1>
            </div>
            <div className='lg:px-96'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is FluxUI?</AccordionTrigger>
                        <AccordionContent>
                            FluxUI is a marketplace offering a vast collection of pre-built, customizable UI components designed to save you time and reduce costs in your development process.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How do I integrate FluxUI components into my project?</AccordionTrigger>
                        <AccordionContent>
                            Integrating FluxUI components into your project is straightforward. Each component comes with detailed documentation and examples to help you seamlessly add them to your codebase.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Are the components customizable?</AccordionTrigger>
                        <AccordionContent>
                            Yes, all FluxUI components are highly customizable. You can easily adjust the styles, colors, and behaviors to match your project&apos;s requirements.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Do you offer support for different frameworks?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely! FluxUI components are framework-agnostic and can be integrated with various front-end frameworks, ensuring flexibility and compatibility with your tech stack.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Is there a trial period or free version available?</AccordionTrigger>
                        <AccordionContent>
                            Yes, FluxUI offers a free version with a selection of components to try out. For access to the full library and premium features, various subscription plans are available.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ
