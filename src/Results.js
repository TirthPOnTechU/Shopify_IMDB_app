import React from 'react'
import './Results.css'
function Results(props) {
    return (
        <div className="search-result-list">
            <h2>Results:</h2>
            
            {props.error==null?
            props.results.map((result) => {
                return (
                    <div className="result" key={result.imdbID}>
                        <div className="result-container">
                        {
                            !(props.NomineeList.map(film=>film.imdbID).includes(result.imdbID))?
                            <div onClick={(e)=> props.addNominee(result)} className="addBtn">
                            Add
                            </div>
                            :
                            <div onClick={(e)=>null} className="nominatedBtn">
                            Nominated
                            </div>                        
                        }
                        <img src={result.Poster} alt="new"/>
                        <div>
                            <p>{result.Title}</p>
                            <p>{result.Year}</p>
                        </div>
                        </div>
                    </div>
                )
            }):
            <h2>{props.error}</h2>
            }
        </div>
    )
}
export default Results