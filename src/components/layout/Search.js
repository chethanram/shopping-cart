import React, { Component } from 'react'
import {
    Form
}
from 'react-bootstrap';

export class Search extends Component {
    state = {
        text:''
    }

    onSubmit = e => {e.preventDefault(); this.props.searchValue(this.state.text); }

    onChange = e => {this.setState({[e.target.name]: e.target.value});this.props.searchValue(this.state.text); }
    

    render() {
        return (
            <div>                
                <Form inline className='form' onSubmit= {this.onSubmit}>
                <input type="text" name='text' placeholder="Search" value={this.state.text} onChange = {this.onChange} />
                 <input type='submit' value='Search' name='text' variant="outline-light" className='btn btn-dark ' />
                </Form>
            </div>
        )
    }
}

export default Search
