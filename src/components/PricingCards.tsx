"use client";
import React, { useState } from 'react';
interface PricingToggleProps {
    isAnnual: boolean;
    onToggle: (isAnnual: boolean) => void;
}
const pricingData = [
    {
        title: 'Essential',
        priceMonthly: 35,
        priceYearly: 29,
        description:
            'There are many variations available, but the majority have suffered.',
        features: [
            'Unlimited placeholder texts',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
        ],
    },
    {
        title: 'Perform',
        priceMonthly: 55,
        priceYearly: 49,
        description:
            'There are many variations available, but the majority have suffered.',
        features: [
            'Unlimited placeholder texts',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Predefined chunks as necessary',
        ],
        isPopular: true,
    },
    {
        title: 'Enterprise',
        priceMonthly: 85,
        priceYearly: 79,
        description:
            'There are many variations available, but the majority have suffered.',
        features: [
            'Unlimited placeholder texts',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Predefined chunks as necessary',
            'Free from repetition',
        ],
    },
];

const PricingToggle: React.FC<PricingToggleProps> = ({ isAnnual, onToggle }) => {
    return (
        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
            <div className="relative flex w-full p-1 px-2 bg-white dark:bg-slate-900 rounded-full">
                <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                    <span
                        className="absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"
                        style={{ transform: `translateX(${isAnnual ? '0' : '100%'})` }}
                    />
                </span>
                <button
                    className={`relative flex w-fit items-center whitespace-nowrap text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-600 dark:text-slate-400'
                        }`}
                    style={{
                        textShadow: isAnnual ? '0 0 1px rgba(50, 100, 255, 0.2)' : 'none',
                        padding: '0 0.5rem', // Use a valid CSS unit like 'rem' or 'px'
                    }}
                    onClick={() => onToggle(true)}
                    aria-pressed={isAnnual}
                >
                    <span>Yearly</span>
                    <span className={`mr-2 ${isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}`}>-20%</span>
                </button>
                <button
                    className="relative flex items-center whitespace-nowrap text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                    style={{
                        color: isAnnual ? 'var(--text-color)' : 'white',
                        textShadow: isAnnual ? 'none' : '0 0 1px rgba(255, 255, 255, 0.2)',
                        padding: '0 1rem',
                    }}
                    onClick={() => onToggle(false)}
                    aria-pressed={!isAnnual}
                >
                    Monthly
                </button>
            </div>
        </div>
    );
};

interface PricingCardProps {
    data: typeof pricingData[number];
    isAnnual: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ data, isAnnual }) => {
    return (
        <div className="h-full">
            <div
                className={`relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5`}
            >
                {data.isPopular && (
                    <div className="absolute top-0 right-0 mr-6 -mt-4">
                        <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                            Most Popular
                        </div>
                    </div>
                )}
                <div className="mb-5">
                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
                        {data.title}
                    </div>
                    <div className="inline-flex items-baseline mb-2">
                        <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                        <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                            {isAnnual ? data.priceYearly : data.priceMonthly}
                        </span>
                        <span className="text-slate-500 font-medium">/mo ({isAnnual ? 'Yearly' : 'Monthly'})</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">{data.description}</div>
                    <a
                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                        href="#"
                    >
                        Purchase Plan
                    </a>
                </div>
                <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
                    Includes:
                </div>
                <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                    {data.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                            <svg
                                className="mr-2 h-4 w-4 fill-current stroke-none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 ☑️" // Replace with the actual checkmark SVG path
                                />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const PricingCards: React.FC = () => {
    const [isAnnual, setIsYearly] = useState(true);

    return (
        <div className="flex flex-wrap justify-start gap-8 mt-10 p-4">
            <div className='flex flex-col gap-0'>
                <h1 className="font-cabinet-grotesk font-bold text-lg text-brand_black">
                    Frequently Asked Questions
                </h1>
                <h1 className="font-geist text-xs text-gray">
                    Get answers to common queries about our components
                </h1>
            </div>
            <div className="flex flex-col justify-start gap-4">
                <PricingToggle isAnnual={isAnnual} onToggle={setIsYearly} />
                {pricingData.map((data) => (
                    <PricingCard key={data.title} data={data} isAnnual={isAnnual} />
                ))}
            </div>
        </div>
    );
};

export default PricingCards;