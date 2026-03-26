import React from 'react';
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayer, setSelectedPlayer,setCoin, coin }) => {

const handleDeleteSelectedPlayer = (player) =>{
    const filterPlayers = selectedPlayer.filter((selectedPlayer) =>  selectedPlayer.PlayerName !== player.PlayerName
  );
    setSelectedPlayer(filterPlayers);
    setCoin(coin+ player.Price)
   }

    return (
        <div className='w-10/12 mx-auto'>

            { selectedPlayer.length === 0 
            ? <div className="h-[400px] flex items-center justify-center flex-col gap-4">
                <h2 className='font-semibold text-3xl paragraph'>No Player Selected yet </h2>
                <p className='font-semibold text-gray-600'>Go To Available tab to selected Player</p>
            </div>

            :selectedPlayer.map((player, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 rounded-xl border mb-3"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={player.Image}
                                    alt={player.PlayerName}
                                    className='h-20 w-auto rounded-md'
                                />

                                <div>
                                    <h2 className='flex items-center gap-2 font-medium text-lg'>
                                        <FaUser /> {player.PlayerName}
                                    </h2>
                                    <p className='text-sm text-gray-500'>{player.playerType}</p>
                                </div>
                            </div>
                            <button className="text-red-500 text-lg " onClick={()=> handleDeleteSelectedPlayer(player)}>
                                <MdDelete />
                            </button>
                        </div>
                    );
                })
            }

        </div>
    );
};
export default SelectedPlayer;