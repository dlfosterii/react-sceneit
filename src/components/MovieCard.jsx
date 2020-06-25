import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';


export default function MovieCard(props) {
    const { Title, Year, Poster } = props.movie
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>
                    {Year}
                </Card.Text>
                <Button variant="primary" onClick={()=>{props.addToWatchList(props.movie)}}>Add to Watchlist!</Button>
            </Card.Body>
        </Card>

    )
}
