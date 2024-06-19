import Link from 'next/link';
import Image from 'next/image';

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

// import axios from "axios";


export default function GradientBorderModal () {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
        <button 
            onClick={() => setIsOpen(true)}
            className="w-[13rem] mt-6 p-[3px] rounded-[2.0rem] bg-gradient-to-b from-green-700 to-lime-500 "
            >
            <div className="p-5 rounded-[1.9rem] transition ease-out duration-500 hover:bg-[#222629]" >
                <span className="text-lg font-semibold">View Résumé</span>
            </div>
        </button>
      <SpringModalResume isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

// const SpringModal = ({
//   isOpen,
//   setIsOpen,
// }: {
//   isOpen: boolean;
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
// }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsOpen(false)}
//           className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
//         >
//           <motion.div
//             initial={{ scale: 0, rotate: "12.5deg" }}
//             animate={{ scale: 1, rotate: "0deg" }}
//             exit={{ scale: 0, rotate: "0deg" }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
//           >
//             <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
//             <div className="relative z-10">
//               <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
//                 <FiAlertCircle />
//               </div>
              
//               <h3 className="text-3xl font-bold text-center mb-2">
//                 One more thing!
//               </h3>
//               <p className="text-center mb-6">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
//                 aperiam vitae, sapiente ducimus eveniet in velit.
//               </p>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
//                 >
//                   Nah, go back
//                 </button>
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
//                 >
//                   Download Resume!
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

const SpringModalResume = ({
    isOpen,
    setIsOpen,
    // downloadPDF,
  }: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    // downloadPDF: () => Promise<void>;
  }) => {

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col h-full bg-neutral-900 text-white py-3 px-6 rounded-lg w-full max-w-2xl shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div id="image" className="relative h-[100%] justify-center items-center" >
                    <Image
                        src="/resume.png"
                        fill
                        alt="Resume"
                        className="border-2 border-white rounded">

                    </Image>
              </div>
              <div className="relative z-10 mt-5">
                {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                  <FiAlertCircle />
                </div> */}
                
                {/* <h3 className="text-3xl font-bold text-center mb-2">
                  One more thing!
                </h3>
                <p className="text-center mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  aperiam vitae, sapiente ducimus eveniet in velit.
                </p> */}
                <div className="flex gap-2">
                    <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                    >
                    Nah, go back
                    </button>
                    <Link
                        className="w-[500px]"
                        href="/AdamDavidResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-white hover:opacity-90 transition-opacity text-neutral-900 font-semibold w-full py-2 rounded"
                        >
                            
                            Download Resume!
                        </button>
                    </Link>

                  
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };