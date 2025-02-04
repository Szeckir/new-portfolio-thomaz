import AboutOption from "@/components/AboutOption"
import { aboutOptions } from "@/constants"
import { Fade } from "react-awesome-reveal"

function About() {
    return (
        <div>
            {
                Object.values(aboutOptions).map((element) => (
                    <Fade duration={3000}>
                        <AboutOption text={element.text} description={element.description} url={element.url} title={element.title}></AboutOption>
                    </Fade>
                ))
            }
        </div >
    )
}

export default About