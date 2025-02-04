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

export const aboutOptions = {
    Sobre: {
        description: "Quem eu sou",
        url: "https://quem-eu-sou.com.br",
        title: "Conheça mais sobre mim",
        text: "Um texto é uma ocorrência linguística, escrita ou falada de qualquer extensão, dotada de unidade sociocomunicativa, semântica e formal.É uma unidade de linguagem em uso",
        photos: {
            photo1: aboutphoto,
            photo2: aboutphoto1,
            photo3: aboutphoto2
        }
    },
    Portfolio: {
        description: "Meus Hoobies",
        url: "https://meus-hoobies.com.br",
        title: "Descubra meus hoobies",
        text: "..."
    },
    Skills: {
        description: "Minhas paixões",
        url: "https://minhas-paixões.com.br",
        title: "Veja no que sou apaixonado",
        text: "..."
    }
} 
