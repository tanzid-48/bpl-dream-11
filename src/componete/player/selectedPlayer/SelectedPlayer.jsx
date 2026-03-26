import React from 'react';
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayer }) => {

    return (
        <div className='w-10/12 mx-auto'>

            {
                selectedPlayer.map((player, index) => {
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
                            <button className="text-red-500 text-lg">
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