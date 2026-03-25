import React, { use, useState } from 'react';
import AvaliablePlayer from '../avaliablePlayer/AvaliablePlayer';

const Player = ({ playerPromise }) => {
     const playerContent = use(playerPromise);


      const [selectedType,setSelectedType] = useState("available")

     return (

          <div className=" container mx-auto my-14">
            
            <div className="flex justify-between items-center w-10/12 mx-auto mb-6">
               <h2 className='font-bold text-2xl'>Available player</h2>

               <div className="">
           <button
           onClick={() => setSelectedType ("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>

           <button
              onClick={() => setSelectedType ("selected")}
           className={`btn ${selectedType === "selected" ? 'bg-[#E7FE29]' : ''} rounded-l-none rounded-r-xl`}>Selected</button>

               </div>
            </div>




               <AvaliablePlayer playerContent={playerContent}></AvaliablePlayer>

          </div>


     );
};

export default Player;