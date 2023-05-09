import react, {useState, useEffect, useRef} from 'react';
import GameOne from './gameOne'


function Button () {
    let fired = false
    const [score, setScore] = useState(0)
    let firstNote = ((window.innerWidth/2) + 464)
    let secondNote = ((window.innerWidth/2) + 348)
    let thirdNote = ((window.innerWidth/2) + 232)
    let fourthNote = ((window.innerWidth/2) + 116)
    let fifthNote = (window.innerWidth/2)
    let sixthNote = ((window.innerWidth/2) - 116)
    let seventhNote = ((window.innerWidth/2) - 232)
    let eighthNote = ((window.innerWidth/2) - 348)
    let ninthNote = ((window.innerWidth/2) - 464)

    const [time, setTime] = useState(0)
    const [count, setCount] = useState(1)
    const [barDistance, setBarDistance] = useState((window.innerWidth/2) - 500) ;
    const [barDirection, setBarDirection] = useState('left');

    // useEffect(() => {
    const timeKeeper = setInterval(
        () => {
            setTime(time + 1) 
            setMeasure(measure + 1)
            if(time/2%1 == 0) {
                console.log('left')
                setBarDirection('left')
                setBarDistance((window.innerWidth/2) - 500)
            } else {
                console.log('right')
                setBarDirection('left')
                setBarDistance((window.innerWidth/2) + 480)
            }     
        },
        1895
    )
    // console.log('plz react plz')
    // return () => clearInterval(timeKeeper)
    // }, []);


    const noteJump = (event, i) => {
        if (fired == false) {
        if(!event.target.children[i].style.animation || event.target.children[i].style.animation == '0.1s ease 0s 1 normal none running jumpTwo') {
            event.target.children[i].style.animation = 'jumpOne .1s'
            fired = true
        } else if (event.target.children[i].style.animation == '0.1s ease 0s 1 normal none running jumpOne') {
            event.target.children[i].style.animation = 'jumpTwo .1s'
            fired = true
        }
     }
    }

    const noteRelease = () => {
        fired = false
    }

    const noteClick = (event) => {
        let barPosition = parseInt(window.getComputedStyle(document.querySelector('#metronomeBar')).right.slice(0, -1))

        if ((barPosition <= (firstNote + 40) && barPosition >= (firstNote - 40)) && event.target.children[0].style.backgroundColor == 'yellow') {
            console.log('firstNote hit');
            setScore(score + 10)
            noteJump(event, 0);
        } else if (barPosition <= (secondNote + 40) && barPosition >= (secondNote - 40) && event.target.children[1].style.backgroundColor == 'yellow') {
            console.log('secondNote hit')
            setScore(score + 10)
            noteJump(event, 1);
        } else if (barPosition <= (thirdNote + 40) && barPosition >= (thirdNote - 40) && event.target.children[2].style.backgroundColor == 'yellow') {
            console.log('thirdNote hit')
            setScore(score + 10)
            console.log(event.target.children[2].style.animation);
            noteJump(event, 2);
        } else if (barPosition <= (fourthNote + 40) && barPosition >= (fourthNote - 40) && event.target.children[3].style.backgroundColor == 'yellow') {
            console.log('fourthNote hit')
            setScore(score + 10)
            noteJump(event, 3);
        } else if (barPosition <= (fifthNote + 40) && barPosition >= (fifthNote - 40) && event.target.children[4].style.backgroundColor == 'yellow') {
            console.log('fifthNote hit')
            setScore(score + 10)
            noteJump(event, 4);
        } else if (barPosition <= (sixthNote + 40) && barPosition >= (sixthNote - 40) && event.target.children[5].style.backgroundColor== 'yellow') {
            console.log('sixthNote hit')
            setScore(score + 10)
            noteJump(event, 5);
        } else if (barPosition <= (seventhNote + 40) && barPosition >= (seventhNote - 40) && event.target.children[6].style.backgroundColor == 'yellow') {
            console.log('seventhNote hit')
            setScore(score + 10)
            noteJump(event, 6);
        } else if (barPosition <= (eighthNote + 40) && barPosition >= (eighthNote - 40) && event.target.children[7].style.backgroundColor == 'yellow') {
            console.log('eighthNote hit')
            setScore(score + 10)
            noteJump(event, 7);
        } else if (barPosition <= (ninthNote + 40) && barPosition >= (ninthNote - 40) && event.target.children[8].style.backgroundColor == 'yellow') {
            console.log('ninthNote hit')
            setScore(score + 10)
            noteJump(event, 8);
        } else {
            setScore(score - 10)
        }
        
    }

    const [measure, setMeasure] = useState(1)
    
    let styles = {}

    if (measure <= 7 || (measure >= 34 && measure <= 36) || measure == 38 || measure == 39 || measure == 42 || measure == 44 || (measure>=46 && measure <= 48)) {
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
} else if (measure == 9 || measure == 11 || measure == 15 || measure == 17 || measure == 19 || measure == 21 || measure == 23 || measure == 37 || measure == 41 ||measure == 43 || measure == 45) {
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
            backgroundColor: 'White'
        },
} } else if (measure == 10 || measure == 12 || measure == 16 || measure == 24 || measure == 26 || measure == 28 || measure == 30  ||  measure == 40 ) {
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
else if (measure == 13) {
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
            backgroundColor: 'White'
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
} else if (measure ==14) {
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
} else if (measure == 18 || measure == 20 || measure == 22) {
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
            backgroundColor: 'Yellow'
        },
}
}  else if (measure >=52 && measure <=55) {
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
            backgroundColor: 'White'
        },
}
}
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
      }, []);

    return (
        <div id = 'rhythmNoteContainer'
        onKeyDown={noteClick}
        onKeyUp = {noteRelease}
        ref = {ref}
        tabIndex = {-1}
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
        <GameOne measure = {measure} setMeasure = {setMeasure} time = {time} setCount = {setCount} count = {count}
    barDistance = {barDistance} setBarDistance ={setBarDistance} barDirection = {barDirection} setBarDirection = {setBarDirection}/>
        </div>
    )

}

export default Button