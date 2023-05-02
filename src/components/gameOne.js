import react, {useState, useEffect, useRef} from 'react';


function GameOne () {

    let fired = false

    const Jump = (event) => {
        if (!fired) {
        fired = true
        event.target.innerHTML = '^^^^^^^'

        }
    }

    const antiJump = (event) => {
        if (fired) {
        fired = false
        event.target.innerHTML = '-------'
        }
    }


    const [barDistance, setBarDistance] = useState(0);
    const [barDirection, setBarDirection] = useState('left')

    // let barDistance = 1
    let barLateral = barDistance.toString().concat('px')

    const metronome = setTimeout(
        () => {
            if (barDirection == 'left') {
                if(barDistance == window.innerWidth) {
                    setBarDirection('right')
                }
                setBarDistance(barDistance + 1)
                console.log(barLateral)
            }
            if (barDirection == 'right') {
                if (barDistance == 0) {
                    setBarDirection('left')
                }
                setBarDistance(barDistance - 1); 
            }
            barLateral = barDistance.toString().concat('px')
        },
        1,
    )

//     let barPositions = {barPositionOne: {
//         right: '0px',
//     },
//     barPositionTwo: {
//         right: `${0 + (window.innerWidth/2)}px`
//     },
//     barPositionThree: {
//         right: `${window.innerWidth}px`
//     },
// }

    

    // const metronome = setInterval(
    //     () => {
    //         if(!metronomeBar) {
    //          metronomeBar = document.getElementById('metronomeBar')
    //          console.log(metronomeBar) 
    //         }
    //         } else {
    //             console.log(metronomeBar.style.right)
    //             console.log(barPositions.barPositionTwo)
    //         }
    //         if (barDirection == 'left') {
    //             if(!metronomeBar.style.right) {
    //                 metronomeBar.style.right = barPositions.barPositionTwo
    //                 console.log('shitfuck')
    //             }
    //         } 

            // if (barDirection == 'right') {
                
            // }
    // //         barLateral = barDistance.toString().concat('px')
    //     },
    //     1000,
    // )


    // let barPosition = (window.innerHeight/2.5).toString();
    // barPosition = barPosition.concat('px');


    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
      }, []);
    
    return (
        
        <div>
        <h2 id="rhythmBar"
        ref = {ref}
        tabIndex = {-1}
        onKeyDown = {Jump}
        onKeyUp = {antiJump}
        >-------</h2>
        <div
        id = 'metronomeBar'
        style = {{
//         position: 'absolute',
        right: `${barLateral}`,
//   height: '20vh', 
//   width: '10px',
//   backgroundColor: 'Black',
//   top: '40vh',
//   border: 'solid',
//   animationName: 'metronome',
//   animationDuration: '4s',
//   animationIterationCount: 'infinite',
//   animationTimingFunction: 'linear',
    }}
        >

        </div>
        </div>
        
    )
}

export default GameOne