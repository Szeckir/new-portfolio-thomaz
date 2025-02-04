import React from 'react'
import { Search } from 'lucide-react'
import { Fade } from "react-awesome-reveal";

interface AboutOptionProps {
    description: string;
    url: string;
    title: string;
    text: string;
}

function AboutOption(params: AboutOptionProps) {
    return (
        <div className='items-center'>
            <div className='flex'>
                <Search size={28} className='' />
                <div className='items-center text-left ml-2'>
                    <p className='text-sm'>{params.description}</p>
                    <p className='text-slate-500 opacity-70 text-xs'>{params.url}</p>
                </div>

            </div>
            <p className='text-2xl text-blue-700'>{params.title}</p>
            <div className='mt-1'>
                <p>{params.text}</p>
            </div>
        </div>
    )
}

export default AboutOption
