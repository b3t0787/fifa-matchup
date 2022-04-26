import {React, useEffect, useState} from 'react';
import { FaQuestion } from 'react-icons/fa';
import Listresults from '../components/Listresults';

function HomePage() {

    const [showResults, setWaitingResults] = useState(false);
    const [results, setResults] = useState([]);
    const [nations, setNations] = useState([]);
    const [country_1, setCountry_1] = useState();
    const [country_2, setCountry_2] = useState();

    const userClickResults = async () => {
        const response = await fetch(`http://localhost:8000/results/left/${country_1}/right/${country_2}`);
        const data = await response.json();
        setResults(data);
        setWaitingResults(true);
    }

    const resetResults = async () => {
        setWaitingResults(false);
    }

    const loadNations = async () => {
        const response = await fetch(`http://localhost:8000/Nations`); // calling rest API to obtain array of nations
        const data = await response.json();
        setNations(data);
    };

    useEffect( () => {
        loadNations();
    }, []);
    
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
            <h2>Nation</ h2>
            <select onChange={(e) => setCountry_1(e.target.value)}>
                <option></option>
                    {nations.map((nation) => <option value={nation.nation_id}>{nation.name}</option>)}
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
            <h2>Nation</h2>
                <select onChange={(e) => setCountry_2(e.target.value)}>
                    <option></option>
                    {nations.map((nation) => <option value={nation.nation_id}>{nation.name}</option>)}
                </select>
            </div>
        </div>
        <Listresults showResults={showResults} results={results} />
        

        </>
    );
}

export default HomePage;