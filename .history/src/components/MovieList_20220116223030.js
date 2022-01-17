import React from 'react'
import { Badge, Card } from 'react-bootstrap'

const MovieList = (props) => {
    return (
        <div className="d-flex flex-row">
            {
                props.movieData.map(movie => {
                    return (<Card key={movie.imdbID}>
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Badge bg="info">{movie.Type}</Badge>
                            <Badge bg="info">{movie.Year}</Badge>
                            <Badge bg="info">{movie.Rated}</Badge>
                            <Badge bg="info">{movie.Genre}</Badge>
                            <Badge bg="info">{movie.Director}</Badge>
                            <Badge bg="info">{movie.Actors}</Badge>
                            <Badge bg="info">{movie.Awards}</Badge>
                            <Card.Text>{movie.Plot}</Card.Text>
                        </Card.Body>
                    </Card>)
                })
            }
        </div>
    )
}

export default MovieList
