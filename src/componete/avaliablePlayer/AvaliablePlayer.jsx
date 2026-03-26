import Card from '../ui/Card';

const AvaliablePlayer = ({ playerContent ,setCoin ,coin ,selectedPlayer, setSelectedPlayer}) => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto">

            {
                playerContent.map(player => {
                return <Card key={player.id} player={player} setCoin= {setCoin} coin = {coin} selectedPlayer = {selectedPlayer} setSelectedPlayer = {setSelectedPlayer} ></Card>
          
                })
            }
        </div>


    );
};

export default AvaliablePlayer;