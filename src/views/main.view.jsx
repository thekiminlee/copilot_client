import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import DatePicker from '@bit/nexxtway.react-rainbow.date-picker'

import "../scss/view.scss"
import { API } from "../utils"

// API
const POST_OFFICEHOUR = API + "officehour"

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: new Date()

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(POST_OFFICEHOUR, { name: this.state.name, date: this.state.date })
        .then(res => alert("Office hour for " + this.state.date.toString() + " successfully posted."))
        .catch(err => {
            alert("Office hour cannot be posted");
            console.log(err)
        })
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div className='container'>
                <section className='content-container'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formOfficeHourName">
                            <Form.Label><text className='form-label'>Office Hour Name</text></Form.Label>
                            <Form.Control value={this.state.name} onChange={this.handleChange} type='text' placeholder='Enter office hour name'></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formDate">
                            <Form.Label><text className='form-label'>Date</text></Form.Label>
                            <div style={{maxWidth: 400}}>
                                <DatePicker 
                                    formatStyle="large"
                                    minDate={new Date()}
                                    value={this.state.date}
                                    onChange={value => this.setState({date: value})} 
                                />
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{marginTop: 20}}>
                            Submit
                        </Button>
                    </Form>
                    
                </section>
            </div>
        );
    }

}