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
                    star icon
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form> */}
                <Search searchValue = {this.searchValue} />
            </Navbar>
           </div>
        )
    }
}

export default Header
