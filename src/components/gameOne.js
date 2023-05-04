import react, {useState, useEffect, useRef} from 'react';

const initialDistance = ((window.innerWidth/2) - 475)
const initialDirection = 'left'

function GameOne ({measure, setMeasure, time}) {

    const [barDistance, setBarDistance] = useState(initialDistance) ;
    const [barDirection, setBarDirection] = useState(initialDirection);

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

    // const timeKeeper = setInterval(
    //     () => {
    //         setBarDistance(initialDistance)
    //         setBarDirection(initialDirection);
    //         barLateral = barDistance.toString().concat('px')
    //         clearInterval(timeKeeper)
    //         console.log('ahhhhhh')
    //     },
    //     3790
    // )


    
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