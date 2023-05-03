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

    const noteClick = (event) => {
        let barPosition = parseInt(window.getComputedStyle(document.querySelector('#metronomeBar')).right.slice(0, -1))

        if ((barPosition <= (firstNote + 30) && barPosition >= (firstNote - 30)) && event.target.children[0].style.backgroundColor == 'yellow') {
            console.log('firstNote hit');
            setScore(score + 10)
            console.log(score)
        } else if (barPosition <= (secondNote + 30) && barPosition >= (secondNote - 30) && event.target.children[1].style.backgroundColor == 'yellow') {
            console.log('secondNote hit')
            setScore(score + 10)
            console.log(score)
        } else if (barPosition <= (thirdNote + 30) && barPosition >= (thirdNote - 30) && event.target.children[2].style.backgroundColor == 'yellow') {
            console.log('thirdNote hit')
            setScore(score + 10)
            console.log(score)
            event.target.children[2].style.backgroundColor = 'green'
        } else if (barPosition <= (fourthNote + 30) && barPosition >= (fourthNote - 30) && event.target.children[3].style.backgroundColor == 'yellow') {
            console.log('fourthNote hit')
            setScore(score + 10)
            console.log(score)
        } else if (barPosition <= (fifthNote + 30) && barPosition >= (fifthNote - 30) && event.target.children[4].style.backgroundColor == 'yellow') {
            console.log('fifthNote hit')
            setScore(score + 10)
            console.log(score)
        } else if (barPosition <= (sixthNote + 30) && barPosition >= (sixthNote - 30) && event.target.children[5].style.backgroundColor== 'yellow') {
            console.log('sixthNote hit')
            setScore(score + 10)
            console.log(score)
        } else if (barPosition <= (seventhNote + 30) && barPosition >= (seventhNote - 30) && event.target.children[6].style.backgroundColor == 'yellow') {
            console.log('seventhNote hit')
            setScore(score + 10)
            console.log(score)
        } else if (barPosition <= (eighthNote + 30) && barPosition >= (eighthNote - 30) && event.target.children[7].style.backgroundColor == 'yellow') {
            console.log('eighthNote hit')
            setScore(score + 10)
            console.log(score)
        } else if (barPosition <= (ninthNote + 30) && barPosition >= (ninthNote - 30) && event.target.children[8].style.backgroundColor == 'yellow') {
            console.log('ninthNote hit')
            setScore(score + 10)
            console.log(score)
        }
        // if (barPosition <)
        
    }

    const [measure, setMeasure] = useState(1)

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
                backgroundColor: 'White'
            },
         }
    } else if (measure == 8) {
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
} else if (measure == 9 || measure == 11 || measure == 15 || measure == 17 || measure == 19 || measure == 21 || measure == 23 ) {
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
} } else if (measure == 10 || measure == 12 || measure == 16 || measure == 24 || measure == 26 || measure == 28 || measure == 30 ) {
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
// else if (measure == 26 || measure == 28 || measure == 30) {
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
} else if (measure == 25 || measure == 27 || measure == 29) {
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
}  else if (measure >= 34 && measure <= 36) {
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
        <GameOne measure = {measure} setMeasure = {setMeasure}/>
        </div>
    )

}

export default Button