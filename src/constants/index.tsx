import aboutphoto from "../../public/images/AboutPhoto.jpeg"
import aboutphoto1 from "../../public/images/AboutPhoto2.jpeg"
import aboutphoto2 from "../../public/images/AboutPhoto3.jpeg"

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
    Skills: {
        title: "Skills",
        page: "/Skills"
    }
}

export const aboutItems = {
    Sobre: {
        description: "Quem eu sou",
        url: "https://quem-eu-sou.com.br",
        title: "Conheça mais sobre mim",
        text: "Um texto é uma ocorrência linguística, escrita ou falada de qualquer extensão, dotada de unidade sociocomunicativa, semântica e formal.É uma unidade de linguagem em uso",
        photos: {
            photo1: aboutphoto,
            photo2: aboutphoto1,
            photo3: aboutphoto2
        },
        bigDescription: "I have hands-on experience designing and implementing impactful projects, including building a web page for AI integrations from scratch, delivering responsive and user-friendly interfaces, and contributing to system monitoring and optimization using tools like Docker, SQL, and PM2. My technical stack spans React, React Native, JavaScript, Java, C++, Tailwind CSS, and more. "
    },
    Portfolio: {
        description: "Meus Hoobies",
        url: "https://meus-hoobies.com.br",
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
        date: "2017-2025",
        jobTitle: "title job",
        jobDescription: "I have hands-on experience designing and implementing impactful projects, including building a web page for AI integrations from scratch, delivering responsive and user-friendly interfaces, and contributing to system monitoring and optimization using tools like Docker, SQL, and PM2. My technical stack spans React, React Native, JavaScript, Java, C++, Tailwind CSS, and more.",
        programmingLanguages: [
            'JavaScript', 'React', 'Java', "C++"
        ],
        company: "Apple"
    },
    Job2: {
        date: "2017-2025",
        jobTitle: "title job",
        jobDescription: "text text",
        programmingLanguages: [
            'Java', 'PHP', 'Linux', "C++"
        ],
        company: "Testeee"
    },
    Job3: {
        date: "2017-2025",
        jobTitle: "title job",
        jobDescription: "text text",
        programmingLanguages: [
            'Java', 'PHP', 'Linux', "C++"
        ],
        company: "Testeee"
    },
}