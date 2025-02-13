import ProjectOption from '@/components/ProjectOption'
import { projects } from '@/constants'

function Projects() {
    return (
        <div className='m-4 flex gap-[2%] flex-wrap'>
            {
                Object.values(projects).map((element, index) => (
                    <ProjectOption image={element.images.photo1} key={index} name={element.name} descritpion={element.description} programmingLanguages={element.programmingLanguages} github={element.github} url={element.url} />
                ))
            }
        </div>
    )
}

export default Projects