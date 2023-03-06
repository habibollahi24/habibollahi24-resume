import React from "react";
// import userImage from "../../../assets/images/ee97bc7f-c32b-4b3a-a7bd-b30142800267.jfif";
import userImage from "../../../assets/images/habibollahi24.jpg";

const user = {
   id: "habibollahi",
   name: "Mohammad",
   family: "Habibollahi",
   image: userImage,
   job: "Front-End Developer | React",
   level: "Junior",
};
// flex flex-col md:flex-row md:items-end md:space-x-10
const Master = () => {
   return (
      <div className="  py-6 md:py-0 dark:bg-dark-900 md:dark:bg-transparent rounded-lg">
         <div className="h-48 md:w-full  md:h-60 grayscale-[50%] bg-master relative">
            <div className="w-36 h-36 md:w-52 md:h-52 rounded-2xl overflow-hidden right-1/2 md:right-16 translate-x-1/2 md:translate-x-0 md:translate-y-1/2 top-0 md:bottom-0  absolute">
               <img src={user.image} alt={user.name} className=" h-full w-full object-cover " />
            </div>
         </div>

         <div className="-mt-4 md:mt-4 text-center md:text-left">
            <p className="text-4xl md:text-6xl font-extralight text-gray-800 dark:text-gray-200 tracking-tighter">
               {user.name}
            </p>
            <p className="text-4xl md:text-6xl font-extralight text-gray-800 dark:text-gray-200 tracking-tighter">
               {user.family}
            </p>
            <p className="text-base font-light text-gray-500 mt-2">{user.job}</p>
            <p className="text-base font-light text-gray-500 -mt-1">{user.level}</p>
         </div>
      </div>
   );
};

export default Master;
