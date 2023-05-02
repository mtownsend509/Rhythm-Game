import logo from './logo.svg';
import './App.css';

import react, {useState} from 'react';
import StartApp from './components/start';
import GameOne from './components/gameOne';
import Button from './components/button';

function App() {

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
