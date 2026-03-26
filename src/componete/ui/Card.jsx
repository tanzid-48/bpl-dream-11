import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import SelectedPlayer from '../player/selectedPlayer/SelectedPlayer';
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, selectedPlayer, setSelectedPlayer }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleChoosePlayer = () => {

        let newCoin = coin - player.Price
        if (newCoin >= 0) {
            setCoin(coin - player.Price)
        } else {
            toast.error("Not enough Coin to Purchase This Player");
            return;
        }

        toast.success(`${player.PlayerName} is Selected`)
        setIsSelected(true);
        setSelectedPlayer([...selectedPlayer, player])


    };

    return (
        <div key={player.id} className="card bg-base-100  shadow-sm">
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
                    <button className="btn "
                        onClick={handleChoosePlayer} disabled={isSelected ? true : false}
                    >{isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;