import { BlurFade } from "@/components/ui/blur-fade"
import WorkExperienceOption from "@/components/WorkExperienceOption"
import { workItems } from "@/constants"

function Work() {
    return (
        <div>
            {
                Object.values(workItems).map((element, index) => (
                    <BlurFade delay={index - 0.5} inView >
                        <WorkExperienceOption jobTitle={element.jobTitle} jobDescription={element.jobDescription} date={element.date} company={element.company} programmingLanguages={element.programmingLanguages} />
                    </BlurFade>
                ))
            }
        </div>
    )
}

export default Work