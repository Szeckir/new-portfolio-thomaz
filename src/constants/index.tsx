import aboutphoto from "../../public/images/AboutPhoto.jpeg"
import aboutphoto1 from "../../public/images/AboutPhoto2.jpeg"
import aboutphoto2 from "../../public/images/AboutPhoto3.jpeg"
import boogiesPhoto from "../../public/images/boogiesbarber.png"
import marathonPohoto from "../../public/images/marathonphoto.png"
import devstreakPhoto from "../../public/images/devstreak.png"

export const menuOptions = {
    Home: {
        title: "Home",
        page: "/"
    },
    About: {
        title: "About me",
        page: "/About"
    },
    Work: {
        title: "Work Experience",
        page: "/Work"
    },
    Projects: {
        title: "Projects",
        page: "/Projects"
    },
}

export const aboutItems = {
    Sobre: {
        description: "Who I am",
        url: "https://who-i-am.com",
        title: "Get to Know More About Me",
        text: "My name is Thomaz Gomes Szeckir, I am 20 years old and I am completely in love with technology.",
        photos: {
            photo1: aboutphoto,
            photo2: aboutphoto1,
            photo3: aboutphoto2
        },
        bigDescription: "Hello, my name is Thomaz Gomes Szeckir, and I am 20 years old.\n\nI am a passionate and dedicated person who is deeply in love with technology. Since I started exploring the tech world, I’ve been constantly driven by curiosity and the desire to learn, build, and solve problems. I’m always seeking new challenges that push me to grow both personally and professionally.\n\nI am currently studying Computer Science, developing projects that reflect my dedication to continuous learning, innovation, and attention to detail. Whether working on personal projects or collaborating with others, I bring commitment, creativity, and a strong will to evolve every day.\n\nBeyond technology, I love challenges, endurance sports, and pushing my limits. I’ve run a marathon, I’m fascinated by extreme sports, and I dream of skydiving one day. These experiences shape my mindset—resilience, discipline, and constant self-improvement are values I carry in everything I do.\n\nMy goal is to contribute to impactful projects, while constantly expanding my knowledge and skills in software development, programming, and technology as a whole."
    },

    Portfolio: {
        description: "My Hobbies",
        url: "https://my-hobbies.com",
        title: "Discover My Hobbies",
        text: "Besides technology, I love pushing my limits, traveling, and exploring the world.",
        photos: {
            photo1: marathonPohoto,

        },
        bigDescription: "Beyond my passion for programming, I have a deep love for adventure, endurance sports, and exploring new places.\n\nI’ve run a marathon, and I constantly challenge myself with new physical and mental goals. I love hiking, seeing breathtaking landscapes, and experiencing the thrill of extreme sports like bungee jumping and (hopefully soon) skydiving. I’m also passionate about the ocean—I enjoy surfing whenever I get the chance, as being in the water brings me a sense of freedom and connection with nature.\n\nTraveling is another huge passion of mine. My dream is to explore the world, combining my work with my desire to experience different cultures, landscapes, and challenges. Every journey teaches me something new, whether it’s a technical skill or a personal lesson in resilience and adaptability.\n\nFor me, hobbies are more than just activities—they’re a way to evolve, push boundaries, and create unforgettable memories."
    },

    Skills: {
        description: "My Passions",
        url: "https://my-passions.com",
        title: "See What I'm Passionate About",
        text: "From coding to endurance sports, my passions shape who I am.",
        photos: {
            photo1: aboutphoto,
            photo2: aboutphoto1,
            photo3: aboutphoto2
        },
        bigDescription: "My skills and passions go beyond just programming—I see technology as a tool to change lives, solve real-world problems, and constantly innovate.\n\n**Tech Skills:**\n- Software Development (JavaScript, Python, and more)\n- Web & Mobile Development\n- Artificial Intelligence & Blockchain (currently learning more about them)\n- UI/UX Design Principles\n- Cloud Technologies & DevOps (exploring this field)\n\n**Soft Skills & Mindset:**\n- Problem-Solving & Critical Thinking\n- Leadership & Team Collaboration\n- Public Speaking (working on improving this!)\n- Growth Mindset & Continuous Learning\n- Resilience & Discipline from Endurance Training\n\nWhether I’m coding, creating content for my YouTube channel, or pushing myself physically, my mindset is always the same: **Keep growing, stay consistent, and never back down from a challenge.**"
    }
}

export const workItems = {
    Job1: {
        date: "2024-Present",
        jobTitle: "Content Creator",
        jobDescription: "I have hands-on experience designing and implementing impactful projects, including building a web page for AI integrations from scratch, delivering responsive and user-friendly interfaces, and contributing to system monitoring and optimization using tools like Docker, SQL, and PM2. My technical stack spans React, React Native, JavaScript, Java, C++, Tailwind CSS, and more.",
        programmingLanguages: [
            'Comunication',
        ],
        company: "Youtube",
        link: "https://www.youtube.com/@Algoritmo_Cafe"
    },
    Job2: {
        date: "2023-2024",
        jobTitle: "Development Internship",
        jobDescription: "In the Front-End team at Orpen, I designed and developed a web page for AI integrations entirely from scratch, solving complex challenges involving HTML, CSS, and JavaScript. This experience allowed me to deliver a fully responsive and user-friendly interface tailored to integrate seamlessly with AI tools while collaborating with team members to meet project goals and deadlines.",
        programmingLanguages: [
            'JavaScript', 'HTML', 'CSS', 'Docker', 'SQL'
        ],
        company: "Orpen",
        link: "https://www.orpen.com.br"
    }
}

export const projects = {
    project1: {
        github: "https://github.com/Szeckir/Boogies-barbershop",
        url: "https://boogies-barbershop.vercel.app/",
        name: "BoogiesBarbershop WebSite",
        description: "Site criado com intuito recreativo e sendo utilizado hoje em dia para minha Barbearia.",
        programmingLanguages: [
            'ReactJS', 'TypeScript', 'TailwindCSS',
        ],
        images: {
            photo1: boogiesPhoto
        }
    },
    project2: {
        github: "https://github.com/Szeckir/Boogies-barbershop",
        url: "https://www.youtube.com/watch?v=pyySuC9eP2g&list=PLh5Sua6rx2Z7PplpZoqbugoFmet6W9nUz&ab_channel=Algoritmo%26Caf%C3%A9",
        name: "DevStreak",
        description: "A mobile app created and designed completely from scratch that immitates Duolingo, but for programmers.",
        programmingLanguages: [
            'React Native', 'Supabase'
        ],
        images: {
            photo1: devstreakPhoto
        }
    },
}