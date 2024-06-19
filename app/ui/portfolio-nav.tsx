'use client';

import { Dispatch, SetStateAction, useState } from "react";

import clsx from "clsx";

import { changa } from "./fonts";

export default function PortfolioNav({ categories, selected, setSelected, setOpacity } : { 
    categories: {
        name: string;
        id: number;
    }[];
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>; 
    setOpacity: Dispatch<SetStateAction<number>>;
}) {

    return (
        <>
            <div id="category_nav" className="mx-6">
                <div className="flex flex-row gap-5 text-2xl">

                {categories.map((category) => {

                    return (
                        <NavItem 
                            key={category.name}
                            className={`${changa.className} transition ease duration-200 hover:text-green-600`} 
                            selected={selected == category.id} 
                            curSelected={selected} 
                            id={category.id} setSelected={setSelected} 
                            setOpacity={setOpacity}
                        >
                            {category.name}
                        </NavItem>
                    );
                })}

                    {/* <NavItem className={`${changa.className} transition ease duration-200 hover:text-green-600`} selected={selected == 0} curSelected={selected} id={0} setSelected={setSelected} setOpacity={setOpacity}>All</NavItem>
                    <NavItem className={`${changa.className} transition ease duration-200 hover:text-green-600`} selected={selected == 1} curSelected={selected} id={1} setSelected={setSelected} setOpacity={setOpacity}>Web Development</NavItem>
                    <NavItem className={`${changa.className} transition ease duration-200 hover:text-green-600`} selected={selected == 2} curSelected={selected} id={2} setSelected={setSelected} setOpacity={setOpacity}>Machine Learning</NavItem> */}
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

                    // clearTimeout(timeout);

                    // const timeout1 = setTimeout(() => {
                    //     setOpacity(1);
                    // }, 200)

                    // clearTimeout(timeout1);
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