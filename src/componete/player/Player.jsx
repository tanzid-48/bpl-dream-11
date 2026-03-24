import React, { use } from 'react';

const Player = ({playerPromise}) => {
    const playerContent = use(playerPromise);
    console.log(playerContent);
    return (
        <div>
            
        </div>
    );
};

export default Player;