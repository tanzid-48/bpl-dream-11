
import { Suspense } from 'react';
import './App.css'
import Banner from './componete/banner/Banner'
import NavBar from './componete/NavBar'
import Player from './componete/player/Player';


const playerPromise = fetch("/data.json")
.then(res => res.json());

function App() {


  return (
    <>
  <nav>
    <NavBar></NavBar>
  </nav>
  <main>
    <Banner></Banner>
  <Suspense fallback= {<span className="loading loading-spinner text-accent"></span>}>
    <Player  key={Player.id} playerPromise= {playerPromise} >

    </Player>
  </Suspense>
    
  </main>

     

    </>
  )
}

export default App
