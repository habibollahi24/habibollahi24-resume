import React from "react";

const Footer = () => {
   return (
      <footer className="m-6 text-gray-700 bg-gray-300 dark:bg-dark-300 dark:text-gray-400 absolute bottom-16 md:bottom-5 p-1 rounded-sm">
         <p className="">
            UX-UI-Develop: <br /> Habibollahi24 | 2023 <br />{" "}
            <a
               href="https://github.com/habibollahi24/habibollahi24-resume"
               target="_blank"
               className="underline"
            >
               GitHub source
            </a>
         </p>
      </footer>
   );
};

export default Footer;
