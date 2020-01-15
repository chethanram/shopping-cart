import React, { Component } from 'react';
import Search from './Search';
import {
    Navbar,
    Nav
}
from 'react-bootstrap';

export class Header extends Component {
    searchValue = (text) => {
        this.props.searchText(text);
    }
    render() {
        return (
           <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <i class="fas fa-star"></i>
                </Nav>
                <i className="fas fa-cart-plus"></i>
                <Search searchValue={this.searchValue} />
                
            </Navbar>
           </div>
        )
    }
}

export default Header
