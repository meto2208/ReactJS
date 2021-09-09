import React, { Component } from "react";
import PropTypes from 'prop-types';



export class Movies extends React.Component {
    render(props) {
        return (
            <div>
                {
                    this.props.favMovies.map((movie, i) => {
                        return (
                            <div className="w-50">
                                <h2>{movie.name}</h2>
                                <ul>
                                    <li>{movie.date}</li>
                                    <li>{movie.genre}</li>
                                    <li>{movie.plot}</li>
                                    <li><a href={movie.imdbUrl} target="_blank">Imdb Url</a></li>
                                    <img src={movie.imgUrl} style={{ width: "100px" }} />
                                    <hr />
                                </ul>

                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

Movies.propTypes = {
    favMovies: PropTypes.arrayOf(PropTypes.object),
}