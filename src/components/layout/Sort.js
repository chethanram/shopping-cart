import React, { Component } from 'react'
import {Modal, Button, Form } from 'react-bootstrap'
export class Sort extends Component {
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
            <span >
            <Button variant="link" onClick={this.handleShow}>
            Sort
            </Button>
            <Modal show={this.state.showpop} onHide={this.handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Sort options</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                  <div>
                  <Form.Check label="Price - High low" type='radio' id='1' /> 
                  <Form.Check label="Price - Low High" type='radio' id='1' /> 
                  <Form.Check label="Discount" type='radio' id='1' /> 
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

export default Sort
