import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

interface Testimonial {
    name: string;
    designation: string;
    image: StaticImageData | string;
    testimonial: string;
}

const Testimonial: React.FC<Testimonial> = ({ name, designation, image, testimonial }) => {
    return (
        <div className='border-[1px] border-neutral-200 rounded-md px-8 py-4  flex flex-col gap-6 bg-white items-start overflow-hidden'>
            <div className='flex flex-row items-center w-full justify-between'>
                <div>
                    <div className='text-brand_black font-cabinet-grotesk text-lg font-bold'> {name}</div>
                    <div className='text-gray text-xs font-geist'>{designation}</div>
                </div>
                <div className='flex justify-center items-center rounded-full border-2-black overflow-hidden w-12 h-12'>
                    {typeof image === 'string' ? (
                        <Image src={image} width={64} height={64} alt='profilePicture' />
                    ) : (
                        <Image src={image} width={80} height={80} alt='profilePicture' />
                    )}
                </div>
            </div>
            <div className='font-geist text-gray font-medium text-md'>  {testimonial}</div>

        </div>
    );
};

export default Testimonial;