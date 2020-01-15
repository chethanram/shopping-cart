import React from 'react';
import {
    Container
} from 'react-bootstrap';
import propTypes from 'prop-types';
import Items from './Items';
import Loader from './Loader';

const ShoppingList = ({ items, isLoading }) => {
    if (isLoading) {
        return <Loader />;
     } else {
    return (
        <Container>
            <div className="row" >
            {
                items.map(item => (
                    <div key={item.id}className="col-md-5ths col-xs-2">
                        <Items key={item.id} item={item}/>
                    </div>
                    )
                )
            }
            </div>
        </Container>
    );
 }
}

ShoppingList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool.isRequired
}

export default ShoppingList;
