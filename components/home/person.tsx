import Image from 'next/image'
import React from 'react'

interface PersonProps {
    image: string,
    name: string,
    position: string,
    phone: string,
    email: string,
    description: string
}

export const Person = ({name, position, phone, email, description, image}: PersonProps) => (
    <div className="flex flex-col items-center text-center gap-2 min-w-96">
        <div className="sm:w-52 sm:h-52 w-40 h-40 bg-gray-200 rounded-full overflow-hidden relative">
            <Image
                src={image}
                priority={false}
                fill={true}
                style={{ objectFit: "cover" }}
                alt="Title Image"
            />

        </div>
        <h3 className="text-4xl font-bold">{name}</h3>
        <p className="font-light text-xl">{position}</p>
        <div className='flex flex-col'>
        <a className="font-light text-lg text-sky-800 underline" href={`tel:${phone}`}>{phone}</a>
        <a className="font-light text-lg text-sky-800 underline" href={`mailto:${email}`}>{email}</a>

        </div>
        {/* <p className="">{description}</p> */}
    </div>
)