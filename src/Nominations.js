import React from 'react'
import './Nominations.css'

function Nominations(props) {
    return (
        <div className="nomination-list">
             <h2>Nominations ({props.NomineeList.length}/5):</h2>
            {props.NomineeList.map((result) => {
                return (
                    <div className="nominee" key={result.imdbID}>
                         <div className="result-container">
                        <div onClick={(e)=>props.removeNominee(result)} className="removeBtn">
                            Remove
                        </div>
                        <img src={result.Poster} alt="new"/>
                        <div>
                            <p>{result.Title}</p>
                            <p>{result.Year}</p>
                        </div>
                        </div>
                    </div>
                )
            })            
            }
        </div>
    )
}
export default Nominations