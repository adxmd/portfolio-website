'use client';

import { Dispatch, SetStateAction, useState } from "react";

import clsx from "clsx";

import { changa } from "./fonts";

// Function to extract unique categories using reduce
function extractUniqueCategories(
    projects: { name: string; category: string; categoryId: number; picture: string; }[]
    ) : { 
        name: string; 
        id: number; 
    }[] {

    return projects.reduce((acc: { name: string; id: number; }[], project) => {
        if(!acc.some(item => item.id === 0)) {
            acc.push({name: 'All', id:0});
        }
        
        // Check if the category is already added to the accumulator
        if (!acc.some(item => item.id === project.categoryId)) {
            acc.push({ name: project.category, id: project.categoryId });
        }
        return acc;
    }, []);
}

export default function PortfolioNav({ projects, selected, setSelected, setOpacity } : { 
    projects: {
        name: string;
        category: string;
        categoryId: number;
        picture: string;
    }[];
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>; 
    setOpacity: Dispatch<SetStateAction<number>>;
}) {

    const categories : { name: string, id: number}[] = extractUniqueCategories(projects);

    return (
        <>
            <div id="category_nav" className="mx-6 md:mx-[10%] flex justify-center min-[1060px]:justify-normal overflow-y-scroll">
                <div className="flex flex-row gap-5 text-lg sm:text-2xl">

                {categories.map((category) => {

                    return (
                        <NavItem 
                            key={category.name}
                            className={`${changa.className} transition ease duration-300 hover:text-green-600`} 
                            selected={selected == category.id} 
                            curSelected={selected} 
                            id={category.id} setSelected={setSelected} 
                            setOpacity={setOpacity}
                        >
                            {category.name}
                        </NavItem>
                    );
                })}
                </div>
            </div>
        </>
    );
};

const NavItem = ({ 
    children, 
    className,
    selected, 
    curSelected,
    id, 
    setSelected,
    setOpacity,
    } : {
    children: string;
    className: string;
    selected: boolean;
    curSelected: number,
    id: number;
    setSelected: Dispatch<SetStateAction<number>>;
    setOpacity: Dispatch<SetStateAction<number>>;
    }
) => {
    return (
        <>
            <button 
                onClick={() => {

                    if(curSelected != id) {
                        setOpacity(0);
                    
                        const timeout = setTimeout(() => { 
                            setSelected(id); 
                        }, 100);

                        const timeout1 = setTimeout(() => {
                            setOpacity(1);
                        }, 400);
                    }
                }} 
                className={clsx (
                    "",
                    {
                        'text-green-600' : selected,
                    },
                )}
            >
                <span className={className}> {children} </span>
            </button>

        </>
    );
}