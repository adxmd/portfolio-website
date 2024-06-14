import Link from 'next/link';

export default function GradientBorder () {
    return (
        <>
            <div className="flex justify-center ">
                <button className="mt-6 p-[3px] rounded-[2.0rem] bg-gradient-to-b from-green-700 to-lime-500 ">
                    <div className="p-5 rounded-[1.9rem] transition ease-out duration-500 hover:bg-[#222629]" >
                        <span className="text-lg font-semibold">Download Résumé</span>
                    </div>
                </button>
            </div>
        </>
    );
}