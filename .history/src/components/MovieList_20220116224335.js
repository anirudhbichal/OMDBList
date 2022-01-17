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
                                <Badge bg="info" className="m-1">{movie.Type}</Badge>
                                <Badge bg="info" className="m-1">{movie.Year}</Badge>
                                <Badge bg="info" className="m-1">{movie.Rated}</Badge>
                                <Badge bg="info" className="m-1">{movie.Genre}</Badge>
                                <Badge bg="info" className="m-1">{movie.Director}</Badge>
                                <Badge bg="info" className="m-1">{movie.Actors}</Badge>
                                <Badge bg="info" className="m-1">{movie.Awards}</Badge>
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
