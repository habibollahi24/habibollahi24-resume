import React, { useState } from "react";
import Layout from "../components/layout/layout";

import trains from "../model/trains";

import Cart from "../components/shared/cart";
import TitleSection from "./../components/shared/titleSection";

const TrainPage = () => {
   const [search, setSearch] = useState("all");
   return (
      <Layout>
         <div className="flex justify-between items-center mb-6">
            <TitleSection classes=" ">All Trains</TitleSection>

            <div>
               <span className="text-sm text-gray-700 dark:text-gray-200">
                  Search by Technology:
               </span>
               <select
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-4 py-1 ml-2 rounded-md outline-none appearance-none"
               >
                  <option value="All">All</option>
                  <option value="Javascript">Javascript</option>
                  <option value="React">React</option>
                  <option value="Next">Next</option>
                  <option value="Tailwind">Tailwind</option>
               </select>
            </div>
         </div>
         <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-x-5  px-4 mb-12 ">
            {trains.map((train) => {
               return <Cart key={train.id} cartData={train} />;
            })}
         </div>
      </Layout>
   );
};

export default TrainPage;
