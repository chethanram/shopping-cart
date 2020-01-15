import React, { Component } from 'react'
import {Modal, Button } from 'react-bootstrap'
export class Filter extends Component {
    state ={
        showpop : false
    }
    handleShow =() =>{
        this.setState({showpop:true});
    }
    handleClose = () => {
        this.setState({showpop:false});
    }
    render() {
        return (
            <span>
            <Button variant="link" onClick={this.handleShow}>
            Filter
            </Button>   
            <Modal show={this.state.showpop} onHide={this.handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter options</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <div class="d-flex justify-content-center my-4">
                    <span class="font-weight-bold indigo-text mr-2 mt-1">0</span>
                    <form class="range-field w-25">
                    <input class="border-0" type="range" min="0" max="100" />
                    </form>
                    <span class="font-weight-bold indigo-text ml-2 mt-1">100</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Cancel
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                    Apply
                    </Button>
                </Modal.Footer>
            </Modal>
</span>

                
        )
    }
}

export default Filter
