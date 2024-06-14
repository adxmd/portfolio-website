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
                    <section id="about" className="bg-[rgb(224,224,224)] h-[100vh]" > 
                        About 
                    </section>

                    <section id="projects" className="h-[100vh] bg-[#222629]"> 
                        Projects 
                    </section>

                    <section id="contact" className="h-[100vh] bg-[rgb(224,224,224)]"> 
                        Contact 
                    </section>


                </div>
            </div>
        </>
    );
}

