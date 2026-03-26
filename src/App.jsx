
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './componete/banner/Banner'
import NavBar from './componete/NavBar'
import Player from './componete/player/Player';
 import { ToastContainer, toast } from 'react-toastify';

const playerPromise = fetch("/data.json")
  .then(res => res.json());

function App() {

  const [coin, setCoin] = useState(5000000)

  return (
    <>
      <nav>
        <NavBar coin={coin} ></NavBar>
      </nav>
      <main>
        <Banner></Banner>
        <Suspense fallback={<span className="loading loading-bars loading-xl w-11"></span>}>
          <Player key={Player.id} playerPromise={playerPromise} setCoin={setCoin} coin={coin} >
          </Player>
        </Suspense>

      </main>

{/* react Tosatify */}
   <ToastContainer />

    </>
  )
}

export default App
