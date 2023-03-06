import React from "react";

const Logo = ({ classes }) => {
   return (
      <div
         className={` text-lg md:text-2xl dark:text-gray-200 font-semibold text-gray-800 tracking-tighter md:absolute top-6 left-12 ${classes}`}
      >
         Habibollahi24
      </div>
   );
};

export default Logo;
