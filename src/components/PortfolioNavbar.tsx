import React, { useState } from 'react';
import { menuOptions } from '../constants';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Linkedin } from 'lucide-react';

const PortfolioNavbar = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="bg-white shadow-md">
            <div className="flex items-center border-b">
                <div className="flex space-x-2 p-2 ml-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="flex flex-grow overflow-x-auto">
                    {Object.values(menuOptions).map((option) => (
                        <button
                            key={option.title}
                            onClick={() => setActiveTab(option.title)}
                            className={`
                            px-4 py-2 text-sm font-medium 
                            border-b-2 
                            whitespace-nowrap 
                            transition-colors 
                            duration-200
                            ${activeTab === option.title
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'}
                          `}
                        >
                            <Link to={option.page}>{option.title}</Link>
                        </button>
                    ))}
                </div>

                <div className="flex items-center mr-2">
                    <button className="px-2 text-gray-600 hover:bg-gray-100 rounded" onClick={() => handleOpen()}>
                        Contact
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                        className="text-center items-center justify-center flex"
                    >
                        <Fade>
                            <Box
                                borderColor={"white"}
                                padding={3}
                                bgcolor={"white"}
                                borderRadius={2}
                            >
                                <div className="w-[100vh] h-[30vh] block">
                                    <div className='flex items-center justify-center '>
                                        <div className='rounded-full bg-slate-900 w-[30vh] h-[30vh] '>

                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Fade>
                    </Modal>
                </div>
            </div>
        </div >
    );
};

export default PortfolioNavbar;