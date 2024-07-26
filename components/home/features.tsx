import React, { ReactElement } from 'react'

interface FeatureProps {
    title: string,
    description: string,
    icon: ReactElement
}

export const Feature = ({ title, description, icon }: FeatureProps) => {
    return (
        <div className="flex flex-col text-left gap-4 md:w-1/3">
            {icon}

            <h3 className="font-extrabold">{title}</h3>
            <p className="">{description}</p>
        </div>
    )
}