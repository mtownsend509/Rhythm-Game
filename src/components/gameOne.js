import react, {useState, useEffect, useRef} from 'react';



function GameOne ({measure, setMeasure, time}) {


    const [barDistance, setBarDistance] = useState((window.innerWidth/2) - 475) ;
    const [barDirection, setBarDirection] = useState('left');

    let barLateral = barDistance.toString().concat('px');


    const metronome = setTimeout(
        () => {
            
            if (barDirection == 'left') {
                // if(barDistance == ((window.innerWidth/2) + 491)) {
                    if(barDistance == ((window.innerWidth/2) + 483)) {
                    setBarDirection('right')
                    setMeasure(measure+1)
                }
                setBarDistance(barDistance + 1)
            }
            if (barDirection == 'right') {
                // if (barDistance == ((window.innerWidth/2) - 491)) {
                    if (barDistance == ((window.innerWidth/2) - 482)) {
                    setBarDirection('left')
                    setMeasure(measure+1)
                }
                setBarDistance(barDistance - 1); 
            }
            barLateral = barDistance.toString().concat('px')
        },
        1,
    )
    
    return (
        
        <div>
        <h3>{time}</h3>
        <div
        id = 'metronomeBar'
        style = {{
        right: `${barLateral}`,
    }}
        >

        </div>
        </div>
        
    )
}

export default GameOne