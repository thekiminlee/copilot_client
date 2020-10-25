import React, { Component } from 'react';

class Question extends Component{
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question.question,
            author: this.props.question.author,
            email: this.props.question.email,
            subscribers: this.props.question.subscribers,
            subscriber_count: this.props.question.subscriber_count
        }
    }

    render() {
        return (
            <div className='question'>
                {this.state.question} <br/>
                Posted by {this.state.author} 
            </div>
        )
    }
}

export default Question;