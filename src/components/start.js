import react, {useState} from 'react';
import GameOne from './gameOne'


function StartApp({currentPage, setPage}) {
        return (
            <div>
            {/* <audio id="audio" src="../audio.song"></audio> */}
            <h1
            onClick = {() => setPage('Button')}>
            start
            </h1>
            <h2 id ='instructions'><u>Instructions</u></h2>
            <h2>Click start to begin game</h2>
            <h2>Press space when metronome bar lines up with yellow notes, or between half black, half yellow notes</h2>
            <h2>If music is desynced refresh page</h2>
            </div>
        );
}

export default StartApp
 