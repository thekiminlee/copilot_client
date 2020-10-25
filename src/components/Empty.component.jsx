import React, { Component } from 'react';

import "../scss/component.scss";

class Empty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        }
    }

    render() {
        return (
            <div className='empty-container'>
                <div>
                    <text className='empty-message'>{this.props.message}</text>
                </div>
            </div>
        )
    }
}

export default Empty;