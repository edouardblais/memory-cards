import React, { useState, useEffect } from 'react'
import Button from '../tools/button'
import Image from '../tools/image'
import sharma from '../images/sharma.jpg'
import ondra from '../images/ondra.jpg'
import caldwell from '../images/caldwell.jpg'
import webb from '../images/webb.jpg'
import trotter from '../images/trotter.jpg'
import megos from '../images/megos.jpg'
import williams from '../images/williams.jpg'
import hayes from '../images/hayes.jpg'
import harrington from '../images/harrington.jpg'
import davis from '../images/davis.jpg'
import babsi from '../images/babsi.jpg'
import janja from '../images/janja.jpg'

const Main = () => {

    const images = [ sharma, ondra, caldwell, webb, trotter, megos, williams, hayes, harrington, davis, babsi, janja ];

    const randomArray = (array) => {
        for (let i = (array.length) - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const [gameboard, setGameboard] = useState(randomArray(images));

    const shuffleGameboard = () => {
        setGameboard(randomArray(gameboard));
    };

    const showGameboard = () => {
        gameboard.forEach((e) => {
            return <Image src={e}/>
        })
    }

    const [score, setScore] = useState(0);

    useEffect(() => {
        setScore(0)
    }, [gameboard]);

    const [highscore, setHighscore] = useState(0);

    useEffect(() => {
        if (score > highscore) {
            setHighscore(score)
        }
    }, [score, highscore]);

    return (
        <div>
            <div>Your score is: {score}</div>
            <div>Your best score is: {highscore}</div>
            {showGameboard}
            <Button onClick={shuffleGameboard} name='Play Again'/>
        </div>
    )
}

export default Main