import React from 'react'
interface BentoCard {
    theme: string;
    heading: string;
    subheading: string
    image: React.ReactNode
}
const BentoCard: React.FC<BentoCard> = ({ heading, subheading, theme, image }) => {
    return (
        <div className=' border-[1px] border-neutral-200 rounded-md px-8 py-4 flex flex-col items-center justify-center overflow-hidden'>
            {image}
            <div className='flex flex-col justify-start items-start w-full gap-2'>
                <div className='font-ibm-mono text-xs text-gray uppercase'>{theme}</div>
                <div className='font-cabinet-grotesk font-brand_black text-lg font-medium'>{heading}</div>
                <div className='font-geist text-gray text-xs '>{subheading}</div>
            </div>
        </div>
    )
}

export default BentoCard
