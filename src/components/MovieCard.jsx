import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';


export default function MovieCard(props) {
    const { Title, Year, Poster } = props.movie
    return (
        <div>
            <h3>{Title}</h3>
    //         <Card style={{ width: '18rem' }}>
    //             <Card.Img variant="top" src={Poster} />
    //             <Card.Body>
    //                 <Card.Title>{Title}</Card.Title>
    //                 <Card.Text>
    //                     Some quick example text to build on the card title and make up the bulk of
    //                     the card's content.
    // </Card.Text>
    //                 <Button variant="primary">Add to Watchlist!</Button>
    //             </Card.Body>
    //         </Card>
        </div>
    )
}
