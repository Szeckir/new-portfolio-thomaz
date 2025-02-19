import aboutphoto from "../../public/images/AboutPhoto.jpeg"
import aboutphoto1 from "../../public/images/AboutPhoto2.jpeg"
import aboutphoto2 from "../../public/images/AboutPhoto3.jpeg"
import boogiesPhoto from "../../public/images/boogiesbarber.png"

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
        url: "https://who-i-amm.com",
        title: "Get to Know More About Me",
        text: "My name is Thomaz Gomes Szeckir, I am 20 years old and I am completely in love with technologies...",
        photos: {
            photo1: aboutphoto,
            photo2: aboutphoto1,
            photo3: aboutphoto2
        },
        bigDescription: "Hello, my name is Thomaz Gomes Szeckir"
    },
    Portfolio: {
        description: "My Hoobies",
        url: "https://my-hoobies.com",
        title: "Descubra meus hoobies",
        text: "...",
        bigDescription: "I have hands-on experience designing and implementing impactful projects, including building a web page for AI integrations from scratch, delivering responsive and user-friendly interfaces, and contributing to system monitoring and optimization using tools like Docker, SQL, and PM2. My technical stack spans React, React Native, JavaScript, Java, C++, Tailwind CSS, and more."
    },
    Skills: {
        description: "Minhas paixões",
        url: "https://minhas-paixões.com.br",
        title: "Veja no que sou apaixonado",
        text: "..."
    }
}

export const workItems = {
    Job1: {
        date: "2024-Present",
        jobTitle: "Content Creator",
        jobDescription: "I have hands-on experience designing and implementing impactful projects, including building a web page for AI integrations from scratch, delivering responsive and user-friendly interfaces, and contributing to system monitoring and optimization using tools like Docker, SQL, and PM2. My technical stack spans React, React Native, JavaScript, Java, C++, Tailwind CSS, and more.",
        programmingLanguages: [
            'JavaScript', 'React', 'Java', "C++"
        ],
        company: "Youtube",
        link: "https://www.youtube.com/@Algoritmo_Cafe"
    },
    Job2: {
        date: "2023-2024",
        jobTitle: "Front-End Developer",
        jobDescription: "text text",
        programmingLanguages: [
            'JavaScript', 'HTML', 'CSS'
        ],
        company: "Orpen",
        link: "https://www.orpen.com.br"
    },
}

export const projects = {
    project1: {
        github: "https://github.com/Szeckir/Boogies-barbershop",
        url: "https://boogies-barbershop.vercel.app/",
        name: "WebSite para BoogiesBarbershop",
        description: "Site criado com intuito recreativo e sendo utilizado hoje em dia para minha Barbearia.",
        programmingLanguages: [
            'Java', 'PHP', 'Linux', "C++"
        ],
        images: {
            photo1: boogiesPhoto
        }
    },
}