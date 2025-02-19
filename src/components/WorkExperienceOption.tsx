interface WorkParams {
  date: string,
  jobTitle: string,
  jobDescription: string,
  programmingLanguages: string[],
  company: string,
  link: string
}

function WorkExperienceOption(params: WorkParams) {
  return (
    <a href={params.link} target="_blank">
      <div className='flex p-4 hover:cursor-pointer m-4 rounded-md w-[90vw] shadow-sm hover:shadow-md'>
        <div className='w-24 relative'>
          <p className='font-bold text-nowrap'>{params.date}</p>
        </div>
        <div className='ml-36'>
          <div className='flex items-center gap-4'>
            <p className='text-2xl font-bold items-center'>{params.jobTitle}</p>
            <p className='text-xl opacity-50 font-semibold items-center'>{params.company}</p>
          </div>
          <p className='opacity-80'>{params.jobDescription}</p>
          <ul className='flex gap-1 mt-4'>
            {
              params.programmingLanguages.map((element, index) => (
                <li className='font-thin bg-slate-800 p-2 text-white rounded-xl' key={index}>{element}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </a>
  )
}

export default WorkExperienceOption
