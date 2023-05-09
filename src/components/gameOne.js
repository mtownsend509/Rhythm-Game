import react, {useState, useEffect, useRef} from 'react';



function GameOne ({measure, setMeasure, time, count, setCount, barDistance, setBarDistance, barDirection, setBarDirection}) {


    let barLateral = barDistance.toString().concat('px');
    let metronomeBar = document.getElementById('#metronomeBar'); 

    // useEffect(() => {
    const newMetronone = setInterval(
        () => {
            setCount(count + 1)
            if(barDirection == 'left') {
                if(count/2%1 !== 0) {
                    setBarDistance(barDistance + 56)
                } else {
                    setBarDistance(barDistance + 60)
                }
            }
            if(barDirection == 'right') {
                if(count/2%1 !== 0) {
                    setBarDistance(barDistance - 60)
                } else {
                    setBarDistance(barDistance - 56)
                }
            }
            console.log(barDistance)
            clearInterval(newMetronone)
            // 
            // if (count/17%1 == 0) {
            //     setMeasure(measure + 1)
            //     if(barDirection == 'left') {
            //         console.log('rearearsfdsafdsafdsf')
            //         setBarDirection('right')
            //     } else {
            //         console.log('kjikdjfpojiopjviopfdjivpj')
            //         setBarDirection('left')
            //     }
            // }
        },
        107.5)
    //     return () => clearInterval(newMetronone)
    // }, []);



    // const metronome = setTimeout(
    //     () => {
            
    //         if (barDirection == 'left') {
    //             // if(barDistance == ((window.innerWidth/2) + 491)) {
    //                 if(barDistance == ((window.innerWidth/2) + 496)) {
    //                 setBarDirection('right')
    //                 setMeasure(measure+1)
    //             }
    //             setBarDistance(barDistance + 1)
    //         }
    //         if (barDirection == 'right') {
    //             // if (barDistance == ((window.innerWidth/2) - 491)) {
    //                 if (barDistance == ((window.innerWidth/2) - 496)) {
    //                 setBarDirection('left')
    //                 setMeasure(measure+1)
    //             }
    //             setBarDistance(barDistance - 1); 
    //         }
    //         barLateral = barDistance.toString().concat('px')
    //     },
    //     1,
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