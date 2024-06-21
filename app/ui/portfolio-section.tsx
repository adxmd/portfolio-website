'use client';

import { useState, useEffect } from "react";

import PortfolioNav from './portfolio-nav';
import ProjectsDisplay from './projects-display';

import { changa } from "./fonts";

// Function to extract unique categories using reduce
export function extractUniqueCategoriesToArray(
    projects: { name: string; category: string; categoryId: number; picture: string; }[]
    ) : number[] {

    return projects.reduce((acc: number[], project) => {
        if(!acc.some(item => item === 0)) {
            acc.push(0);
        }
        
        // Check if the category is already added to the accumulator
        if (!acc.some(item => item === project.categoryId)) {
            acc.push(project.categoryId);
        }
        return acc;
    }, []);
}

const projects = [
    {name: 'A&A Design and Construction Inc. Website', category: 'Web Development', categoryId:1, picture:"/aadescon.png"},
    {name: '2D Self-Driving Racecar', category: 'Machine Learning', categoryId:2, picture:'/racer-bigger.png'},
    {name: 'Portfolio Website', category: 'Web Development', categoryId:1, picture:'/portfolio_v2.png'},
    {name: 'AED Simulation', category: 'Agile Dev', categoryId:3, picture:''},
    {name: 'Stock Trader', category: 'Machine Learning', categoryId:2, picture:''},
    {name: 'Messaging App', category: 'Web Development', categoryId:1, picture:''},
];

let categories : number[] = extractUniqueCategoriesToArray(projects);


export default function PortfolioSection() {

    const [opacity, setOpacity] = useState(1);

    const [selected, setSelected] = useState(0);

    return (
        <>
            <div className="flex flex-col h-[110vh] bg-[#222629] pt-[9.1rem]">


                <div id="section_title" className={`${changa.className} flex flex-col mx-6 md:mx-[10%] mb-10`}>
                    <div className="flex">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-lime-600 text-3xl font-semibold">PORTFOLIO</h1>
                    </div>
                    <span className=" h-1 w-[4.0rem] bg-gradient-to-tr from-green-700 to-lime-500 rounded-full"></span>
                </div>

                

                <PortfolioNav projects={projects} selected={selected} setSelected={setSelected} setOpacity={setOpacity}/>

                <div id="projects" className="transition ease duration-100 mt-10" style={{opacity}}>
                    {categories.map((category) => {
                        if(selected === category) {
                            return (
                                // <></>
                                <ProjectsDisplay key={category} projects={projects} selected={selected} />
                            );
                        } else {
                            return (
                                <></>
                            );
                        } 
                    })}
                </div>

            </div>
        </>
    );
};