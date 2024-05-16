import react, {useState, useEffect, useRef} from 'react';
import GameOne from './gameOne'
import FocusLock from 'react-focus-lock'
import dingSound from './dingSound.js'


function Button () {

    // const dingSound = new Audio(audio);
    // window.addEventListener('click', () => {
    //     dingSound.play()
    // })

    let fired = false
    const [score, setScore] = useState(0)


    let firstNote = ((window.innerWidth/2) + 440)
    let secondNote = ((window.innerWidth/2) + 330)
    let thirdNote = ((window.innerWidth/2) + 220)
    let fourthNote = ((window.innerWidth/2) + 110)
    let fifthNote = (window.innerWidth/2)
    let sixthNote = ((window.innerWidth/2) - 110)
    let seventhNote = ((window.innerWidth/2) - 220)
    let eighthNote = ((window.innerWidth/2) - 330)
    let ninthNote = ((window.innerWidth/2) - 440)


    const [measure, setMeasure] = useState(1);
    const [time, setTime] = useState (0);
    const [barDistance, setBarDistance] = useState((window.innerWidth/2) - 475) ;
    const [barDirection, setBarDirection] = useState('left');

    const timeRef = useRef(1);
    const measureRef = useRef(0);

    useEffect(() => {
        timeRef.current = time;
        measureRef.current = measure;
    })

    useEffect(() => {
        const timeKeeper = setInterval(
            () => {
                if(measure >= 56) {
                    clearInterval(timeKeeper)
                }
                setTime(timeRef.current + 1)
                setMeasure(measureRef.current + 1)
                if(timeRef.current/2%1 == 0) {
                    setBarDistance(((window.innerWidth/2) + 473.75))
                    setBarDirection('right');
                } else {
                    setBarDistance(((window.innerWidth/2) - 473.75))
                    setBarDirection('left');
                }
            },
            1895
        )
        return () => {
            clearInterval(timeKeeper)
        }
    }, []);

    // useEffect(() => {
    //     window.addEventListener('keydown', (e) => {
    //         console.log('OMG THKLDSJKLF:S')
    //     })
    // })
        

    const noteJump = (event, i, y) => {
        if(!event.target.children[i].style.animation || event.target.children[i].style.animation == '0.1s ease 0s 1 normal none running jumpTwo') {
            event.target.children[i].style.animation = 'jumpOne .1s'
        } else if (event.target.children[i].style.animation == '0.1s ease 0s 1 normal none running jumpOne') {
            event.target.children[i].style.animation = 'jumpTwo .1s'
        }
        if(y && (event.target.children[y].style.animation == '0.1s ease 0s 1 normal none running jumpTwo' || !event.target.children[y].style.animation) ) {
            event.target.children[y].style.animation = 'jumpOne .1s'
        } else if(y && event.target.children[i].style.animation == '0.1s ease 0s 1 normal none running jumpOne') {
            event.target.children[i].style.animation = 'jumpTwo .1s'
        }
    }

    const noteClick = (event) => {
        let barPosition = parseInt(window.getComputedStyle(document.querySelector('#metronomeBar')).right.slice(0, -1))

        if ((barPosition <= (firstNote + 60) && barPosition >= (firstNote - 60)) && event.target.children[0].style.backgroundColor == 'yellow') {
            dingSound.play()
            setScore(score + 10)
            noteJump(event, 0);
        } else if (barPosition <= (secondNote + 40) && barPosition >= (secondNote - 40) && event.target.children[1].style.backgroundColor == 'yellow') {
            dingSound.play()
            setScore(score + 10)
            noteJump(event, 1);
        } else if (barPosition <= (thirdNote + 60) && barPosition >= (thirdNote - 40) && event.target.children[2].style.backgroundColor == 'yellow') {
            dingSound.play()
            setScore(score + 10)
            noteJump(event, 2);
        } else if (barPosition <= (fourthNote + 40) && barPosition >= (fourthNote - 40) && event.target.children[3].style.backgroundColor == 'yellow') {
            dingSound.play()
            setScore(score + 10)
            noteJump(event, 3);
        } else if (barPosition <= (fifthNote + 50) && barPosition >= (fifthNote - 50) && event.target.children[4].style.backgroundColor == 'yellow') {
            dingSound.play()
            setScore(score + 10)
            noteJump(event, 4);
        } else if (barPosition <= (sixthNote + 40) && barPosition >= (sixthNote - 40) && event.target.children[5].style.backgroundColor== 'yellow') {
            dingSound.play()
            setScore(score + 10)
            noteJump(event, 5);
        } else if (barPosition <= (seventhNote + 40) && barPosition >= (seventhNote - 60) && event.target.children[6].style.backgroundColor == 'yellow') {
            dingSound.play()
            setScore(score + 10)
            noteJump(event, 6);
        } else if (barPosition <= (eighthNote + 40) && barPosition >= (eighthNote - 40) && event.target.children[7].style.backgroundColor == 'yellow') {
            dingSound.play()
            setScore(score + 10)
            noteJump(event, 7);
        } else if (barPosition <= (ninthNote + 60) && barPosition >= (ninthNote - 60) && event.target.children[8].style.backgroundColor == 'yellow') {
            dingSound.play()
            setScore(score + 10)
            noteJump(event, 8);
        } else if (barPosition >= (thirdNote - 25) && barPosition <= (secondNote + 25) && event.target.children[1].style.background == 'linear-gradient(90deg, black 50%, yellow 50%)') {
            setScore(score + 10)
            noteJump(event, 2, 1);
        } else if (barPosition >= (seventhNote - 25) && barPosition <= (sixthNote + 25) && event.target.children[5].style.background == 'linear-gradient(90deg, black 50%, yellow 50%)') {
            setScore(score + 10)
            noteJump(event, 6, 5);
        } else if (barPosition >= (eighthNote - 25) && barPosition <= (seventhNote + 25) && event.target.children[6].style.background == 'linear-gradient(90deg, black 50%, yellow 50%)') {
            setScore(score + 10)
            noteJump(event, 7, 6);
        } else if (barPosition >= (fourthNote - 25) && barPosition <= (thirdNote + 25) && event.target.children[2].style.background == 'linear-gradient(90deg, black 50%, yellow 50%)') {
            setScore(score + 10)
            noteJump(event, 3, 2);
        } else {
            setScore(score - 10)
        }       
    }
        // const firedFalse = () => {
        //     fired = false
        // }
    
    let styles = {}

    if (measure <= 7) {
         styles = {
            noteOne: {
                backgroundColor: 'White'
            },
            noteTwo: {
                backgroundColor: 'White'
            },
            noteThree: {
                backgroundColor: 'Yellow',
            },
            noteFour: {
                backgroundColor: 'White'
            },
            noteFive: {
                backgroundColor: 'White'
            },
            noteSix: {
                backgroundColor: 'White'
            },
            noteSeven: {
                backgroundColor: 'Yellow'
            },
            noteEight: {
                backgroundColor: 'White'
            },
            noteNine: {
                backgroundColor: 'White'
            },
         }
    }  else if (measure == 8) {
        styles = {
                noteOne: {
                    backgroundColor: 'White'
                },
                noteTwo: {
                    backgroundColor: 'White'
                },
                noteThree: {
                    backgroundColor: 'Yellow'
                },
                noteFour: {
                    backgroundColor: 'White'
                },
                noteFive: {
                    backgroundColor: 'White'
                },
                noteSix: {
                    backgroundColor: 'White'
                },
                noteSeven: {
                    backgroundColor: 'Yellow'
                },
                noteEight: {
                    backgroundColor: 'White'
                },
                noteNine: {
                    backgroundColor: 'Yellow'
                },
    }
} else if (measure >= 9 && measure <= 12 || measure >= 15 && measure <= 17 || measure == 19 || measure == 21 ||  measure == 24 || measure == 26 || measure == 28 || measure == 30  || measure == 23 ) {
    styles = {
        noteOne: {
            backgroundColor: 'Yellow'
        },
        noteTwo: {
            backgroundColor: 'White'
        },
        noteThree: {
            backgroundColor: 'Yellow'
        },
        noteFour: {
            backgroundColor: 'White'
        },
        noteFive: {
            backgroundColor: 'Yellow'
        },
        noteSix: {
            backgroundColor: 'White'
        },
        noteSeven: {
            backgroundColor: 'Yellow'
        },
        noteEight: {
            backgroundColor: 'White'
        },
        noteNine: {
            backgroundColor: 'Yellow'
        },
} } else if (measure == 37 || measure==40 || measure == 41 ||measure == 43 || measure == 45) {
    styles = {
        noteOne: {
            backgroundColor: 'White'
        },
        noteTwo: {
            backgroundColor: 'Yellow'
        },
        noteThree: {
            backgroundColor: 'White'
        },
        noteFour: {
            backgroundColor: 'Yellow'
        },
        noteFive: {
            backgroundColor: 'White'
        },
        noteSix: {
            backgroundColor: 'Yellow'
        },
        noteSeven: {
            backgroundColor: 'White'
        },
        noteEight: {
            backgroundColor: 'Yellow'
        },
        noteNine: {
            backgroundColor: 'White'
        },
}} else if (measure == 38 || measure==42 || measure==44 || measure==46 || measure == 48 || measure == 36 || measure == 34) {
    styles = {
            noteOne: {
                backgroundColor: 'White'
            },
            noteTwo: {
                background: 'linear-gradient(90deg, Black 50%, yellow 50%)'
            },
            noteThree: {
                background: 'linear-gradient(90deg, yellow 50%, black 50%)'
            },
            noteFour: {
                background: 'White'
            },
            noteFive: {
                background: 'white'
            },
            noteSix: {
                background: 'linear-gradient(90deg, black 50%, yellow 50%)'
            },
            noteSeven: {
                background: 'linear-gradient(90deg, yellow 50%, black 50%)'
            },
            noteEight: {
                backgroundColor: 'White'
            },
            noteNine: {
                backgroundColor: 'White'
            },
}
} else if (measure == 39 || measure == 47 || measure == 35 || measure == 37 ) {
    styles = {
            noteOne: {
                backgroundColor: 'White'
            },
            noteTwo: {
                background: 'White'
            },
            noteThree: {
                background: 'linear-gradient(90deg, Black 50%, yellow 50%)'
            },
            noteFour: {
                background: 'linear-gradient(90deg, yellow 50%, black 50%)'
            },
            noteFive: {
                background: 'white'
            },
            noteSix: {
                background: 'white'
            },
            noteSeven: {
                background: 'linear-gradient(90deg, black 50%, yellow 50%)'
            },
            noteEight: {
                background: 'linear-gradient(90deg, yellow 50%, black 50%)'
            },
            noteNine: {
                backgroundColor: 'White'
            },
}
} else if ( measure == 25 || measure == 27 || measure == 29) {
    styles = {
        noteOne: {
            backgroundColor: 'Yellow'
        },
        noteTwo: {
            backgroundColor: 'White'
        },
        noteThree: {
            backgroundColor: 'White'
        },
        noteFour: {
            backgroundColor: 'White'
        },
        noteFive: {
            backgroundColor: 'White'
        },
        noteSix: {
            backgroundColor: 'White'
        },
        noteSeven: {
            backgroundColor: 'White'
        },
        noteEight: {
            backgroundColor: 'White'
        },
        noteNine: {
            backgroundColor: 'Yellow'
        },
}}
// else if (measure == 26 || measure == 28 || measure == 40) {
//     styles = {
//         noteOne: {
//             backgroundColor: 'White'
//         },
//         noteTwo: {
//             backgroundColor: 'yellow'
//         },
//         noteThree: {
//             backgroundColor: 'White'
//         },
//         noteFour: {
//             backgroundColor: 'yellow'
//         },
//         noteFive: {
//             backgroundColor: 'White'
//         },
//         noteSix: {
//             backgroundColor: 'yellow'
//         },
//         noteSeven: {
//             backgroundColor: 'White'
//         },
//         noteEight: {
//             backgroundColor: 'yellow'
//         },
//         noteNine: {
//             backgroundColor: 'White'
//         },
// } 
// }
else if (measure == 13|| measure == 14) {
    styles = {
        noteOne: {
            backgroundColor: 'Yellow'
        },
        noteTwo: {
            backgroundColor: 'White'
        },
        noteThree: {
            backgroundColor: 'White'
        },
        noteFour: {
            backgroundColor: 'White'
        },
        noteFive: {
            backgroundColor: 'Yellow'
        },
        noteSix: {
            backgroundColor: 'White'
        },
        noteSeven: {
            backgroundColor: 'White'
        },
        noteEight: {
            backgroundColor: 'White'
        },
        noteNine: {
            backgroundColor: 'Yellow'
        },
}
}  else if (measure == 31 || measure == 33) {
    styles = {
        noteOne: {
            backgroundColor: 'White'
        },
        noteTwo: {
            backgroundColor: 'White'
        },
        noteThree: {
            backgroundColor: 'Yellow'
        },
        noteFour: {
            backgroundColor: 'Yellow'
        },
        noteFive: {
            backgroundColor: 'White'
        },
        noteSix: {
            backgroundColor: 'White'
        },
        noteSeven: {
            backgroundColor: 'Yellow'
        },
        noteEight: {
            backgroundColor: 'White'
        },
        noteNine: {
            backgroundColor: 'White'
        },
}
} else if (measure == 32) {
    styles = {
        noteOne: {
            backgroundColor: 'White'
        },
        noteTwo: {
            backgroundColor: 'White'
        },
        noteThree: {
            backgroundColor: 'Yellow'
        },
        noteFour: {
            backgroundColor: 'White'
        },
        noteFive: {
            backgroundColor: 'White'
        },
        noteSix: {
            backgroundColor: 'Yellow'
        },
        noteSeven: {
            backgroundColor: 'Yellow'
        },
        noteEight: {
            backgroundColor: 'White'
        },
        noteNine: {
            backgroundColor: 'White'
        },
}
} else if (measure == 18 || measure == 20 || measure == 22) {
    styles = {
        noteOne: {
            backgroundColor: 'Yellow'
        },
        noteTwo: {
            backgroundColor: 'White'
        },
        noteThree: {
            backgroundColor: 'White'
        },
        noteFour: {
            backgroundColor: 'Yellow'
        },
        noteFive: {
            backgroundColor: 'White'
        },
        noteSix: {
            backgroundColor: 'White'
        },
        noteSeven: {
            backgroundColor: 'White'
        },
        noteEight: {
            backgroundColor: 'White'
        },
        noteNine: {
            backgroundColor: 'Yellow'
        },
}
}  else if (measure ==52 || measure ==54) {
    styles = {
        noteOne: {
            backgroundColor: 'White'
        },
        noteTwo: {
            backgroundColor: 'White'
        },
        noteThree: {
            backgroundColor: 'White'
        },
        noteFour: {
            backgroundColor: 'Yellow'
        },
        noteFive: {
            backgroundColor: 'White'
        },
        noteSix: {
            backgroundColor: 'White'
        },
        noteSeven: {
            backgroundColor: 'White'
        },
        noteEight: {
            backgroundColor: 'White'
        },
        noteNine: {
            backgroundColor: 'White'
        },
}
} else if (measure == 53 || measure == 55) {
    styles = {
        noteOne: {
            backgroundColor: 'White'
        },
        noteTwo: {
            backgroundColor: 'White'
        },
        noteThree: {
            backgroundColor: 'White'
        },
        noteFour: {
            backgroundColor: 'white'
        },
        noteFive: {
            backgroundColor: 'White'
        },
        noteSix: {
            backgroundColor: 'yellow'
        },
        noteSeven: {
            backgroundColor: 'White'
        },
        noteEight: {
            backgroundColor: 'White'
        },
        noteNine: {
            backgroundColor: 'White'
        },
}
}
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
      }, []);

    return (
        <div>
            <p>${measure}</p>
        <FocusLock        
            persistentFocus='true'
        >
        <div id = 'rhythmNoteContainer'
        autoFocus
        onKeyDown={noteClick}

        ref = {ref}
        tabIndex = {0}
        >
        {/* <h2 id="rhythmBar"
        ref = {ref}
        tabIndex = {-1}
        onKeyDown = {Jump}
        onKeyUp = {antiJump}
        >-------</h2>
        <h2>-------</h2>
        <h2>-------</h2>
        <h2>-------</h2> */}
        <div className = "note" id ="noteOne" style = {styles.noteOne}></div>
        <div className = "note" id ="noteTwo" style = {styles.noteTwo}></div>
        <div className = "note" id ="noteThree" style = {styles.noteThree}></div>
        <div className = "note" id ="noteFour" style = {styles.noteFour}></div>
        <div className = "note" id ="noteFive" style = {styles.noteFive}></div>
        <div className = "note" id ="noteSix" style = {styles.noteSix}></div>
        <div className = "note" id ="noteSeven" style = {styles.noteSeven}></div>
        <div className = "note" id ="noteEight" style = {styles.noteEight}></div>
        <div className = "note" id ="noteNine" style = {styles.noteNine}></div>
        {measure <=56 && <GameOne measure = {measure} setMeasure = {setMeasure} time={time}
        barDistance={barDistance} setBarDistance={setBarDistance} barDirection={barDirection} setBarDirection={setBarDirection}/>}
        </div>
        </FocusLock>
        {measure >= 57 && (
            <p id ='finalscore'>Final Score: {score}</p>
        )}
        </div>
    )

}

export default Button