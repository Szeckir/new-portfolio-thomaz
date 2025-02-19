import WorkExperienceOption from "@/components/WorkExperienceOption"
import { workItems } from "@/constants"
import { Fade } from "react-awesome-reveal"

function Work() {
    return (
        <div>
            {
                Object.values(workItems).map((element, index) => (
                    <Fade duration={3000} className="flex-wrap">
                        <WorkExperienceOption link={element.link} key={index} jobTitle={element.jobTitle} jobDescription={element.jobDescription} date={element.date} company={element.company} programmingLanguages={element.programmingLanguages} />
                    </Fade>
                ))
            }
        </div>
    )
}

export default Work