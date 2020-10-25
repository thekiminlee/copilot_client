import React, { Component } from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';

import { API } from '../utils';

const PATCH_QUESTION = API + '/question/'

class Question extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.question._id,
            question: this.props.question.question,
            author: this.props.question.author,
            email: this.props.question.email,
            subscribers: this.props.question.subscribers,
            subscriber_count: this.props.question.subscriber_count
        }
    }

    handleClick = (event) => {
        let email = "test@gmail.com";
        let url = PATCH_QUESTION + this.state.id + '/' + email;
        axios.patch(url).then(resp => {
            alert("Subscribed!");
            window.location.reload();
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className='question'>
                <div className='question-container'>
                    <div className="w-100">
                        <text style={{fontSize: 20}}>{this.state.question}</text> <br/>
                        Posted by <strong>{this.state.author}</strong> | subscribers: {this.state.subscriber_count}
                    </div>
                    <div classname="flex-shrink-1">
                        <Button variant='secondary' size='sm' style={{marginTop: 10, marginBottom: 10}}onClick={this.handleClick}>+</Button>
                    </div>
                </div>                
                
            </div>
        )
    }
}

export default Question;