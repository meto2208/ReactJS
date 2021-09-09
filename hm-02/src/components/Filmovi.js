import React from "react";
import PropTypes from 'prop-types';


export function Filmovi(props) {
    return (
        <div>

            <div className="">

                <div className="row">
                    {props.omileniFilmovi.map((movie, i) => {
                        return (
                            <div className="col-sm">

                                <div className="card " style={{ width: "300px", height: "800px" }}>
                                    <img className="card-img-top" src={movie.imgUrl} alt="Card image cap" style={{ width: "300px", height: "400px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.name}</h5>
                                        <p className="card-text">{movie.date}</p>
                                        <p className="card-text">{movie.genre}</p>
                                        <p clasName="card-text">{movie.plot}</p>
                                        <a href={movie.imdbUrl} className="btn btn-primary" target="_blank">Imdb link</a>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        </div >
    )
}

Filmovi.propTypes = {
    omileniFilmovi: PropTypes.arrayOf(PropTypes.object)
}