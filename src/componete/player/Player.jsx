import React, { use, useState } from 'react';
import AvaliablePlayer from '../avaliablePlayer/AvaliablePlayer';
import SelectedPlayer from './selectedPlayer/SelectedPlayer';

const Player = ({ playerPromise, setCoin, coin }) => {
   const playerContent = use(playerPromise);
   const [selectedType, setSelectedType] = useState("available")
   const [selectedPlayer, setSelectedPlayer] = useState([])

   return (

      <div className=" container mx-auto my-14">

         <div className="flex justify-between items-center w-10/12 mx-auto mb-6">
            {selectedType === "available" ? <h2 className='font-bold text-2xl'>Available Player</h2> : <h2 className='font-bold text-2xl'>Selected Player(2/7)</h2>}

            <div className="">
               <button
                  onClick={() => setSelectedType("available")}
                  className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>

               <button
                  onClick={() => setSelectedType("selected")}
                  className={`btn ${selectedType === "selected" ? 'bg-[#E7FE29]' : ''} rounded-l-none rounded-r-xl`}>Selected(0)

               </button>

            </div>
         </div>




         {selectedType === "available"

            ? <AvaliablePlayer playerContent={playerContent} setCoin={setCoin} coin={coin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} ></AvaliablePlayer>

            : <SelectedPlayer selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} ></SelectedPlayer>}

      </div>


   );
};

export default Player;