//Client Component
'use client';

import '../ui/global.css';

//Icon
import { 
    HomeIcon,               //home
    InformationCircleIcon,  //about
    CodeBracketIcon, CommandLineIcon, CpuChipIcon, //projects
    DevicePhoneMobileIcon, PhoneIcon, //contact
} from '@heroicons/react/24/outline';

//Used to get the current pathname
import { usePathname } from 'next/navigation';

//Next.js Link Component
import Link from 'next/link';


import clsx from 'clsx';

const links = [
    { name: 'Home', href: '#home', id:'home', icon: HomeIcon },
    { name: 'About', href: '#about', id:'about', icon: InformationCircleIcon },
    { name: 'Projects', href: '#projects', id:'projects', icon: CodeBracketIcon },
    { name: 'Contact', href: '#contact', id:'contact', icon: DevicePhoneMobileIcon }
];

export default function NavLinks( {
    links,
} : {
    links: {name: string, href: string, id:string, icon: typeof HomeIcon}[]
} ) {
    const pathname = usePathname();

    const scrollToSection = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        
    }


    

    return (
        <>
          {links.map((link) => {

            const LinkIcon = link.icon;

            return (
                <div
                    onClick={() => scrollToSection(link.id)}
                    key={link.name}
                    className='flex flex-row items-center gap-2 mr-3 border-0 transition ease-out duration-300 hover:text-green-700 hover:cursor-pointer'
                    >
                    <LinkIcon className="w-[30px]" />
                    <p className="hidden text-xl lg:block">{link.name}</p>
                </div>
            );
            })}
        </>
    );
}

// export default function NavLinks() {

//     const pathname = usePathname();
//     return (
//       <>
//         {links.map((link) => {
//           const LinkIcon = link.icon;
//           return (
//             <Link
//               key={link.name}
//               href={link.href}
//               className= { clsx (
//                 "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
//                 {
//                   'bg-sky-100 text-blue-600' : pathname === link.href, 
//                 },
//               )}
//             >
//               <LinkIcon className="w-6" />
//               <p className="flex">{link.name}</p>
//             </Link>
//           );
//         })}
//       </>
//     );
//   }