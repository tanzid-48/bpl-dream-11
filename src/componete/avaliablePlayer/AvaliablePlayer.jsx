import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const AvaliablePlayer = ({ playerContent }) => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto">

            {
                playerContent.map(player => {
                    return <div key={player.id} className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                        src={player.Image}
                        alt={player.PlayerName}
                        className="w-full h-60 object-cover"

                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title gap-2"> <FaRegUserCircle />
                        {player.PlayerName}</h2>
                    <div className="flex justify-between gap-2 items-center">
                        <div className="flex gap-2 items-center">
                            <FaFlag />
                            <p>{player.playerCountry}</p>
                        </div>
                        <button className='btn '>{player.playerType}</button>
                    </div>
                    <div className="divider"></div>

                    <h2 className='font-bold'>Rating ({player.Rating})</h2>

                    <div className="flex justify-between gap-4 items-center">
                        <p>{player.BattingStyle}</p>
                        <p className='text-right'>{player.BowlingStyle}</p>
                    </div>

                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold' >Price: ${player.Price}</p>
                        <button className="btn ">Choose Player</button>
                    </div>
                </div>
            </div>
                })
            }
        </div>


    );
};

export default AvaliablePlayer;