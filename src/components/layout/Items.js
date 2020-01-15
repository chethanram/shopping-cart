import React from 'react';
import {Card,Button} from 'react-bootstrap';

 const Items=({item: {img_url, name, price, discount, category} }) => {
        return (
            <div>
            <Card>
            <Card.Img variant="top" src={img_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {price} {discount}
                <br />
                {category}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>
            </div>
        )
    }

export default Items
