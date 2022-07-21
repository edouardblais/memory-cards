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

    let images = [ sharma, ondra, caldwell, webb, trotter, megos, williams, hayes, harrington, davis, babsi, janja ];

    const  shuffleArray = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const [gameboard, setGameboard] = useState(shuffleArray(images));

    const [selectedimages, setSelectedImages] = useState([]);

    const shuffleGameboard = () => {
        let newgameboard = [...gameboard];
        let shuffledgameboard = shuffleArray(newgameboard);
        setGameboard(shuffledgameboard);
    };

    const cardChosen = (e) => {
        if (selectedimages.includes(e.target.src)) {
            console.log(selectedimages);
            setScore(0);
            setSelectedImages([]);
            console.log(selectedimages);
        } else {
            console.log(selectedimages);
            setScore(score+1);
            setSelectedImages(prevState => [...prevState, e.target.src]);
            shuffleGameboard();
            console.log(selectedimages);
        }
    }

    const [score, setScore] = useState(0);

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
            <div>
                {gameboard?.map((climber, index) => (
                    <Image key={index} src={climber} onClick={(e) => cardChosen(e)}/>
                ))}
            </div>
            <Button onClick={shuffleGameboard} name='Play Again'/>
        </div>
    )
}

export default Main