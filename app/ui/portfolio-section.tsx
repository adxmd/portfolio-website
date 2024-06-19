'use client';

import { useState, useEffect } from "react";

import PortfolioNav from './portfolio-nav';
import ProjectsDisplay from './projects-display';

import { changa } from "./fonts";

const projects = [
    {name: 'A&A Design and Construction Inc. Website', category: 'Web Development', categoryId:1, picture:''},
    {name: '2D Self-Driving Racecar', category: 'Machine Learning', categoryId:2, picture:''},
    {name: 'Portfolio Website', category: 'Web Development', categoryId:1, picture:''},
    // {name: 'Freelance Website', category: 'Web Development', categoryId:1, picture:''},
    // {name: 'LLM', category: 'Machine Learning', categoryId:2, picture:''},
    // {name: 'Messaging App', category: 'Web Development', categoryId:1, picture:''},
];

const categories = [
    {name: "All", id: 0}, 
    {name: "Web Development", id: 1}, 
    {name: "Machine Learning", id: 2}]

export default function PortfolioSection() {

    const [opacity, setOpacity] = useState(1);

    const [selected, setSelected] = useState(0);

    // useEffect(() => {
    //     setOpacity(0);

    //     const timeout = setTimeout(() => {
    //         setOpacity(1);
    //     }, 500)

    //     return () => clearTimeout(timeout);

    // }, [selected])

    return (
        <>
            <div className="flex flex-col h-[100vh] bg-[#222629] px-[10%]">
                <div id="section_title">
                    <div className="mx-6 flex justify-left mt-[9.1rem]">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-lime-600 text-2xl font-semibold">PORTFOLIO</h1>
                    </div>
                    <span className="mb-10 mx-6 flex h-1 w-[4.0rem] bg-gradient-to-tr from-green-700 to-lime-500 rounded-full"></span>
                </div>

                <PortfolioNav categories={categories} selected={selected} setSelected={setSelected} setOpacity={setOpacity}/>

                <div id="projects" className="transition ease duration-100 mx-6 mt-10" style={{opacity}}>

                    {selected == 0 && (
                        <div>
                            {/* <p>All selected!</p> */}
                            <ProjectsDisplay projects={projects} selected={selected} />
                        </div>
                    )}

                    {selected == 1 && (
                        <div>
                            {/* <p>Web Development selected!</p> */}
                            <ProjectsDisplay projects={projects} selected={selected} />
                        </div>
                    )}

                    {selected == 2 && (
                        <div>
                            {/* <p>Machine Learning selected!</p> */}
                            <ProjectsDisplay projects={projects} selected={selected} />
                        </div>
                    )}


                </div>

            </div>
        </>
    );
};