import { Github, Globe } from "lucide-react"

interface projectParams {
    name: string,
    descritpion: string,
    programmingLanguages: string[],
    github: string,
    image: string,
    url?: string
}

function ProjectOption(params: projectParams) {
    return (
        <div className="rounded-md m-2 p-4 w-[50vh] shadow-md" >
            <img src={params.image} className="w-[48vh] rounded-md" />
            <div className="p-2">
                <h2 className="font-bold text-xl">{params.name}</h2>
                <p className="font-light opacity-85">{params.descritpion}</p>
                <ul className="flex gap-2 mt-4">
                    {
                        params.programmingLanguages.map((element, index) => (
                            <li key={index} className="font-thin p-2 bg-slate-800 text-white rounded-xl">{element}</li>
                        ))
                    }
                </ul>
                <div className="flex gap-2">
                    <a href={params.github} target="_blank" className="relative">
                        <Github className="hover:cursor-pointer mt-4 hover:text-blue-500" />
                    </a>
                    {
                        params.url && (
                            <a href={params.url} target="_blank" className="relative">
                                <Globe className="hover:cursor-pointer mt-4 hover:text-blue-500" />
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectOption
