import logo from './logo.svg';
import './App.css';

import react, {useState} from 'react';
import StartApp from './components/start';
import GameOne from './components/gameOne';
import Button from './components/button';
import soundfile from './components/song.mp3';

function App() {

  const audio = new Audio(soundfile);
    audio.play()

  const [currentPage, setPage] = useState ('start');
    if(currentPage == 'start') {
        return (
            <StartApp currentPage={currentPage} setPage={setPage} />
        )
    } else if (currentPage == 'Button') {

      return (
            <Button />
      )
    }
}

export default App;
