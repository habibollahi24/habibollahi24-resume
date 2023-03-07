import React from "react";

const TitleSection = ({ children, classes }) => {
   return (
      <div
         className={`text-gray-700 dark:text-gray-200 text-xl md:text-3xl  text-center md:text-left md:pl-6 ${classes}`}
      >
         {children}
      </div>
   );
};

export default TitleSection;
