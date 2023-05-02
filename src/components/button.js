import react, {useState, useEffect, useRef} from 'react';
import GameOne from './gameOne'


function Button () {
    let fired = false

    const Jump = (event) => {
        if (!fired) {
        fired = true
        event.target.innerHTML = '^^^^^^^'
        console.log(parseInt(event.target.nextSibling.children[0].style.right.slice(0,-2)))
        if ( (window.innerWidth * 55/100) > parseInt(event.target.nextSibling.children[0].style.right.slice(0,-2)) && (window.innerWidth * 45/100) < parseInt(event.target.nextSibling.children[0].style.right.slice(0,-2))) {
            console.log('Success!!')
        } else {
            console.log('fail go to sleep')
        }
        }
    }

    const antiJump = (event) => {
        if (fired) {
        fired = false
        event.target.innerHTML = '-------'
        }
    }

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
        <GameOne />
        </div>
    )

}

export default Button