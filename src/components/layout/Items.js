import React from 'react';
import {Card,Button} from 'react-bootstrap';

 const Items=({item: {img_url, name, price, discount, category}, onAddtocart }) => {
    
        return (
            <div>
            <Card>
            <Card.Img variant="top" src={img_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {price} <del>{price*(discount/100) + price} </del> <span className='text-success'>{discount}% off </span>
                <br />
                {category}
                </Card.Text>
                <Button  type="submit" onClick={onAddtocart} value="Add to cart"  variant="warning">Add to cart </Button>
            </Card.Body>
            </Card>
            </div>
        )
    }

export default Items
