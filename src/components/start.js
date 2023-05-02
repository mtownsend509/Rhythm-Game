import react, {useState} from 'react';
import GameOne from './gameOne'


function StartApp({currentPage, setPage}) {
        return (
            <div>
            <audio id="audio" src="../audio.song"></audio>
            <h1
            onClick = {() => setPage('Button')}>
            start
            </h1>
            </div>
        );
}

export default StartApp
