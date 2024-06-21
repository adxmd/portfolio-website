import { changa } from "./fonts";

import Image from "next/image";

import {extractUniqueCategoriesToArray} from "./portfolio-section";


export default function ProjectsDisplay({
    projects, 
    selected,
} : {
    projects: {
        name: string;
        category: string;
        categoryId: number;
        picture: string;
    }[];
    selected: number;
}) {
    return (
        <div className="flex flex-row bg-[#1f2122] flex-wrap mx-6 md:mx-[6%]  min-[1060px]:mx-[10%] py-6 md:px-4 min-[1100px]:px-8 gap-8 max-h-[60vh] justify-center min-[1060px]:justify-normal overflow-x-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] rounded-xl"> 
            {projects.filter(project => project.categoryId === selected || selected === 0).map((project) => (
                <div key={project.name} className={`${changa.className}`} >
                    <Image
                        unoptimized
                        alt={`${project.name}'s preview image`}
                        src={project.picture}
                        width={362} //362, 309
                        height={258}   //258, 220
                        // fill
                        // style = {{
                        //     objectFit: 'contain',
                        // }}
                        className="transition ease duration-150 rounded-lg hover:cursor-pointer hover:opacity-80 h-[178px] w-[250px] min-[1320px]:h-[220px] min-[1320px]:w-[309px] min-[1520px]:h-[258px] min-[1520px]:w-[362px] shadow-2xl"
                    >
                    </Image>
                    <h1 className="px-2 pt-1 text-md w-[250px]">{project.name}</h1>
                    <p className="text-sm text-neutral-400 px-2">{project.category}</p>
                </div>
            ))}
        </div>
    )
}