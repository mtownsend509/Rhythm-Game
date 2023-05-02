import react, {useState} from 'react';

function StartApp({currentPage, setPage}) {
        return (
            <h1
            onClick = {() => setPage('GameOne')}>
            start
            </h1>
        );
}

export default StartApp
