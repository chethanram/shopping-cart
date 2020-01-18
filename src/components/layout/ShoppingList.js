import React from 'react';
import {
    Container
} from 'react-bootstrap';
import propTypes from 'prop-types';
import Items from './Items';
import Loader from './Loader';
import Filter from './Filter';
import Sort from './Sort';

const ShoppingList = ({ items, isLoading, onAddtocart }) => {
    if (isLoading) {
        return <Loader />;
     } else {
    return (
        <Container>
            <div>
                <hr />
                <Filter />
                <Sort />
                <hr />
                </div>
            <div className="row" >
            {
                items.map(item => (
                    <div key={item.id}className="col-md-5ths col-xs-2">
                        <Items key={item.id} item={item} onAddtocart={onAddtocart}/>
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
