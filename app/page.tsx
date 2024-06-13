//used for redirecting to github
import Link from 'next/link';
import { Metadata } from 'next';

import HeroSection from './ui/hero-section';

export const metadata: Metadata = {
    title: 'Landing Page',
};

export default function Page() {


    return (
        <>
            <div id="home" className="flex flex-col">

                <div className="text-gray-100">
                    {/* <section id="home" className="h-[500px]"> Home </section> */}
                    <HeroSection />
                    <section id="about" className="bg-[rgb(224,224,224)] h-[500px]" > 
                        About 
                    </section>

                    <section id="projects" className="h-[500px]"> 
                        Projects 
                    </section>

                    <section id="contact" className="h-[500px]"> 
                        Contact 
                    </section>


                </div>
            </div>
        </>
    );
}

