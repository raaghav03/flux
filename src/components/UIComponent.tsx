"use client"
import React from 'react'
interface Component {
    heading: string
    component?: number
    variants?: number
    img?: React.ReactNode
}
const UIComponent: React.FC<Component> = ({ img, heading, component, variants }) => {
    return (
        <>
            <div className='flex flex-col gap-4'>
                <div className='border-[1px] border-neutral-200 rounded-md w-full py-4 flex flex-col items-center justify-center overflow-hidden lg:px-12' >
                    <div className="w-fit">{img}</div>
                </div>
                <div className='flex flex-col justify-start items-start w-full font-geist'>
                    <div className='font-geist text-brand_black'>{heading}</div>
                    {(component && variants) && <div className='text-xs font-geist text-gray'> {component} components + {variants} variants</div>}
                </div>
            </div></>
    )
}

export default UIComponent
