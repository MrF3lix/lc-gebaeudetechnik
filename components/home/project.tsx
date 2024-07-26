import React, { ReactElement } from 'react'

interface ProjectProps {
    title: string,
    description: string,
    image: ReactElement
}

export const Project = ({ title, description, image }: ProjectProps) => {
    return (
        <div className="snap-center flex flex-col min-w-full md:min-w-96 w-full rounded-lg border-gray-200 border">
            <div className="w-full h-60 relative rounded-t-lg overflow-hidden">
                {image}
            </div>
            <div className="flex flex-col gap-2 p-4">
                <h3 className="font-extrabold">{title}</h3>
                <p className="">{description}</p>
            </div>
        </div>
    )
}