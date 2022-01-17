import React from 'react'
import { Badge, Card } from 'react-bootstrap'

const MovieList = (props) => {
    return (
        <div className="row">
            {
                props.movieData.map(movie => {
                    return (<Card key={movie.imdbID} className="col-3 m-2 p-2">
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <div className="col">
                                <p className="m-1">{movie.Type}</p>
                                <p className="m-1">{movie.Year}</p>
                                <p className="m-1">{movie.Rated}</p>
                                <p className="m-1">{movie.Genre}</p>
                                <p className="m-1">{movie.Director}</p>
                                <p className="m-1">{movie.Actors}</p>
                                <p className="m-1">{movie.Awards}</p>
                            </div>
                            <Card.Text>{movie.Plot}</Card.Text>
                        </Card.Body>
                    </Card>)
                })
            }
        </div>
    )
}

export default MovieList
