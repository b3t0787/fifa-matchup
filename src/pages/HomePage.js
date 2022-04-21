import {React, useState} from 'react';
import { FaQuestion } from 'react-icons/fa';
import Listresults from '../components/Listresults';

function HomePage() {

    const [showResults, setWaitingResults] = useState(false);

    const userClickResults = async () => {
        setWaitingResults(true);
    }

    const resetResults = async () => {
        setWaitingResults(false);
    }
    
    return (
        <>
        <h1 className="header ">FIFA World Cup <br /> Match-up</h1>

        <div className="countdown">
            <h1> Countdown </h1>
        </div>
        <div className="intro">
        <div>
            <h2>News feed <br/> Twitter, Rss <br/>Other</h2> 
        </div>
            <div>
                <h2>
                    The most prestigious <br/> tournament in the world.
                </h2>
                <p>
                    Taking place quadrennially, the FIFA Men's World Cup sees <br/>
                    32 nations compete against each other for the prize. With <br/>
                    continental qualification pathways leading  to an exciting <br/>
                    finals event, it brings fans together around the passion and <br/>
                    love for the game.
                </p>
            </div>
        </div>
        <div className="selection">
            <div>
            <h2>Country</ h2>
            <select>
                <option></option>
                <option>Spain</option>
                <option>Brazil</option>
                <option>USA</option>
                <option>France</option>
                <option>Mexico</option>
                <option>South Korea</option>
                <option>Argentina</option>
                </select>
            </div>
            <div>
                <div className="vs">
                    <FaQuestion />
                </div>
                <h2>VS</h2>
                <button onClick={resetResults}>Reset</button>
                <button onClick={userClickResults}>GO</button>
            </div>
            <div>
            <h2>Country </h2>
                <select>
                    <option></option>
                    <option>Spain</option>
                    <option>Brazil</option>
                    <option>USA</option>
                    <option>France</option>
                    <option>Mexico</option>
                    <option>South Korea</option>
                    <option>Argentina</option>
                </select>
            </div>
        </div>
        <Listresults showResults={showResults} />
        

        </>
    );
}

export default HomePage;