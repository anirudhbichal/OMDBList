import React from 'react'
import { Badge, Card } from 'react-bootstrap';

const FeaturedList = (props) => {
    return (
        <div className="row">
            {
                props.movieData.map(movie => {
                    return (<Card key={movie.imdbID} className="col-lg-3 col-sm-4 col-md-4 col-xs-12 m-2 p-2">
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <div className="col">
                                <Badge bg="info" className="m-1">{movie.Type}</Badge>
                                <Badge bg="info" className="m-1">{movie.Year}</Badge>
                                <Badge bg="info" className="m-1">{movie.Rated}</Badge>
                                <Badge bg="info" className="m-1">{movie.Genre}</Badge>
                                <p className='m-0 p-0'>Director - {movie.Director}</p>
                                <h6>Awards - {movie.Actors}</h6>
                                <h6>Awards - {movie.Awards}</h6>
                            </div>
                            <Card.Text>{movie.Plot}</Card.Text>
                        </Card.Body>
                    </Card>)
                })
            }
        </div>
    )
}

export default FeaturedList
