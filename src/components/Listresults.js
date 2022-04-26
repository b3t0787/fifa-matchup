import React from 'react';



function Listresults( { showResults, results } ) {

    if(showResults) {
        return (
        <>
        <div className="world_cups_won">
            <div> 5 World Cups won</div>
            <div></div>
            <div> 2 World Cups won</div>
        </div>
            {results.map((result) => 
            <div className="stats"> <h className="underline">{result.competition} &nbsp; {result.competition_year}</h>
            <p>{result.nation_1_name} {result.nation_1_score}&nbsp; - &nbsp;
            {result.nation_2_score} {result.nation_2_name}</p></div>)}
        <div className="additional_info">
            <div>
                <p>Some general information about selection (Country/ team)</p>
            </div>
            <div>
                <p>Some general information about selection (Country/ team)</p>
            </div>
        </div>
        </>
        )
    }
    return (
        <p className="text_center">
            Press GO whenever you're ready to see resutls
        </p>
    )
}

export default Listresults;