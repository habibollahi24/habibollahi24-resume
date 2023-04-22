import React from "react";
import userImage from "../../../assets/images/habibollahi24.jpg";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb, HiOutlineFingerPrint } from "react-icons/hi";
import { HiOutlinePuzzlePiece, HiOutlineDocumentCheck } from "react-icons/hi2";

const user = {
   id: "habibollahi",
   name: "Mohammad",
   family: "Habibollahi",
   image: userImage,
   job: "Front-End Developer | React",
   level: "Junior",
};

const Master = () => {
   return (
      <div className="bbgg ">
         <div className="my-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-screen py-2 md:p-20 ">
               <div className="  grid card ">
                  <div className="w-36 h-36 md:w-40 md:h-40  text-center mx-auto self-center  ">
                     <img
                        src={user.image}
                        alt={user.name}
                        className=" h-full w-full object-cover rounded-2xl border border-gray-400"
                     />
                  </div>
                  <div className="text-center">
                     <p className="text-4xl md:text-5xl font-extralight text-gray-800 dark:text-gray-200 tracking-tighter">
                        {user.name}
                     </p>
                     <p className="text-4xl md:text-5xl font-extralight text-gray-800 dark:text-gray-200 tracking-tighter">
                        {user.family}
                     </p>
                     <p className="text-base font-light text-gray-100 mt-5">{user.job}</p>
                     <p className="text-base font-light text-gray-100 -mt-1">
                        {user.level}
                     </p>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-2">
                  <Link
                     to="/train"
                     className="card flex justify-center items-center text-gray-200 text-xl hover:scale-95 transition-all"
                  >
                     <div className="flex items-end">
                        <span>Train</span>
                        <HiOutlineLightBulb className="text-5xl" />
                     </div>
                  </Link>
                  <Link
                     to="/projects"
                     className="card flex justify-center items-center text-gray-200 text-xl hover:scale-95 transition-all"
                  >
                     <div className="flex  items-end">
                        <span>Project</span>
                        <HiOutlineDocumentCheck className="text-5xl" />
                     </div>
                  </Link>
                  <Link
                     to="/skils"
                     className="card flex justify-center items-center text-gray-200 text-xl hover:scale-95 transition-all"
                  >
                     <div className="flex  items-end">
                        <span>Skils</span>
                        <HiOutlinePuzzlePiece className="text-5xl" />
                     </div>
                  </Link>
                  <Link
                     to="/about-me"
                     className="card flex justify-center items-center text-gray-200 text-xl hover:scale-95 transition-all"
                  >
                     <div className="flex  items-end">
                        <span>About Me</span>
                        <HiOutlineFingerPrint className="text-5xl" />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Master;
