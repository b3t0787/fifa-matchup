import React from 'react';



function Listresults( { showResults } ) {

    if(showResults) {
        return (
        <>
        <div className="world_cups_won">
            <div> 5 World Cups won</div>
            <div></div>
            <div> 2 World Cups won</div>
        </div>
        <div className="stats" >
            <p> Previous World cup faceoffs and some stats will go here</p>
        </div>
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