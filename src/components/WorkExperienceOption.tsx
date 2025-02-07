import { ChevronsRight, MoveUpRight, Minus, Terminal } from 'lucide-react'
import React from 'react'

interface WorkParams {
  date: string,
  jobTitle: string,
  jobDescription: string,
  programmingLanguages: string[],
  company: string
}

function WorkExperienceOption(params: WorkParams) {
  return (
    <div className='flex p-4 hover:cursor-pointer hover:bg-slate-50 m-4 rounded-md w-[90vw]' >
      <div className=''>
        <p className='font-bold text-nowrap'>{params.date}</p>
      </div>
      <div className='ml-36'>
        <div className='flex items-center'>
          <p className='text-2xl font-bold items-center'>{params.jobTitle}</p>
          <Minus />
          <p className='text-xl opacity-50 font-semibold items-center'>{params.company}</p>
        </div>
        <p className='opacity-80'>{params.jobDescription}</p>
        <ul className='flex gap-1 mt-4'>
          {
            params.programmingLanguages.map((element, index) => (
              <li className='opacity-80 bg-sky-800 p-2 text-white rounded-full'>{element}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default WorkExperienceOption
