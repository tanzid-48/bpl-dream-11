import React, { use } from 'react';
import AvaliablePlayer from '../avaliablePlayer/AvaliablePlayer';

const Player = ({playerPromise}) => {
    const playerContent = use(playerPromise);
    
    return (
      
         <div className="">
            Player : {playerContent.length}

    <AvaliablePlayer playerContent = {playerContent}></AvaliablePlayer>

         </div>   

       
    );
};

export default Player;