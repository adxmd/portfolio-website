import { changa } from "./fonts";

import Image from "next/image";

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
        <div className="flex flex-row flex-wrap border-2 pt-6 gap-5 h-[60vh] overflow-x-hidden"> 
            {projects.map((project) => {
                if(selected == 1 && project.categoryId != 1) {
                    return null;
                }else if(selected == 2 && project.categoryId != 2) {
                    return null;
                } else {
                    return (
                        <div key={project.name} className={`${changa.className}`} >
                            <Image
                                alt={`${project.name}'s preview image`}
                                src={project.picture}
                                width={250}
                                height={125}
                                className="rounded-lg border-2 border-white hover:cursor-pointer"
                            >
                            </Image>
                            <h1 className="px-2 pt-1 text-md w-[250px]">{project.name}</h1>
                            <p className="text-sm text-neutral-400 px-2">{project.category}</p>
                        </div>
                    );
                }
                
                })}
        </div>
    );
}