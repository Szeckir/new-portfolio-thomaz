import AboutOption from "@/components/AboutOption"
import { aboutItems } from "@/constants"
import { Fade } from "react-awesome-reveal"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { Minimize2 } from "lucide-react";

function About() {
    const [open, setOpen] = useState(false);
    const [selectedAbout, setSelectedAbout] = useState(null);

    const handleOpen = (element) => {
        setSelectedAbout(element);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ul>
                {
                    Object.values(aboutItems).map((element, index) => (
                        <li key={index} onClick={() => handleOpen(element)} className="m-6 p-2">
                            <Fade duration={3000}>
                                <AboutOption text={element.text} description={element.description} url={element.url} title={element.title}></AboutOption>
                            </Fade>
                        </li>
                    ))
                }
            </ul>

            {
                selectedAbout && (
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                        className="text-center items-center justify-center flex  "
                    >
                        <Fade>
                            <Box
                                borderColor={"white"}
                                padding={3}
                                bgcolor={"white"}
                                borderRadius={4}
                            >
                                <div className="w-[100vh] block">
                                    <div className="flex gap-2 text-center items-center ">
                                        <Minimize2 className="hover:bg-slate-100 rounded-full p-1 hover:cursor-pointer" size={32} onClick={() => setOpen(false)} />
                                        <p className="font-bold text-xl">{selectedAbout.title}</p>
                                    </div>
                                    <div className="text-left m-2">
                                        <p>{selectedAbout.bigDescription}</p>
                                    </div>
                                    {
                                        selectedAbout.photos && (
                                            <div className="flex gap-4 w-[15vw]">
                                                <img src={selectedAbout.photos.photo1} alt="Foto Thomaz Szeckir" className="rounded-md" />
                                                <img src={selectedAbout.photos.photo2} alt="Foto Thomaz Szeckir" className="rounded-md"></img>
                                                <img src={selectedAbout.photos.photo3} alt="Foto Thomaz Szeckir" className="rounded-md"></img>
                                            </div>
                                        )
                                    }
                                </div>
                            </Box>
                        </Fade>
                    </Modal>
                )
            }
        </div >
    )
}

export default About