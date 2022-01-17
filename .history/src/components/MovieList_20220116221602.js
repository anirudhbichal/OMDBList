import React from 'react'
import { Card } from 'react-bootstrap'

const MovieList = (props) => {
    return (
        <div className='flex'>
            {
                props.movieData.map(movie => {
                    <Card key={movie.imdbID}>
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>
                            <p>{movie.Type}</p>
                            <p>{movie.Year}</p>
                            <p>{movie.Rated}</p>
                            <p>{movie.Genre}</p>
                            <p>{movie.Director}</p>
                            <p>{movie.Actors}</p>
                            <p>{movie.Plot}</p>
                            <p>{movie.Awards}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })
            }
        </div>
    )
}

export default MovieList
